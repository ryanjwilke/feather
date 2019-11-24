<template>
  <div :class="css.container">
    <h1 :class="css.title">{{ title }}</h1>
    <h2 :class="css.subtitle">
      <template v-if="utility.description">
        {{ utility.description }}
      </template>
      <template v-else>
        Utilities for controlling an element's {{ title }}.
      </template>
    </h2>
    <table :class="css.table">
      <thead :class="css.thead">
        <tr :class="[css.tr.base, css.tr.head]" :style="css.tr.style">
          <th :class="css.th" scope="col">Class</th>
          <th :class="css.th" scope="col">Properties</th>
        </tr>
      </thead>
      <tbody :class="css.tbody">
        <template v-for="(value, index) in utility.values">
          <utility-tr :utility="utility" :css-value="value" :key="index" />
          <template v-for="(variant, vIndex) in utility.variants">
            <utility-tr
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
  </div>
</template>

<script src="./show.js"></script>
