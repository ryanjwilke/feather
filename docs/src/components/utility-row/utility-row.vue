<template>
  <tr :class="[css.tr.base, css.tr.body]">
    <td :class="[css.td.base, css.td.class_name]">.{{ className }}</td>
    <td :class="[css.td.base, css.td.property.list]">
      <span v-for="(property, index) in properties" :key="index" :class="css.td.property.item">
        {{ property }}: {{ value }}
      </span>
    </td>
  </tr>
</template>

<script src="./utility-row.js"></script>
