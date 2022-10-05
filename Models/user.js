const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema = new Schema ({
    nickname: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }
})

const User=mongoose.Model('User', UserSchema)

module.export=User