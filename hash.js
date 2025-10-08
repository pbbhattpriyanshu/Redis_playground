import client from "./client.js";

//hash - Data Structure
const link = "https://redis.io/docs/latest/develop/data-types/hashes/";

//Test the connection and get user:1
async function testRedis() {
  const user = await client.get("user:1");
  console.log("User 1 from Redis:", user);
  
  await client.quit();
}

//Add and remove fields from a hash
async function hashFirst() {
    // Add fields to a hash
    const res1 = await client.hSet("player:1", {
        name: "Piyush",
        age: "26",
        city: "New York",
        carName: "BMW"
    }); 

    //Access a field from the hash
    const res2 = await client.hGet("player:1", "name");
    console.log(res2);

    //remove a field from the hash
    const res3 = await client.hDel("player:1", "age");
    console.log("Number of fields removed: ", res3);

    console.log("Work is Done");

    //quit the client connection
    await client.quit();
}

hashFirst();