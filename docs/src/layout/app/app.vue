<template>
  <div id="app" :class="css.app">
    <app-header />
    <utility-list />
    <div id="content" :class="css.content">
      <router-view />
    </div>
  </div>
</template>

<script src="./app.js"></script>
