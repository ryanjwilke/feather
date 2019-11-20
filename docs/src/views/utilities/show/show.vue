<template>
  <div :class="css.container">
    <h1 :class="css.title">{{ utility.name }}</h1>

    <div :class="css.code.container">
      <ul :class="css.code.text">
        <li v-for="value in utility.values" :key="value.name">
          .{{ className(value) }}: {
            {{ utility.name }}: {{ value.value || value.name }}
          }
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./show.js"></script>
