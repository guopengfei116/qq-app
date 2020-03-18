<script>
import { mapState } from "vuex";
import { isDisabledDate } from "qq/qq-ui/lib/date-picker";

import QqButton from "qq/qq-ui/view/base/Button";
import QqPagination from "qq/qq-ui/view/data/Pagination";
import QqPaginationOffset from "qq/qq-ui/view/data/PaginationOffset";
import QqPlainText from "qq/qq-ui/view/data/PlainText";
import QqDateRangePicker from "qq/qq-ui/view/form/DateRangePicker";
import QqClosure from "qq/qq-ui/view/util/Closure";

export default {
  name: "qqTestUi",

  components: {
    QqButton,
    QqPagination,
    QqPaginationOffset,
    QqPlainText,
    QqDateRangePicker,
    QqClosure
  },

  data() {
    return {
      dateRange: ["2008-10-01", "2020-05-01"]
    };
  },

  computed: {
    ...mapState("qqTest", ["title"])
  },

  methods: {
    message(msg) {
      console.log(msg);
    }
  },

  render() {
    return (
      <article>
        <h1 style={{ textAlign: "center" }}>{this.title}</h1>
        <dl>
          <dt>QqButton</dt>
          <dd>
            <qq-button
              type="primary"
              onClick={this.message.bind(this, "primary")}
            >
              主要
            </qq-button>
            <qq-button
              type="secondary"
              onClick={this.message.bind(this, "secondary")}
            >
              次要
            </qq-button>
            <qq-button type="warn" onClick={this.message.bind(this, "warn")}>
              警告
            </qq-button>
            <qq-button
              type="danger"
              onClick={this.message.bind(this, "danger")}
            >
              危险
            </qq-button>
            <qq-button type="plain" onClick={this.message.bind(this, "plain")}>
              朴素
            </qq-button>
            <qq-button type="text" onClick={this.message.bind(this, "text")}>
              文本
            </qq-button>
          </dd>
        </dl>

        <dl>
          <dt>QqPagination</dt>
          <dd>
            <qq-pagination
              total={20}
              pageSizes={[2, 4, 6]}
              onChange={this.message}
            ></qq-pagination>
          </dd>
        </dl>

        <dl>
          <dt>QqPaginationOffset</dt>
          <dd>
            <qq-pagination-offset
              total={100}
              onChange={this.message}
            ></qq-pagination-offset>
          </dd>
        </dl>

        <dl>
          <dt>QqPlainText</dt>
          <dd>
            <qq-plain-text
              data={{
                name: "qq",
                birthday: "20200312"
              }}
              strategy={[
                { label: "姓名:", key: "name" },
                { label: "生日:", key: "birthday" }
              ]}
              label-width="60px"
            ></qq-plain-text>
          </dd>
        </dl>

        <dl>
          <dt>QqDateRangePicker</dt>
          <dd>
            <qq-date-range-picker
              value={this.dateRange}
              type="monthrange"
              value-format="yyyy-MM"
              clearable={true}
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份"
              shortcuts-as={{
                rules: ["month/2-0", "month/5-0", "year/0-0"],
                maxLimit: new Date()
              }}
              picker-options={{
                disabledDate: isDisabledDate
              }}
              onInput={v => {
                this.dateRange = v;
                this.message(v);
              }}
            ></qq-date-range-picker>
          </dd>
        </dl>

        <dl>
          <dt>qq-closure</dt>
          <dd>
            <qq-closure
              v1={666}
              v2={888}
              sum={666 + 888}
              scopedSlots={{
                default(scope) {
                  return <p>{`${scope.v1}+${scope.v2}=${scope.sum}`}</p>;
                }
              }}
            ></qq-closure>
          </dd>
        </dl>
      </article>
    );
  }
};
</script>
