import { z } from "zod"
import dotenv from "dotenv"

dotenv.config()

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  MONGO: z.string().startsWith("mongodb://"),
  REDIS: z.string().startsWith("redis://"),
  JWT: z.string().min(10, "JWT secret too weak"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
  console.error("❌ Invalid environment variables:", result.error.flatten())
  process.exit(1)
}

export const env = parsed.data
