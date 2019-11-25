<template>
  <table :class="css.table">
    <thead :class="css.thead">
      <tr :class="[css.tr.base, css.tr.head]" :style="css.tr.style">
        <th :class="css.th" scope="col">Class</th>
        <th :class="css.th" scope="col">Properties</th>
      </tr>
    </thead>
    <tbody :class="css.tbody">
      <template v-for="(value, index) in utility.values">
        <utility-row :utility="utility" :css-value="value" :key="index" />
        <template v-for="(variant, vIndex) in utility.variants">
          <utility-row
            v-for="(vName, vKey) in variant"
            :key="variantKey(index, vIndex, vKey, value)"
            :utility="utility"
            :variant-key="vKey"
            :variant-name="vName"
            :css-value="value" />
        </template>
      </template>
    </tbody>
  </table>
</template>

<script src="./utility-table.js"></script>
