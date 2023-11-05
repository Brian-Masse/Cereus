import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Collections, Databases } from "./Collections";

import * as Realm from "realm-web";
const {
  BSON: { ObjectId },
} = Realm;

const appID = "application-0-uvpji";
const app = new Realm.App({ id: appID });

class RealmManager {
  static mongoClient = "mongodb-atlas";
  static defaultDatabase = Databases.main;

  UUID;

  user: Realm.User | null = null;
  setUser: (user: Realm.User) => void = (user: Realm.User) => {};

  public constructor() {
    this.UUID = uuidv4();
  }

  // Class Methods
  async loginAnonymously() {
    const credentials = Realm.Credentials.anonymous();
    await this.login(credentials);
  }

  private async login(credentials: Realm.Credentials) {
    const user: Realm.User = await app.logIn(credentials);
    this.setUser(user);
  }

  // this function simply captures the user and setUser function returned from a react hook
  // this can either be run from the RealmLayout or if
  private runUserReactHook() {
    const [user, setUser] = React.useState<Realm.User | null>(app.currentUser);
    this.user = user;
    this.setUser = setUser;
  }

  // this runs once the user and setUser value are retrieved
  // this prevents the application from logging users in every time regardless of if they are currently signed in
  private async postUserFetchInit() {
    if (app.currentUser == null) {
      await this.loginAnonymously();
    }
  }

  // This is the standard layout wrapper for pages that need to use realm
  // it will be stored in a high level layout.
  RealmLayout = () => {
    const asyncTask = async () => {
      this.runUserReactHook();
      await this.postUserFetchInit();

      const test = this.retrieveObject(Collections.testPlants, {
        name: "flower",
      });
    };

    asyncTask();

    return (
      <div className="App">
        <div className="App-header">
          this is killing me!
          {this.user ? (
            <div> {this.user?.id} </div>
          ) : (
            <div>not logged in !</div>
          )}
        </div>
      </div>
    );
  };

  // connecting to a specific connection in the default database
  private connectToCollection(collection: Collections) {
    if (app.currentUser == null) {
      console.log("the current user was reported null");
      return null;
    }

    const mongo = app.currentUser!.mongoClient(RealmManager.mongoClient);
    return mongo.db(RealmManager.defaultDatabase).collection(collection);
  }

  async retrieveObject(
    collectionName: Collections,
    query: globalThis.Realm.Services.MongoDB.Filter
  ) {
    console.log("retrieving object");

    const collection = this.connectToCollection(collectionName);

    if (collection == null) {
      console.log("the collection was null");
      return null;
    }

    console.log("retrieved collection");
    const results = await collection.findOne(query);
    console.log("THESE ARE THE RESULTS" + results);
    return results;
  }
}

export default new RealmManager();
