<script>
import { Button } from "element-ui";
import { debounce } from "lodash";

/**
 * @Component 按钮组件
 * @Props { String }  type 按钮类型 主要primary、次要secondary、危险danger、其他warn、朴素plain、文本text
 * @Props { String }  size 按钮规格 默认default、中(主要)mini、小small
 * @Props { Boolean } disabled 是否禁用按钮
 * @Props { Boolean } loading 是否显示Loading
 */
export default {
  name: "QqButton",

  components: {
    [Button.name]: Button
  },

  props: {
    type: {
      type: String,
      default: "primary"
    },

    size: {
      type: String,
      default: "small"
    },

    disabled: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  created() {
    // 每个按钮初始化时都单独做防抖处理
    this.onClick = debounce(this.onClick, 1000, {
      leading: true,
      trailing: false
    });
  },

  methods: {
    onClick() {
      this.$emit("click");
    }
  },

  render(h) {
    const { type, size, loading, disabled } = this;

    return (
      <div class={`button ${type} ${size}`}>
        <el-button
          type={type === "text" ? "text" : ""}
          size={size}
          loading={loading}
          disabled={disabled}
          onClick={this.onClick}
        >
          {this.$slots.default}
        </el-button>
      </div>
    );
  }
};
</script>

<style lang="less" scoped>
@import "~qq/qq-ui/assets/style/var.less";

.button {
  display: inline-block;
  margin-left: 10px;

  .el-button {
    border: none;
    color: @color--white;
    &:focus,
    &:hover {
      color: @color--white;
      border: none;
    }
  }

  // 颜色样式
  &.primary {
    .el-button {
      background-color: @btn--primary;
      &:hover {
        background-color: fadeout(@btn--primary, 20%);
      }
      &:active {
        background-color: darken(@btn--primary, 10%);
      }
    }
  }
  &.secondary {
    .el-button {
      background-color: @btn--secondary;
      &:hover {
        background-color: fadeout(@btn--secondary, 20%);
      }
      &:active {
        background-color: darken(@btn--secondary, 10%);
      }
    }
  }
  &.danger {
    .el-button {
      background-color: @btn--danger;
      &:hover {
        background-color: fadeout(@btn--danger, 20%);
      }
      &:active {
        background-color: darken(@btn--danger, 10%);
      }
    }
  }
  &.warn {
    .el-button {
      background-color: @btn--warn;
      &:hover {
        background-color: fadeout(@btn--warn, 20%);
      }
      &:active {
        background-color: darken(@btn--warn, 10%);
      }
    }
  }
  &.plain {
    .el-button {
      background-color: @btn--plain;
      border: 1px solid @border--plain;
      color: @color--placeholder;
      &:hover {
        background-color: fadeout(@border--plain, 80%);
      }
      &:active {
        background-color: fadeout(@border--plain, 40%);
      }
    }
  }

  // 规格
  &.default {
    .el-button {
      min-width: @btn-width;
    }
  }
  &.mini {
    .el-button {
      min-width: @btn-width--mini;
    }
  }
  &.small {
    .el-button {
      min-width: @btn-width--small;
    }
  }
}
</style>
