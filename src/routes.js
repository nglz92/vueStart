import Page from './views/Page.vue'
import About from './sections/About.vue'
import Brands from './sections/Brands.vue'
import Imprint from './views/Imprint.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [{
    path: '/',
    component: Page,
    meta: {
      title: 'Startseite'
    }
  },
  {
    path: '/Uber_Uns',
    meta: {
      title: 'About'
    },
    component: About,
  },
  {
    path: '/Marken',
    component: Brands,
    meta: {
      title: 'Marken'
    }
  },
  {
    path: '/Kontakt',
    component: Contact,
    meta: {
      title: 'Kontakt'
    }
  },
  {
    path: '/Imprint',
    component: Imprint,
    meta: {
      title: 'Impressum & Datenschutz'
    }
  },
  {
    path: '/:path(.*)',
    component: NotFound
  },
]