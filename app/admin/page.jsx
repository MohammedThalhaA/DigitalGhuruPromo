import { Pool } from 'pg';
import { cookies } from 'next/headers';
import AdminDashboardClient from './AdminDashboardClient';
import AdminLogin from './AdminLogin';

// Force dynamic rendering since we are querying the database
export const dynamic = 'force-dynamic';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function AdminPage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('admin_auth');

  if (authCookie?.value !== 'true') {
    return <AdminLogin />;
  }

  const client = await pool.connect();
  
  try {
    // 1. Ensure table exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        status VARCHAR(100),
        interest VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        ticket_downloaded BOOLEAN DEFAULT FALSE
      )
    `);

    // 2. Fetch all registrations ordered by most recent
    const { rows: registrations } = await client.query('SELECT * FROM registrations ORDER BY created_at DESC');

    // 3. Fetch total page views
    let totalViews = 0;
    try {
      const { rows: viewsResult } = await client.query('SELECT COUNT(*) FROM page_views');
      totalViews = parseInt(viewsResult[0].count, 10);
    } catch(e) {
      // Table might not exist yet if no visits occurred
      totalViews = 0;
    }

    return (
      <main style={{ padding: '40px 20px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#0f172a' }}>Registrations Dashboard</h1>
          
          <AdminDashboardClient initialData={registrations} totalViews={totalViews} />
        </div>
      </main>
    );
  } catch (error) {
    console.error("Failed to load admin data:", error);
    return <div>Error loading dashboard. Please check database connection.</div>;
  } finally {
    client.release();
  }
}
