<script>
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
      <mo-enums
        data={this.teamEnums}
        value={this.value}
        attrs={this.$attrs}
        onChange={v => this.$emit("change", v)}
      ></mo-enums>
    );
  }
};
</script>
