import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'
import path from 'path'


// Create an instance of an Express application
const app = express()

// Specifically set the public folder as the static folder
app.use(express.static('public'))

// Without this middleware, we would not be able to decipher the 
// data being sent to Node.js from an application. 
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))

// LOAD ROUTES INTO OUR MAIN FILE
// if the below route is detected, then load our routes from routes.js
app.use('/', routes)

// This is for use of BrowserRouter. When the user clicks Report in the NavBar of Page, 
// the request to the server of "/report" is not handled by this UI (or the routes.js file).
// So, in scenarios like this, we want to just read the contents of index.html, which in turn will
// load employees.jsx. The BrowserRouter in employees.jsx will then handle the (for example) "/routes"
// route and in Contents.jsx, will load the EmployeeReport Component. 
app.get('*', (req, res) => {
    // res.sendFile(path.resolve('public/index.html'))
    // below is for s3 on AWS
    res.redirect('http://employee-tracker-frontend.s3-website.us-east-2.amazonaws.com');
})

const PORT = process.env.PORT || 5000

const init = async () => {
    try {
        await connectDB(process.env.DB)
        console.log('Connected to the database...')

        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

init()