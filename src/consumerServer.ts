import app from "./producerServer";

const PORT = 3000;
const TOPIC = "test-topic";

app.listen(PORT, () => {
  console.log(`Consumer server is running on port ${PORT}`);
  console.log(`Consumer is listening to topic ${TOPIC}`);
});
