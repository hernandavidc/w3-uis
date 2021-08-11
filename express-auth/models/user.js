const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Schema: El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Schema: El mail es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Schema: El pass es obligatorio']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: true
    }
});

module.exports = model('User', UserSchema);