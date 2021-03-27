import axios from "axios";

export default axios.create({
  baseURL: "http://node-env.eba-kvks79ht.us-east-2.elasticbeanstalk.com/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});