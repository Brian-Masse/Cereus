"use client";

import * as Realm from "realm-web";
import realmManager from "./TS/RealmManager";

const {
  BSON: { ObjectId },
} = Realm;

import React from "react";

import NoSSRWrapper from "./utilities/NoSSRWrapper";

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
  return (
    <div>
      <NoSSRWrapper>
        {<realmManager.RealmLayout />}

        {/* <RealmLayout />
        <AddPlantButton /> */}
      </NoSSRWrapper>
    </div>
  );
}
