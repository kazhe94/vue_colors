<template>
  <router-view/>
</template>

<style lang="scss">
@import url(~normalize.css);
  :root {
    --color-primary: #1F2020;
    --color-secondary: #7BB899;
    --color-white: #ffffff;
  }
  * {
    box-sizing: border-box;
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
  address {
    font-style: normal;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Arial', 'Helvetica', sans-serif;
    color: var(--color-primary);
  }
  .container {
    max-width: 1832px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
  }
</style>
