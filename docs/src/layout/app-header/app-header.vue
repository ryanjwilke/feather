<template>
  <header :class="css.header.classes" :style="css.header.style">
    <h6 :class="css.logo">Feather</h6>
    <form :class="css.form" @submit.prevent="submit">
      <input type="text" name="q" ref="search" :class="css.input" @keyup="keyup" placeholder="Search the docs" />
    </form>
  </header>
</template>

<script src="./app-header.js"></script>
