<script>
import Enums from "qq/qq-ui/view/form/Enums";
import { getTeamList } from "mo-ui/dao/enums";

export default {
  name: "MoTeam",

  model: {
    prop: "value",
    event: "change"
  },

  props: {
    value: {
      type: Number,
      default: null
    }
  },

  data() {
    return {
      teamEnums: null
    };
  },

  async mounted() {
    this.teamEnums = await getTeamList();
  },

  render(h) {
    return (
      <Enums
        data={this.teamEnums}
        value={this.value}
        attrs={this.$attrs}
        onChange={v => this.$emit("change", v)}
      ></Enums>
    );
  }
};
</script>
