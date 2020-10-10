const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51HX1WFIKB5ZWpYLBVUHaOrl95o6nP5bMu49uQ7KutlZd0qvn6h1WndyMw4r9FFRb2MKNOdKrhlAIJE6ARreGlBeD008CVTBaMo")

//api

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - Api routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved. for this amount >>>", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "EUR",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
//http://localhost:5001/n-shopping/us-central1/api