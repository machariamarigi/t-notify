import { KafkaClient, Producer } from "kafka-node";

export const sendMessage = async (topic: string, message: string) => {
  const client = new KafkaClient({ kafkaHost: "localhost:9092" });
  const producer = new Producer(client);

  producer.on("ready", () => {
    producer.send([{ topic, messages: message }], (err, data) => {
      if (err) {
        console.error("Error sending message: " + err);
      } else {
        console.log("Message sent successfully", data);
      }
    });
  });

  producer.on("error", (err) => {
    console.error("Producer Error: " + err);
  });
};
