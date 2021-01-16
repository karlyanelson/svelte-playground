# Bundling Svelte using Parcel

https://parceljs.org/recipes.html

First we need to install the dependencies for Svelte.

[Blog Post](https://dev.to/alexparra/basic-svelte-app-with-parcel-30i5)

```
npm install --save-dev svelte
npm install --save-dev parcel-plugin-svelte
npm install --save-dev parcel-bundler

```

Or if you have the optional Yarn package manager installed

```
yarn add --dev svelte
yarn add --dev parcel-plugin-svelte
yarn add --dev parcel-bundler
```

## Compiling from `index.html`

Add Start script to `package.json`

```
// package.json
"scripts": {
  "start": "parcel src/index.html"
}
```

Then, in your `index.html` file, add a reference to your JavaScript entry point.

```
<!-- .src/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Svelte App</title>
</head>
<body>
    <!-- Here 👇 -->
    <script src="./src/main.js"></script>
</body>
</html>
```

Done!
