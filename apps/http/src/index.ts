import express from "express";
import { router } from "./routes/user.js";  
import client from "@repo/db/client"
const app = express();

const PORT = process.env.PORT || 8001;


app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
