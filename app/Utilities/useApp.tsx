import { useEffect, useState } from "react";
import * as Realm from "realm-web";

export function useApp(): Realm.App {
  const [app, setApp] = useState(null);

  useEffect(() => {
    setApp(Realm.getApp("application-0-uvpji"));
  }, []);

  return app;
}
