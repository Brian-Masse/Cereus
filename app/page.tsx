"use client";

import { useEffect, useState } from "react";
import { useApp } from "./Utilities/useApp";

import RealmManager from "./Utilities/RealmManager";
import { Collections, Databases } from "./Utilities/Collections";
import NoSSRWrapper from "./ReactUtilities/NoSSRWrapper";

import React from "react";
import * as Realm from "realm-web";

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
