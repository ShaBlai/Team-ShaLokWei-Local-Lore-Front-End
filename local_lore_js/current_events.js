import { GOOGLE_EVENTS_API_KEY } from "./secrets.js";
import { getData } from "./api_handler.js";

export function getGoogleEvents(searchTerm) {
  const apiUrl = `https://serpapi.com/search.json?engine=google_events&q=events+in+seattle&location=Seattle%2C+Washington%2C+United+States&api_key=c0ed3897d89592a4e6c022d8318cb0fa20002e1aa6b50a5481364d62ed1a2b57`;

  getData(apiUrl).then((json) => {
    console.log(json);
  });
}
