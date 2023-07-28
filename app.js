const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const express = require('express');
const app = express();

// const isAdmin = require('./middlware/role');
// const deleteCandidateFunction = require('./middlware/identify'); // Import the Axios code

port = 8000;
app.use(express.json())

app.use(require('./routes/candidates'))
app.use(require('./routes/book'))


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
    console.log("http://localhost:8000/api-docs/#/")
})

// deleteCandidateFunction(3);