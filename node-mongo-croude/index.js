const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

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
    const usersCollection = client.db("foodExpress").collection("users");

    app.post("/user", (req, res) => {
      const newUser = req.body;
      console.log("additing new user", newUser);
      res.send({ result: "success" });
    });
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
