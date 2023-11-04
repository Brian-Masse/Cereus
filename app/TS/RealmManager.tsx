import React from "react";

import * as Realm from "realm-web";
const {
  BSON: { ObjectId },
} = Realm;

// These are the different collections; data types that will need to be retrieved and accessed.
enum Collections {
  developerProject = "DeveloperProject",

  // const collection = mongo.db("TestDB").collection("Plants");
}

// These are the different databases to access
// There could be different dbs such as main, testing, dev, etc.
enum Databases {
  main = "Main",
}

class RealmManager {
  static appID = "application-0-uvpji";
  static mongoClient = "mongodb-atlas";
  app = new Realm.App({ id: RealmManager.appID });
  mongo;

  user: Realm.User | null = null;
  setUser: (user: Realm.User) => void = (user: Realm.User) => {};

  public constructor() {
    // log the user in
    const task = async () => {
      await this.loginAnonymously();
    };
    task();

    // create a connection to mongo
    this.mongo = this.app.currentUser!.mongoClient(RealmManager.mongoClient);
  }

  // Class Methods
  async loginAnonymously() {
    const credentials = Realm.Credentials.anonymous();
    await this.login(credentials);
  }

  private async login(credentials: Realm.Credentials) {
    const user: Realm.User = await this.app.logIn(credentials);
    this.setUser(user);
  }

  // This is the standard layout wrapper for pages that need to use realm
  // it will be stored in a high level layout.
  RealmLayout = () => {
    const [user, setUser] = React.useState<Realm.User | null>(
      this.app.currentUser
    );
    this.user = user;
    this.setUser;

    return (
      <div className="App">
        <div className="App-header">
          {user ? <div> {this.user?.id} </div> : <div>not logged in !</div>}
          <h1>hi</h1>
        </div>
      </div>
    );
  };
}

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

export default new RealmManager();
