import postgres from "postgres";

const sql = postgres(process.env.SUPABASE_DATABASE_URL);

exports.handler = async (event) => {
    try {
        // Increment view count
        await sql`Update views SET count = count + 1 WHERE id = 1` ;

        // Retrieve the current view count
        const result = await sql`SELECT count FROM views WHERE id = 1`;
        const count  = result[0].count;

        return {
            statusCode: 200,
            body : JSON.stringify({ count }),
        };
    }catch(error){
        console.error('Error updating / fetching views :', error);
        return{
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to update / fetch view count' })
        };
    }
};