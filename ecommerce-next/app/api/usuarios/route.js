import dbConnect from '../../../lib/mongodb';

export async function GET(req) {
    await dbConnect();

    // Aquí puedes realizar operaciones CRUD con MongoDB
    return new Response(JSON.stringify({ message: 'Conexión exitosa a MongoDB cara de mono' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
