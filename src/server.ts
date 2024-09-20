import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://Okobiz:kBN7tvLJrAOzMH8K@cluster0.rkhkj2w.mongodb.net/Okobiz?retryWrites=true&w=majority&appName=Cluster0"
    );
    app.listen(config.port, () => {
      console.log(`Okobiz Server listening Port On ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
