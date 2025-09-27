import { createServer } from "./server";
const server = createServer();

server.listen(3003, () => {
  console.log("Server is running on port 3003");
});
