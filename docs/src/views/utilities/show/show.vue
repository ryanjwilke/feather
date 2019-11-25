<template>
  <div :class="css.container">
    <h1 :class="css.title">{{ title }}</h1>
    <h2 :class="css.subtitle">{{ subtitle }}</h2>
    <utility-table
      :groups="groups"
      :utility="utility"
      v-if="utility" />
  </div>
</template>

<script src="./show.js"></script>
