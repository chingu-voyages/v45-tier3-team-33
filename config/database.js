const mongoose = require('mongoose')

// use an async function because mongoose.connect returns a promise
const connectDB = async () => {             
    try{
        // returns a promise
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            // used to avoid any warnings on the console
            useNewUrlParser: true,          
            useUnifiedTopology: true,            
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)

    } catch (err) {
        console.error(err)
        process.exit(1) // If error, due of failure, stop everything with status 1.
    }
}

module.exports = connectDB;