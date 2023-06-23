# Nuxt 2 Boilerplate

## Build

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Features
Packages & Plugins pre-configured to allow for a fully configured start point

* TailwindCSS
* Fontawesome (free)
* SVG importing
* SCSS
* Apollo GraphQL
* .env support
* ESLINT
* Axe a11y checking

## Components
Selection of core components that leverage nuxt functionalty wrapped in a simple component that accepts props

### RouterGo
Accepts a url and checks if it's internal or external. External utilises an traditional <a> tag, internal makes use of <nuxt-image>

### VueImage (v-img)
Used sitewide for images to serve responsive images, requires a 3rd party library. This is configured with imagekit
