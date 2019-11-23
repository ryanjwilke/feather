<template>
  <ul :class="css.container">
    <utility-group v-for="group in filteredGroups" :group="group" :key="group.name" />
  </ul>
</template>

<script src="./utility-list.js"></script>
