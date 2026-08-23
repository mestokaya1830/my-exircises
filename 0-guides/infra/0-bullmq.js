import ioredis from "ioredis";
import { env } from "../config/env.js";


const connectBullMQ = new ioredis(env.REDIS_URL, {
  connectTimeout: 5000,
  keepAlive: 15000,
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
  retryStrategy(times) {
    if (times > 30) return null;

    return Math.min(times * 100, 3000);
  },

  reconnectOnError(err) {
    const targetErrors = ["READONLY", "ETIMEDOUT", "ECONNRESET"];

    if (targetErrors.some((e) => err.message.includes(e))) {
      return true;
    }

    return false;
  },
});

connectBullMQ.on("connect", () => console.log("BullMQ connected!"));
connectBullMQ.on("error", (err) => console.error(err));

export default connectBullMQ;

