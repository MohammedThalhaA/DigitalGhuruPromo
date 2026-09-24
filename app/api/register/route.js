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
    const { name, phone, email, status, interest, ticketId } = await req.json();

    const client = await pool.connect();
    
    // Create table if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        status VARCHAR(100),
        interest VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        ticket_downloaded BOOLEAN DEFAULT FALSE,
        ticket_id VARCHAR(50)
      )
    `);
    
    // Add columns if they don't exist (for existing tables)
    try { await client.query('ALTER TABLE registrations ADD COLUMN ticket_downloaded BOOLEAN DEFAULT FALSE'); } catch (e) {}
    try { await client.query('ALTER TABLE registrations ADD COLUMN ticket_id VARCHAR(50)'); } catch (e) {}

    // Insert user
    const result = await client.query(
      'INSERT INTO registrations (name, phone, email, status, interest, ticket_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [name, phone, email, status, interest, ticketId]
    );

    client.release();

    return NextResponse.json({ success: true, id: result.rows[0].id }, { status: 200 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
