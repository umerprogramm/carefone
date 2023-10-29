import { NextApiRequest, NextApiResponse } from 'next'
import bodyParser from 'body-parser'
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://umer:niko12345@cluster0.5i8um.mongodb.net/?retryWrites=true&w=majority';
const dbName = "carefone";

const client = new MongoClient(uri);

async function connectToDatabase() {
  const connceted = await client.connect();
  if (connceted) {
    console.log('connceted')
  }
  const db = client.db(dbName);
  return { client, db };
}
// Use the `json` middleware from `body-parser`
const jsonParser = bodyParser.json()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Parse the request body
  jsonParser(req, res, async () => {
    // Access the parsed JSON data from `req.body`
    const { name, email , review , star , slug} = req.body

    try {
      await connectToDatabase();
  
      const db = client.db('carefone');
      const collection = db.collection('review');
      const product = db.collection('products');
       let max_nums = []
       let newobj = []
       await collection.insertOne({ name, email , review , star , slug });
      const reviews = await db.collection('review').find({slug : slug}).toArray();
      const star1 = reviews.filter( value =>  value.star === 1 )
      const star2 = reviews.filter( value =>  value.star === 2 )
      const star3 = reviews.filter( value =>  value.star === 3 )
      const star4 = reviews.filter( value =>  value.star === 4 )
      const star5 = reviews.filter( value =>  value.star === 5 )
      max_nums.push(star1.length)
      newobj.push(star1)
      max_nums.push(star2.length)
      newobj.push(star2)
      max_nums.push(star3.length)
      newobj.push(star3)
      max_nums.push(star4.length)
      newobj.push(star4)
      max_nums.push(star5.length)
      newobj.push(star5)
     const max_num =  Math.max(...max_nums)
     console.log(newobj)
     console.log(max_nums)
      let final_review = max_nums.indexOf(max_num)
      console.log(max_nums[final_review])
      let final_star = newobj[final_review][0].star

     product.updateOne(
    { slug: slug }, // Filter criteria
    { $set: { stars: final_star } } // Update criteria
  )
  .then(result => {
    console.log(`Updated ${result.modifiedCount} document.`);
  })
  .catch(err => console.error(`Failed to update document: ${err}`))
  .finally(() => client.close());

      
      
     


    
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred' });
    }
    

    // Do something with the data
    console.log(`Received form submission from ${name} (${email}) (${review}) (${star}) , ${slug}`)

    // Send a response
    res.status(200).json({ message: 'Form submitted successfully' })
  })
}
