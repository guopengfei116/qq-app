<template>
  <article class="body-panel">
    <el-page-header v-if="title" :content="title" @back="$router.go(-1)">
    </el-page-header>
    <slot />
  </article>
</template>

<script>
import { PageHeader } from "element-ui";

export default {
  name: "QqBody",

  components: {
    [PageHeader.name]: PageHeader
  },

  props: {
    title: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="less" scoped>
@import "~qq/qq-ui/assets/style/var.less";

.body-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 20px 0 20px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: @box-shadow;
  background-color: @bg--white;

  .buttons {
    display: inline-block;
  }

  .el-page-header {
    color: @bg--primary;
  }
}
</style>
