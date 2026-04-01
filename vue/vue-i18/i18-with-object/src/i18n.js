import i18next from 'i18next'
import I18NextVue from 'i18next-vue'

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

i18next
  .init({
    debug: true,
    lng: 'en',
    resources
  });

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}
