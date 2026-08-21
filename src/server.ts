import "dotenv/config";
import env from "@/config";
import app from "@/app";

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`server is runnning on port ${PORT}`);
});
