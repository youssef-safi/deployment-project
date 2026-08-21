import "dotenv/config";
import env from "#/config.js";
import app from "#/app.js";

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`server is runnning on port ${PORT}`);
});
