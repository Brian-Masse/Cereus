"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <h1>Navigation Bar</h1>
        <span>
          <Link href="/main">{pathname}</Link>
        </span>
        <p>this is the page content</p>

        <div>{children}</div>
      </body>
    </html>
  );
}
