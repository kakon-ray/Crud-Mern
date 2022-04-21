const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const ObjectId = require("mongodb").ObjectId;
// username: db_user1
// password: iAEs1egG0t8iood5

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running My Node Croude Server");
});

// db users
app.listen(port, () => {
  console.log("CROUD server is Running");
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://db_user1:iAEs1egG0t8iood5@cluster0.1zds3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");

    // get data to database this api call to show data clint side
    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    // user update data get then this data update put function
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    // POST User : add a new user
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("adding new user", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    // update user

    app.put("/user/:id", async (req, res) => {
      id = req.params.id;
      const updateUser = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updateUser.name,
          email: updateUser.email,
        },
      };

      const result = await userCollection.updateOne(filter, updateDoc, options);

      res.send(result);
    });

    // delete user
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.dir);
