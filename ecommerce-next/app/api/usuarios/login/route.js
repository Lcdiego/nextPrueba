import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';
import bcrypt from 'bcrypt';

export async function POST(req) {
    await dbConnect();

    const { email, password } = await req.json();

    // Busca al usuario en la base de datos
    const user = await User.findOne({ email });
    if (!user) {
        return new Response(JSON.stringify({ message: 'Usuario no encontrado' }), { status: 404 });
    }

    // Compara la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return new Response(JSON.stringify({ message: 'Contraseña incorrecta' }), { status: 400 });
    }

    return new Response(JSON.stringify({ message: 'Inicio de sesión exitoso' }), { status: 200 });
}
