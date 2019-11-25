<template>
  <table :class="css.table">
    <thead :class="css.thead.base">
      <tr :class="css.thead.tr">
        <th :class="css.thead.th" scope="col">Class</th>
        <th :class="css.thead.th" scope="col">Properties</th>
      </tr>
    </thead>
    <tbody :class="css.tbody">
      <template v-for="(value, index) in utility.values">
        <utility-row :utility="utility" :css-value="value" :key="index" />
        <template v-for="(variant, vIndex) in utility.variants">
          <utility-row
            v-for="(vName, vKey) in variant"
            :key="variantKey(index, vIndex, vKey)"
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
