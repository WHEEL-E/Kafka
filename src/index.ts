import run from "./Consumer";
import producer from "./Producer";

const DataSourceURL = "https://stream.wikimedia.org/v2/stream/recentchange";
const topic = "TestingTopic";

run(topic).catch((e) => console.error(`[example/consumer] ${e.message}`, e));
