import client from "./client.js";

//Sets - Data Structure
const link = "https://redis.io/docs/latest/develop/data-types/sets/";

//Test the connection and get user:1
async function testRedis() {
  const user = await client.get("user:1");
  console.log("User 1 from Redis:", user);
  
  await client.quit();
}

