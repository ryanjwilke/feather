<template>
  <div id="app" :class="css.app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/utilities/">Utilities</router-link>
    </div>
    <utility-list />
    <div id="content" :class="css.content">
      <router-view />
    </div>
  </div>
</template>

<script src="./app.js"></script>
