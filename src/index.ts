import EventSource from "eventsource";

const DataSourceURL = "https://stream.wikimedia.org/v2/stream/recentchange";
const eventsource = new EventSource(DataSourceURL);

eventsource.addEventListener("open", (event) => {
  console.log(event);
});
eventsource.addEventListener("error", (event) => {
  console.log(event);
});
eventsource.addEventListener("message", (event) => {
  console.log(event);
});
