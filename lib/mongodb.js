import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
console.log("mongo uri: " + uri)

let cached = global.mongoose
console.log("cached: " + cached)
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}
async function dbConnect() {

    if (cached.conn) {
        console.log("cached.conn exists")
        return cached.conn
    }

    if (!cached.promise) {
        console.log("cached.promise does not exist")
        const opts = {
            bufferCommands: false
        }
        console.log("getting cached.promise...")
        cached.promise = mongoose.connect(uri, {family: 4}).then((mongoose) => {
            return mongoose
        })
        console.log("cached.promise: " + cached.promise)
        console.log("cached.conn: " + cached.conn)
    }

    try {
        console.log("assigning cached.conn to cached promise")
        cached.conn = await cached.promise //This line is causing a timeout
        console.log("cached.conn worked")
    } catch (e) {
        console.log("Error was thrown: " + e)
        cached.promise = null
        throw e
    }

    return cached.conn
}

export default dbConnect
