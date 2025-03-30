const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://samuelolu407:<password>@odaradb.akgqc.mongodb.net/odara?retryWrites=true&w=majority&appName=Odaradb";

async function testConnection() {
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("✅ Connected to MongoDB successfully!");
        await client.close();
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
}

testConnection();
