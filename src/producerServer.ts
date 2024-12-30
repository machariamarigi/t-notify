import express, { Request, Response } from "express";
import { sendMessage } from "./kafka/producer";

const app = express();
app.use(express.json());

app.post("/send", async (req: Request, res: Response) => {
  const { topic, message } = req.body;

  try {
    await sendMessage(topic, message);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send message");
  }
})

export default app;
