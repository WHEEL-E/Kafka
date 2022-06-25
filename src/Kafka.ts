import { Kafka, CompressionTypes, logLevel } from "kafkajs";
import ip from "ip";

const host = ip.address();

const kafka = new Kafka({
  logLevel: logLevel.DEBUG,
  brokers: [`${host}:9092`],
});

export default kafka;
