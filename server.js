 //sk_test_51NbpgPSC3Fg0dbWpHS4AEv3MVerVlhxkvw4jKUzGGhwilvHMJEuPCrIpORB4YDvaoOFhOtagv6Mwc9nqvy6tlzBD00JkfJ5fl0

 //Coffee: price_1NcTiPSC3Fg0dbWptkVYiXrx

 //Sunglasses : price_1NcTlYSC3Fg0dbWpEFBgMg4s

 //Camera :   price_1NcTn6SC3Fg0dbWphZSHxtOx

 const express = require('express');
 var cors = require('cors');
 const stripe = require('stripe')('sk_test_51NbpgPSC3Fg0dbWpHS4AEv3MVerVlhxkvw4jKUzGGhwilvHMJEuPCrIpORB4YDvaoOFhOtagv6Mwc9nqvy6tlzBD00JkfJ5fl0');

 const app = express();
 app.use(cors());
 app.use(express.static('public'));
 app.use(express.json());

 app.post('/checkout', async (req , res) => {

console.log(req.body);
 const items = req.body.items;
 let lineItems = [];
 items.forEach((items)=> {
    lineItems.push(
        {
            price : items.id,
            quantity : items.quantity
        }
    )
 });

 const session = await stripe.checkout.sessions.create({
       line_items : lineItems,
       mode : 'payments',
       success_url : 'http://localhost:3000/success',
       cancel_url : 'http://localhost:3000/cancel'
 });


 res.send(JSON.stringify({
    url : session.url
 }));


 }); 

 app.listen(4000 , () => console.log('Listening on port 4000') )
