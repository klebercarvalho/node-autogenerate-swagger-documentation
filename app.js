const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:5000"]
    }
  },
  // ['.routes/*.js']
  apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/customers", (req, res) => {
  res.status(200).send("Customer results");
});


/**
 * @swagger
 * /customer:
 *  put:
 *    description: Use to request all customers
  *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: A successful response
 */

app.put("/customer", (req, res) => {
  res.status(201).send("Successfully updated customer");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
