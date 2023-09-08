import { MongoClient } from "mongodb";

async function handler(req, res) {

  const message422 = "Invalid input";
  const message201 = "Successfully stored message";
  const message500a = "Could not connect to database";
  const message500b = "Storing messaged failed";

  if (req.method === "POST") {
    let client;
    const { email, name, message } = req.body;

    if (!email ||
        !email.includes("@") ||
        !name ||
        name.trim() === "" ||
        !message ||
        message.trim() === "") {
      res.status(422).json({ message: message422 })
      return
    }

    const newMessage = {
      email,
      name,
      message,
    }

    try {
      client = await MongoClient.connect("mongodb+srv://remek:NtNBgWX9BZjwu51P@tutorials.u0jzjy9.mongodb.net/?retryWrites=true&w=majority")
    } catch (error) {
      res.status(500).json({message: message500a});
      return
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close()
      res.status(500).json({message: message500b});
      return
    }

    client.close();

    res.status(201).json({ message: message201, newMessage })
  }
}

export default handler;