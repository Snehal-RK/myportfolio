import { NextResponse } from 'next/server';
        import mysql from 'mysql2/promise';

        export async function GET() {
          try {
            const connection = await mysql.createConnection({
              host: process.env.MYSQL_HOST || 'localhost',
              user: process.env.MYSQL_USER || 'root',
              password: process.env.MYSQL_PASSWORD || '',
              database: process.env.MYSQL_DATABASE || 'portfolio_analytics',
            });

            await connection.beginTransaction();
            const [results] = await connection.execute('SELECT count FROM counts WHERE type = "views"');
            const views = results[0]?.count || 0;
            await connection.execute('UPDATE counts SET count = count + 1 WHERE type = "views"');
            await connection.commit();
            await connection.end();

            return NextResponse.json({ count: views + 1 });
          } catch (error) {
            console.error('Error getting view count:', error);
            return NextResponse.json({ error: `Failed to get view count: ${error.message}` }, { status: 500 });
          }
        }