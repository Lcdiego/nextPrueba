import dbConnect from '../../../../lib/db/mongodb';
import User from '../../../../lib/models/User';
import bcrypt from 'bcrypt';

export async function POST(req) {
    await dbConnect();
    
    const { username, email, password } = await req.json();

    // Verifica si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return new Response(JSON.stringify({ message: 'El usuario ya existe' }), { status: 400 });
    }

    // Encripta la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea y guarda el nuevo usuario
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return new Response(JSON.stringify({ message: 'Usuario registrado con éxito' }), { status: 201 });
}
