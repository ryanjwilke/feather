<template>
  <ul :class="css.list">
    <utility-item
      v-for="utility in utilities"
      :utility="utility"
      :key="utility.name" />
  </ul>
</template>

<script src="./utility-list.js"></script>
