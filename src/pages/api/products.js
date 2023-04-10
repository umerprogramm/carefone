// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from '../../utils/mongodb';




export default async function handler(req ,res) {
  const { db } = await connectToDatabase();
  const users = await db.collection('products').find().toArray();
  res.status(200).json(users);
}
