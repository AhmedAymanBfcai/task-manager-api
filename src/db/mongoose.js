const mongoose = require('mongoose') 

//Connecting mongoose to the dataBase.
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, //The UrlParser was originally used by defalut but it is being deprecated and required to pass in this option in order for Url is to be passed correctly so we can actually connecdt so the server.
    useCreateIndex: true,  // That is will make sure that when mongoose works with mongoDB our indexes are Created allowing us to quickly access the data we neeed to access.
    useUnifiedTopology: true, //To use the new Server Discover and Monitoring engine
    useFindAndModify: false ,//To use the new Server Discover and Monitoring engine
})
