import { baseURL } from "@/utils/config.js";

function ws(path) {
  const url = baseURL.replace("http", "ws").replace("https", "wss");
  return new WebSocket(`${url}${path}`);
}

export default ws;
