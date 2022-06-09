const express = require('express')
const cors = require('cors')
const api = require('api')
const router = require('./routes')
//const AppError = require('./utils/appError')
const errorHandler = require('./utils/errorHandler')
const app = express();
const PORT = 3000;

app.use(api, router)

app.all("*", (req, res, next) => {
 next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Server Started on port 3000');
})
// parse requests of content-type - application/json
app.use(express.json());

module.exports = app;

