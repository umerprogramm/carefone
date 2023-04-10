import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://umer:niko12345@cluster0.5i8um.mongodb.net/?retryWrites=true&w=majority';
const dbName = "carefone";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  const connceted = await client.connect();
  if (connceted) {
    console.log('connceted')
  }
  const db = client.db(dbName);
  return { client, db };
}

export { connectToDatabase };