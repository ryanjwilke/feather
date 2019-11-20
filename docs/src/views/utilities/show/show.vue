<template>
  <div :class="css.container">
    <h1 :class="css.title">{{ utility.name }}</h1>

    <div :class="css.code.container">
      <div :class="css.code.text">
        <template v-for="value in utility.values">
          .{{ utility.prefix }}-{{ value.name }} { {{ utility.name }}: {{ value.name }} }
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./show.js"></script>
