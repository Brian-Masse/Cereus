// import React from "react";
// import Realm, { ObjectSchema } from "realm";
// import { createRealmContext } from "@realm/react";

// class Profile extends Realm.Object<Profile> {
//   _id!: Realm.BSON.ObjectId;
//   name!: string;

//   static schema: ObjectSchema = {
//     name: "Profile",
//     properties: {
//       _id: "objoectId",
//       name: "string",
//     },
//     primaryKey: "_id",
//   };
// }

// const realmConfig: Realm.Configuration = {
//   schema: [Profile],
// };

// const { RealmProvider, useRealm, useObject, useQuery } =
//   createRealmContext(realmConfig);

// function AppWrapper() {
//   return <RealmProvider></RealmProvider>;
// }
