import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String},
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: 'user' },
}, {
  timestamps: true,
});

const User = mongoose.model('UsuarioEco', userSchema);

export default User;
