import "@/styles/globals.css";
import { inter, roboto } from "@/utils/fonts";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
