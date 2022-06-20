import { Kafka, CompressionTypes, logLevel } from "kafkajs";
import ip from "ip";

const host = process.env.HOST_IP || ip.address();

const kafka = new Kafka({
  logLevel: logLevel.DEBUG,
  brokers: [`${host}:9092`],
  clientId: "example-producer",
});

const topic = "wikimedia.recentchange";
const producer = kafka.producer();
