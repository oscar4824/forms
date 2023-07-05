// Read environment variables
import { config } from "dotenv";
config();

// const configurations = {
//   PORT: process.env.PORT || 4000,
//   MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
//   MONGODB_DATABASE: process.env.MONGODB_DB || "notes-app",
//   MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${
//     process.env.MONGODB_DATABASE || "notes-app"
//   }`,
// };
const configurations = {
  PORT: process.env.PORT || 4000,
  MONGODB_HOST: process.env.MONGODB_HOST || "127.0.0.1",
  MONGODB_DATABASE: process.env.MONGODB_DB || "form-app",
  MONGODB_URI: `mongodb+srv://Bola:123@cluster0.hjqe2.mongodb.net/?retryWrites=true&w=majority
  }`,
};

export default configurations;
