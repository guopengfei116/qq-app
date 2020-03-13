<template>
  <article>
    <h1>{{ title }}</h1>
    <p>{{ introduce }}</p>
  </article>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "QqUi",

  computed: {
    ...mapState("qqUi", ["title", "introduce"])
  }
};
</script>
