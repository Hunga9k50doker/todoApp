import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CommonLayout from "@/layout/CommonLayout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  );
}
