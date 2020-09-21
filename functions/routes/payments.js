const router = require("express").Router();
const stripe = require("stripe")(process.env.SECRET_KEY);

router.post("/create", async (req, res) => {
  const { total } = req.query;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
