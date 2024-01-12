// sk_test_51OXepYKjfUkzd7lxvaia7xXDM2ZHYoxMF54XdjenqFXx1ODX3eY6j3DO2A0mVL1PPLdenQjsxOKoYsSf5ZatP0KY00C0ffUmcO

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OXepYKjfUkzd7lxvaia7xXDM2ZHYoxMF54XdjenqFXx1ODX3eY6j3DO2A0mVL1PPLdenQjsxOKoYsSf5ZatP0KY00C0ffUmcO"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// Send a post request to /checkout route
app.post("/checkout", async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */

  // Take the posted data from user
  const items = req.body.items;

  // Format lineItems to how stripe wants them
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id, // "price" is the name for "id" in stripe. Weird but it is what it is ;)
      quantity: item.quantity,
    });
  });

  // Create a session with the lineItems
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

// Send the created session url to the frontend for user
app.listen(4000, () => console.log("Listening on port 4000!"));
