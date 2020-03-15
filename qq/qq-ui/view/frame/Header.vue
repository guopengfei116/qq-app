<template>
  <el-header class="header">
    <el-row type="flex" justify="space-between" align="middle">
      <!-- left -->
      <el-col>
        <i
          :class="['trigger', isUnfold ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
          @click="onSwitch(!isUnfold)"
        ></i>
      </el-col>

      <!-- center -->
      <el-col>
        <h1 class="app-name">{{ app }}</h1>
      </el-col>

      <!-- right -->
      <el-col class="profile">
        <slot></slot>
        <el-tooltip placement="bottom" :content="user.tooltip">
          <span class="profile_item">
            <i class="el-icon-user-solid profile_item_icon"></i>
            <span class="profile_item_text">{{ user.name }}</span>
          </span>
        </el-tooltip>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import { Header, Row, Col, Tooltip } from "element-ui";

export default {
  name: "QqHeader",

  components: {
    [Header.name]: Header,
    [Row.name]: Row,
    [Col.name]: Col,
    [Tooltip.name]: Tooltip
  },

  props: {
    isUnfold: {
      type: Boolean,
      default: false
    },

    onSwitch: {
      type: Function,
      default: () => {}
    },

    app: {
      type: String,
      required: true
    },

    user: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  padding: 0;
  height: 48px !important;
  line-height: 48px;
  background: #24292e;

  .el-col {
    width: auto !important;
  }

  .trigger {
    cursor: pointer;
    transition: color 0.3s;
    line-height: inherit;
    padding: 0 24px;
    font-size: 18px;
    color: #ffffff;
    &:hover {
      color: #1890ff;
    }
  }

  .app-name {
    margin: 0;
    font-size: calc(12px + 1vmin);
    color: #ffffff;
  }

  .profile {
    margin-right: 24px;
    font-size: 17px;
    color: #ffffff;
    &_item {
      cursor: pointer;
      margin-right: 10px;
      &_icon {
        margin-right: 4px;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .header .profile_item_text {
    display: none;
  }
}
</style>
