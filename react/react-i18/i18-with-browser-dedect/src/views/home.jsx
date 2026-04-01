import { useTranslation } from "react-i18next";

export default function Home() {
  const {t, i18n} = useTranslation()
  
  const chamgeLang = (lang) => {
    i18n.changeLanguage(lang)
  }
  return (
    <>
      <h1>{t('Home')}</h1>
      <h2>Active Language: {i18n.language}</h2>
      <button onClick={() => chamgeLang("tr")}>Turkish</button>
      <button onClick={() => chamgeLang("en")}>English</button>
      <button onClick={() => chamgeLang("de")}>Deutsch</button>
    </>
  );
}
