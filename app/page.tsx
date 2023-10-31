"use client";

import * as Realm from "realm-web";
import React from "react";

const appID = "application-0-uvpji";
const app = new Realm.App({ id: appID });

import NoSSRWrapper from "./utilities/NoSSRWrapper";

const UserDetail = ({ user }: { user: Realm.User }) => {
  return (
    <div>
      <h1>logged in with anonymous user ID: {user.id}</h1>
    </div>
  );
};

type LoginProps = {
  setUser: (user: Realm.User) => void;
};

const Login = ({ setUser }: LoginProps) => {
  const loginAnonymously = async () => {
    const user: Realm.User = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };

  return <button onClick={loginAnonymously}>Log In</button>;
};

const RealmLayout = () => {
  const [user, setUser] = React.useState<Realm.User | null>(app.currentUser);

  return (
    <div className="App">
      <div className="App-header">
        {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <NoSSRWrapper>
        <RealmLayout />
      </NoSSRWrapper>
    </div>
  );
}
