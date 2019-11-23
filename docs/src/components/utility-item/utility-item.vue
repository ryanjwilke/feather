<template>
  <li :class="itemClasses">
    <router-link :to="url" :class="linkClasses">
      {{ utility.name }}
    </router-link>
  </li>
</template>

<script src="./utility-item.js"></script>
