<template>
  <tr :class="[css.tr.base, css.tr.body]">
    <td :class="[css.td, css.class_name]">
      .{{ cssClassName }}
    </td>
    <td :class="[css.td, css.properties]">
      {{ property }}: {{ value }}
    </td>
  </tr>
</template>

<script src="./utility-tr.js"></script>
