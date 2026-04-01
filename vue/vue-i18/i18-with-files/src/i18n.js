import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import Backend from 'i18next-http-backend'

i18next
.use(Backend)
.init({
  debug: true,
  fallbackLng: 'en'
});

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}
