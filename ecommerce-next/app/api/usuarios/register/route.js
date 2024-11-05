import dbConnect from '../../../../lib/db/mongodb';
import User from '../../../../lib/models/User';
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
      await dbConnect();
  
      const { username, email, password } = await req.json();
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return new Response(JSON.stringify({ message: 'El usuario ya existe' }), { status: 400 });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
  
      return new Response(JSON.stringify({ message: 'Usuario registrado con éxito' }), { status: 201 });
    } catch (error) {
      console.error('Error en la API de registro:', error);
      return new Response(JSON.stringify({ error: 'Error interno en el servidor' }), { status: 500 });
    }
  }
  