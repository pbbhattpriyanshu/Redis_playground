import client from "./client.js";

//Sets - Data Structure
const link = "https://redis.io/docs/latest/develop/data-types/sets/";

//Test the connection and get user:1
async function testRedis() {
  const user = await client.get("user:1");
  console.log("User 1 from Redis:", user);
  
  await client.quit();
}

//Add and remove members from a set
async function setFirst() {
    // Add members to a set
    await client.sAdd("fruits", "Watermelon");

    //Remove a member from the set
    await client.sRem("fruits", "oragnge");

    console.log("Work is Done");

    //quit the client connection
    await client.quit();
    
}

//Check for element in set - 1 = true, 0 = false
async function checkMember() {
    const result = await client.sIsMember("fruits", "oranges");

    //better answer
    if (result === 1) {
        console.log("It is a member of the set");
    } else {
        console.log("It is not a member of the set");
    }

    //quit the client connection
    await client.quit();
}

checkMember();