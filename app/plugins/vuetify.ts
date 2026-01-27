import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtapp) => {
  const vuetify = createVuetify({
    // ... your configuration
  })
  nuxtapp.vueApp.use(vuetify)
})