import { KafkaClient, Consumer } from "kafka-node";

export const startConsumer = async (topic: string) => {
  const client = new KafkaClient({ kafkaHost: "localhost:9092" });
  const consumer = new Consumer(client, [{ topic, partition: 0 }], {
    autoCommit: true,
  });

  consumer.on("message", (message) => {
    console.log("Message received: " + message.value);
  });

  consumer.on("error", (err) => {
    console.error("Consumer Error: " + err);
  });
};
