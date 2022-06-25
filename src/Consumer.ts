import kafka from "./Kafka";

const consumer = kafka.consumer({ groupId: "storage-consuming-group" });

const run = async (topic: string) => {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
      console.log(`- ${prefix} ${message.key}#${message.value}`);
    },
  });
};

export default run;
