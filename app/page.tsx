"use client";

import { useEffect, useState } from "react";
import { useApp } from "./Utilities/useApp";

import RealmManager from "./Utilities/RealmManager";
import { Collections, Databases } from "./Utilities/Collections";
import NoSSRWrapper from "./ReactUtilities/NoSSRWrapper";

import React from "react";
import * as Realm from "realm-web";

// const plants = RealmManager.retrieveObject(Collections.testPlants, {
//   name: "flower",
// });

// console.log(plants);

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

const Retriever = () => {
  const task = async () => {
    await delay(1000);

    // const test = RealmManager.retrieveObject(Collections.testPlants, {
    //   name: "flower",
    // });

    // const plantsCollection = RealmManager.app
    //   .currentUser!.mongoClient("mongodb-atlas")
    //   .db("TestDB")
    //   .collection("Plants");

    // const flower = plantsCollection.findOne({ name: "flower" });
    // console.log(flower);
  };

  task();

  // const plants = RealmManager.retrieveObject(Collections.testPlants, {
  //   name: "flower",
  // });

  // console.log("this is platns: " + plants);

  // const app = new Realm.App({ id: "application-0-uvpji" });

  // const [user, setUser] = React.useState<Realm.User | null>(app.currentUser);

  // // this.postUserFetchInit();

  // // if (app.currentUser == null) {
  // const task = async () => {
  //   const user: Realm.User = await app.logIn(Realm.Credentials.anonymous());
  //   setUser(user);
  //   console.log("this is running");
  // };
  // task();

  // console.log("running up here");
  // const working = () => {
  //   console.log("working");
  // };
  // working();

  // }

  // const plantsCollection = app
  //   .currentUser!.mongoClient("mongodb-atlas")
  //   .db("TestDB")
  //   .collection("Plants");

  // const flower = plantsCollection.findOne({ name: "flower" });
  // console.log("flower");

  return <div>you better</div>;
};

const Test = () => {
  console.log("this is my least favorite thing imaginable!");

  return <div>layout woohoo</div>;
};

function MongoDBDataAccess({ name }) {
  const [plant, setPlant] = useState();
  const app = useApp();

  useEffect(() => {
    if (app?.currentUser) {
      const mongo = app?.currentUser?.mongoClient("mongodb-atlas");
      const plants = mongo.db("TestDB").collection("Plants");
      plants.findOne({ name }).then((foundPlant) => {
        setPlant(foundPlant);
      });
    }
  }, [app, app?.currentUser, app?.currentUser?.id, name]);

  return (
    <div>
      {plant ? (
        <div>
          <p>{plant.name}</p>
          <p>{plant.color}</p>
        </div>
      ) : (
        "no plant"
      )}
    </div>
  );
}

export default function AppPage() {
  return (
    <div>
      <p>this is a great main page</p>

      <MongoDBDataAccess name="flower"></MongoDBDataAccess>

      {/* <Retriever /> */}

      {/* {plants.name} */}
    </div>
  );
}
