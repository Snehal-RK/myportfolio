import { NextResponse, NextRequest } from 'next/server';
import mysql from 'mysql2/promise';
import { cookies } from 'next/headers';

export async function GET(request, NextRequest) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'portfolio_analytics',
    });

    const visitorId = cookies().get('visitorId')?.value;

    if (!visitorId) {
      // This is a new visitor
      const newVisitorId = crypto.randomUUID();
      cookies().set('visitorId', newVisitorId, { maxAge: 31536000 }); // Cookie for 1 year
      await connection.execute('UPDATE counts SET count = count + 1 WHERE type = "visitors"');
    }

    const [results] = await connection.execute('SELECT count FROM counts WHERE type = "visitors"');
    const visitors = results[0]?.count || 0;
    await connection.end();

    return NextResponse.json({ count: visitors });
  } catch (error) {
    console.error('Error getting visitor count:', error);
    return NextResponse.json(
      { error: `Failed to get visitor count: ${error.message}` },
      { status: 500 },
    );
  }
}