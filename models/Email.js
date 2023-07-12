import mongoose from 'mongoose'

const EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide an email.']
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    companyName: {
        type: String,
        required: false
    }
})

export default mongoose.models.Email || mongoose.model('Email', EmailSchema)