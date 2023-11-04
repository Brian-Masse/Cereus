"use client";

import * as Realm from "realm-web";
import React from "react";
const {
  BSON: { ObjectId },
} = Realm;

// const mongo = app.currentUser!.mongoClient("mongodb-atlas");
// const collection = mongo.db("TestDB").collection("Plants");

// const AddPlantButton = () => {
//   const addPlant = async () => {
//     const plant = {
//       name: "lil of the valley",
//       sunlight: "full",
//       color: "white",
//     };

//     const result = await collection.insertOne(plant);
//     console.log(result);
//   };

//   return <button onClick={addPlant}>Add Plant I guess</button>;
// };

export default function AppPage() {
  return <div>this is a great main page</div>;
}
