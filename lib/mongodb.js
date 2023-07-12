import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI

let cached = global.mongoose
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}
async function dbConnect() {

    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        }
        console.log("getting cached.promise...")
        // TODO: remove {family: 4} and replace it with "opts"
        cached.promise = mongoose.connect(uri, {family: 4}).then((mongoose) => {
            return mongoose
        })
        console.log("cached.promise: " + cached.promise)
        console.log("cached.conn: " + cached.conn)
    }

    try {
        cached.conn = await cached.promise //This line is causing a timeout
    } catch (e) {
        console.log("Error: " + e)
        cached.promise = null
        throw e
    }

    return cached.conn
}

export default dbConnect
