import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export async function POST(req) {
  try {
    const { pathname } = await req.json();

    const client = await pool.connect();
    
    // Create table if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS page_views (
        id SERIAL PRIMARY KEY,
        pathname VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert view
    await client.query(
      'INSERT INTO page_views (pathname) VALUES ($1)',
      [pathname]
    );

    client.release();

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
