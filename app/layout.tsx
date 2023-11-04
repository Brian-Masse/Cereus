"use client";

import React from "react";
import realmManager from "./TS/RealmManager";
import NoSSRWrapper from "./utilities/NoSSRWrapper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NoSSRWrapper>
          {<realmManager.RealmLayout></realmManager.RealmLayout>}
        </NoSSRWrapper>
        <div>{children}</div>
      </body>
    </html>
  );
}
