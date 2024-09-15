// pages/_app.js
import "@/utils/i18n"; // Import your i18n configuration
import "@/styles/globals.css"; // Import global styles if necessary
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // Ensure hydration only happens on the client-side
  }, []);

  if (!isHydrated) {
    return null; // Prevent rendering while hydration is in progress
  }
  return (
    <>
      <LanguageSwitcher />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
