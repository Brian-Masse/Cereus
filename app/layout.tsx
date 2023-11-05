"use client";

import React from "react";
import { useEffect } from "react";

import * as Realm from "realm-web";
import Link from "next/link";
import { useApp } from "./Utilities/useApp";

import RealmManager from "./Utilities/RealmManager";
import NoSSRWrapper from "./ReactUtilities/NoSSRWrapper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const app: Realm.App = useApp();

  useEffect(() => {
    if (app && !app.currentUser) {
      const user = Realm.Credentials.anonymous();

      app.login(user);
    }
  }, [app, app?.currentUser]);

  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
