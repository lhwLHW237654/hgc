const env = process.env.NODE_ENV;
let baseURL;
let socketURL;
if (env === "development") {
  baseURL = "http://192.168.2.40:8766";
  socketURL = "http://192.168.2.49:811";
} else if (env === "production") {
  baseURL = "http://192.168.2.18:810";
  socketURL = "http://192.168.2.18:811";
}


export { baseURL,socketURL };
