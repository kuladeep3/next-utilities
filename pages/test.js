// pages/index.js
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  console.log(t);

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("goodbye")}</p>
    </div>
  );
}
