import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const theaters = await db
    .collection("theaters")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(theaters);
//   console.log(movies);
};