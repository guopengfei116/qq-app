<script>
import Vue from "vue";
import { Select, Option } from "element-ui";
import EnumsModel from "qq/qq-core/class/Enums";

Vue.use(Select);
Vue.use(Option);

export default {
  name: "QqEnums",

  functional: true,

  props: {
    data: {
      type: EnumsModel
    }
  },

  render(h, context) {
    let { data } = context.props;
    data = data || new EnumsModel();

    return (
      <el-select {...context.data}>
        {data.tuple.map(([name, value]) => (
          <el-option label={name} key={value} value={value}></el-option>
        ))}
      </el-select>
    );
  }
};
</script>
