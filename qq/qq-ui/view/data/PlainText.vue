<script>
import { Row, Col } from "element-ui";
import Vue from "vue";

export default {
  name: "QqPlainText",

  inheritAttrs: false,

  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },

  props: {
    data: {
      type: Object,
      required: true
    },

    strategy: {
      type: Array,
      required: true
    },

    // row: 1~24
    span: {
      type: Number,
      default: 24
    },

    labelWidth: {
      type: String,
      default: "100px"
    }
  },

  render() {
    const $scopedSlots = this.$scopedSlots;
    const renderData = this.initRenderData();
    const singleRowMaxSpan = 24;

    return (
      <section class="plain-text">
        {renderData.reduce((vnodes, item, i) => {
          vnodes.itemBufferSpanTotal = vnodes.itemBufferSpanTotal || 0;
          vnodes.itemBuffer = vnodes.itemBuffer || [];

          // 1、不够一行，push
          // 2、刚好满足一行，push => render => clear
          // 3、超出一行，render => push
          if (vnodes.itemBufferSpanTotal + item.span < singleRowMaxSpan) {
            vnodes.itemBufferSpanTotal += item.span;
            vnodes.itemBuffer.push(item);
          } else if (
            vnodes.itemBufferSpanTotal + item.span ===
            singleRowMaxSpan
          ) {
            vnodes.itemBuffer.push(item);
            vnodes.push(
              this.renderSingleRow(i, vnodes.itemBuffer, $scopedSlots)
            );
            vnodes.itemBuffer = [];
            vnodes.itemBufferSpanTotal = 0;
          } else {
            vnodes.push(
              this.renderSingleRow(i, vnodes.itemBuffer, $scopedSlots)
            );
            vnodes.itemBuffer = [item];
            vnodes.itemBufferSpanTotal = item.span;
          }

          // 4、结束，render => clear
          if (renderData.length - 1 === i && vnodes.itemBuffer.length) {
            vnodes.push(
              this.renderSingleRow(i + 1, vnodes.itemBuffer, $scopedSlots)
            );
            vnodes.itemBuffer = null;
            vnodes.itemBufferSpanTotal = null;
          }

          return vnodes;
        }, [])}
      </section>
    );
  },

  methods: {
    initRenderData() {
      return this.strategy.map(item => {
        let value = this.data[item.key];
        let span = item.span || this.span;

        // 支持单过滤器
        if (item.filter) {
          value = Vue.filter(item.filter)(value);
        }

        // 支持格式化函数
        if (item.formatter) {
          value = item.formatter(value);
        }

        return {
          label: item.label,
          key: item.key,
          value,
          span
        };
      });
    },

    renderSingleRow(key, cols, $scopedSlots) {
      return (
        <el-row class="row" key={key}>
          {cols.map((item, i) => (
            <el-col class="col" key={i} span={item.span}>
              <div class="item">
                <div class="item_label" style={{ width: `${this.labelWidth}` }}>
                  {$scopedSlots.label ? (
                    $scopedSlots.label(item)
                  ) : (
                    <label>{item.label}</label>
                  )}
                </div>

                <div class="item_value">
                  {$scopedSlots.default ? (
                    $scopedSlots.default(item)
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            </el-col>
          ))}
        </el-row>
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/style/var.less";

.plain-text {
  font-size: @font-size;
  .row {
    margin: 10px 0;
    line-height: 1.4;
    .item {
      display: flex;
      &_label {
        color: @color--info;
      }
      &_value {
        flex: 1;
        color: @color--primary;
      }
    }
  }
}
</style>
