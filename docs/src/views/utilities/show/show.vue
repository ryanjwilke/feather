<template>
  <div :class="css.container">
    <h1 :class="css.title">{{ title }}</h1>
    <h2 :class="css.subtitle" v-if="utility.description">
      {{ utility.description }}
    </h2>
    <table :class="css.table">
      <thead :class="css.thead">
        <tr :class="css.tr">
          <th :class="css.th" scope="col">Class</th>
          <th :class="css.th" scope="col">Properties</th>
        </tr>
      </thead>
      <tbody :class="css.tbody">
        <tr v-for="(value, index) in utility.values" :key="index" :class="css.tr">
          <td :class="[css.td, css.class_name]">
            .{{ className(value) }}
          </td>
          <td :class="[css.td, css.properties]">
            {{ utility.name }}: {{ value.value || value.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./show.js"></script>
