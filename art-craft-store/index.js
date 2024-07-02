    const express = require('express');
    const cors = require('cors');
    require ('dotenv').config()
    const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
    const app = express();
    const port =  process.env.PORT || 5000

    // middleware
    app.use(cors());
    app.use(express.json())


    // mongodb+srv://heroprogrammer1:<password>@cluster0.aakl4py.mongodb.net/


    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aakl4py.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    console.log(uri);
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });


    async function run() {
      try {
        // await client.connect(); 
        const HomeItemsCollection = client.db('artCraftStore').collection('HomeItems');

        // Endpoint to fetch items
        app.get("/", async (req, res) => {
          const cursor = HomeItemsCollection.find();
          const items = await cursor.toArray();
          res.send(items);
        });


        
        app.get("/homeCardDetails/:id", async (req, res) => {
          const id = req.params.id; 
          if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid ID format' });
        }
          const query = { _id: new ObjectId(id) };
          const result = await HomeItemsCollection.findOne(query);
          res.send(result);
        })  



        // Add items
        
            const itemsCollection = client.db('artCraftStore').collection('items');
            
            app.get("/items/:userEmail", async (req, res) => {
              const userEmail = req.params.userEmail;
              const cursor = itemsCollection.find({ userEmail: userEmail });
              const result = await cursor.toArray();
              res.send(result);
          });

        // User items
        app.post("/items", async (req, res) => {
          console.log(req.body);
          const result = await itemsCollection.insertOne(req.body);
          console.log(result);
          res.send(result);
            
          });
          // Delete
          app.delete("/items/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await itemsCollection.deleteOne(query);
            res.send(result);
          });
          // Update
  

          app.get ("/UserItemList/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await itemsCollection.findOne(query);
            res.send(result);
          });

          app.put("/UserItemList/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateItem = req.body;
            const item = {
              $set: {
                name: updateItem.ItemName,
                subCategory: updateItem.subcategoryName ,
                price: updateItem.price,
                customization: updateItem.customization,
                stockStatus: updateItem.stockStatus,
                shortDescription: updateItem.shortDescription,
                processingTime: updateItem.processingTime,
                stockStatus: updateItem.stockStatus,
              },
            }
            const result = await itemsCollection.updateOne(filter, item, options);
            res.send(result);
          })

        // All items
        app.get('/allItems', async (req, res) => {
          try {
              const cursor = itemsCollection.find();
              const items = await cursor.toArray();
              res.status(200).json(items);
          } catch (error) {
              console.error(error);
              res.status(500).json({ message: 'An error occurred while fetching items.' });
          }
      });

        // // Send a ping to confirm a successful connection
        
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
      }
    }
    run().catch(console.dir);


    app.get('/',(req, res) => {
        res.send('art and craft store server is running')
    })

    app.listen(port, () =>{
        console.log(`art and craft store running on port: ${port}`);
    })