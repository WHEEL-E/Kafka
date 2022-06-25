import run from "./Consumer";
import ip from "ip";
import kafka from "kafka-node";
import { Socket } from "socket.io";
import { Server } from "socket.io";
const io = new Server();
io.listen(5000);

const topic = "TestingTopic";

// run(topic).catch((e) => console.error(`[example/consumer] ${e.message}`, e));

console.log("Started");

const Consumer = kafka.Consumer;

const client = new kafka.KafkaClient({
  kafkaHost: `${ip.address()}:9092`,
});

const consumer = new Consumer(client, [{ topic: topic, partition: 0 }], {
  autoCommit: false,
  groupId: "mobile-consuming-group",
});

io.on("connection", (client: Socket) => {
  console.log("Connected", client.id);

  consumer.on("message", function (message) {
    console.log(message);
    client.emit("data", message.value);
  });
  client.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
