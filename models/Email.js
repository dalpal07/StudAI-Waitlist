import mongoose from 'mongoose'

const EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide an email.']
    }
})

export default mongoose.models.Email || mongoose.model('Email', EmailSchema)