import client from "./client.js";
//String - Data Structure

async function testRedis() {
  const user = await client.get("user:1");
  console.log("User 1 from Redis:", user);
  
  await client.quit();
}

async function strFirst() {
  // Set a test key
  //await client.set('msg:1', 'Hi from piyush!');

  //expire the key in 10 seconds
  await client.expire("msg:1", 10);

  // Get the key immediately
  const value = await client.get("msg:1");
  const result = await client.get("user:1");

  // Log the value
  console.log("Value from Redis:", value);
  console.log("User 1 from Redis:", result);

  //quit the client connection
  await client.quit();
}

//Practice send user:3 - {name: 'max'} - DATA JSON FORMAT IN REDIS
async function createUser() {
  const user = {
    name: "Rachel",
    age: 24,
    city: "Paris",
  };

  // Store the user object as a JSON string
  await client.set("user:4", JSON.stringify(user));

  //Done
  console.log("New user created in Redis" + JSON.stringify(user));

  //quit the client connection
  await client.quit();
}

createUser();
