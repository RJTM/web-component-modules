# Web Component Modules

This repo was created to demonstrate a setup capable of creating Custom Elements using Preact and `preact-custom-element`. In this setup, each web component ends up being an independent module that can be imported without loading any other components using ES Modules. It also demonstrate that it is possible for these independent components to share common dependencies like in this case `preact` and `preact-custom-element` with the use of a CDN service like [Unpkg](https://unpkg.com).

## How to use

Ideally there wouldn't be a requirement for a build process and a webserver, but since I wanted to use Typescript and TSX to better demonstrate these capabilities, there needs to be a build step to transform everything down to vanilla Javascript. To run this demo you can clone this repo and run:

1. `npm install`
2. `npm run dev`

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/RJTM/web-component-modules)
