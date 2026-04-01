import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
.use(Backend)
.use(LanguageDetector)
.init({
  debug: true,
  fallbackLng: 'en-US'
});

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}
