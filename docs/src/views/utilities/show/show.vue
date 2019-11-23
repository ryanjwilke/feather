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
        <tr v-for="(value, index) in utility.values" :key="index" :class="[css.tr.base, css.tr.body]">
          <td :class="[css.td, css.class_name]">
            .{{ className(value) }}
          </td>
          <td :class="[css.td, css.properties]">
            {{ utility.name }}: {{ value.value || value.name || value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./show.js"></script>
