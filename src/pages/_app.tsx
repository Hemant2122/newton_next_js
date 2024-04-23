import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Nav bar */}

      {/* <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul> */}

      <Component {...pageProps} />
    </>
  );
}
