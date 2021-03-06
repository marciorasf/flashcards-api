import "dotenv/config";
import app from "@/app";
import { __port__ } from "@config/server";

app.listen(__port__, () => {
  console.log(`Server started on PORT: ${__port__}`);
});

// Exit on docker stop
process.on("SIGINT", () => {
  process.exit(0);
});
