<template>
  <li>
    <router-link :to="url" :class="css.link">
      {{ utility.name }}
    </router-link>
  </li>
</template>

<script src="./utility-item.js"></script>
