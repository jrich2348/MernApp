// imoports packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path"); //built in node module
 

// initialize express application
const app = express(); 
// defines port using a variable port on server
const PORT = process.env.PORT || 8080;
const routes = require('./routes/api')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_petpose',{
    useNewUrlParser: true,
    useUnifiedTopology: false, 
});

app.use(express.json());
app.use(express.urlencoded({extended: true})); //make data avaialable on req.body


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
 
// mongoose connection notification in console for verification of connect
mongoose.connection.on('connected',() => {
    console.log('Mongoose is connected!!!!!');
});
// http logger that Logs every route request to the terminal thats hit
app.use(morgan('tiny'));
app.use('/api', routes);


// Listen on Port
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
