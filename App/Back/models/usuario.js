import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema(
    {
        nomuser: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require: true,
            unique: true
        }
      

    },
    {
        timestamps: true,
        versionKey: false,
   }
);

userSchema.pre('save', function(next) {
const user = this
bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash
    next()
})
});

export const usuario = mongoose.model('users', userSchema);
export default usuario;