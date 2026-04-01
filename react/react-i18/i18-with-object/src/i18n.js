import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Home: 'Home'
    }
  },
  tr: {
    translation: {
     Home: 'Ana Sayfa'
    }
  }
}

i18n
.use(initReactI18next)
.init({
 lng: 'en',
 resources
});

export default i18n