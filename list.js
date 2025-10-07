import client from "./client.js";

//List - Data Structure
const link = "https://redis.io/docs/latest/develop/data-types/lists/";

async function listFirst() {
  // Add elements to a list
  //await client.lPush("tasks", "NodeJS");
  await client.rPush("tasks", "ReactJS");

  //Remove an element from the list
  //await client.lPop("tasks");
  //await client.rPop("tasks");

  //length 
  const length = await client.lLen("tasks");
  console.log("Length of the list is: ", length);
  //log the message - done 
  console.log("Work is Done!");

  //quit the client connection
  await client.quit();
}

listFirst();
