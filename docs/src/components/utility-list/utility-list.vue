<template>
  <ul :class="[css.container, css.list]">
    <li v-for="group in filteredGroups" :key="group.name">
      <h5 :class="css.group">{{ group.name }}</h5>
      <ul :class="css.list">
        <utility-item
          v-for="utility in group.utilities"
          :utility="utility"
          :key="utility.name" />
      </ul>
    </li>
  </ul>
</template>

<script src="./utility-list.js"></script>
