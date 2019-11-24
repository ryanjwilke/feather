<template>
  <tr :class="[css.tr.base, css.tr.body]">
    <td :class="[css.td, css.class_name]">
      .{{ className }}
    </td>
    <td :class="[css.td, css.properties]">
      <span v-for="(property, index) in properties" :key="index" class="block">
        {{ property }}: {{ value }}
      </span>
    </td>
  </tr>
</template>

<script src="./utility-tr.js"></script>
