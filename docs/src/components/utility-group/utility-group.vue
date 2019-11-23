<template>
  <li v-if="group.utilities.length > 0">
    <h5 :class="css.group">{{ group.name }}</h5>
    <ul :class="css.list">
      <utility-item
        v-for="utility in group.utilities"
        :utility="utility"
        :key="utility.name" />
    </ul>
  </li>
</template>

<script src="./utility-group.js"></script>
