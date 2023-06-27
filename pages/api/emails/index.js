import dbConnect from '../../../lib/mongodb'
import Email from '../../../models/Email'

export default async function handler(req, res) {
    const { method } = req
    console.log("Getting Database connection...")
    await dbConnect()
    console.log("Database connection successful!")

    switch (method) {
        case 'POST':
            try {
                console.log("posting " + req.body + "...")
                const email = await Email.create(
                    req.body
                )
                res.status(201).json({ success: true, data: email })
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}