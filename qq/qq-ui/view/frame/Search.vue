<template functional>
  <div class="search-form">
    <section class="form">
      <slot></slot>
    </section>
    <section class="toolbar">
      <slot name="toolbar"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "QqSearch"
};
</script>

<style lang="less" scoped>
.search-form {
  margin-bottom: 10px;

  .toolbar {
    height: 32px;
    text-align: right;
  }
}
</style>
