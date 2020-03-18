<script>
import Enums from "qq/qq-ui/view/form/Enums";
import { getAppByTeam } from "mo-ui/dao/enums";

export default {
  name: "MoAppByTeam",

  model: {
    prop: "value",
    event: "change"
  },

  props: {
    value: {
      type: String,
      default: null
    },

    teamId: {
      type: Number,
      default: null
    }
  },

  data() {
    return {
      appEnums: null
    };
  },

  watch: {
    teamId() {
      this.$emit("change", "");
      this.initModel();
    }
  },

  mounted() {
    this.initModel();
  },

  methods: {
    async initModel() {
      this.appEnums = await getAppByTeam({
        teamId: this.teamId
      });
    }
  },

  render(h) {
    return (
      <Enums
        data={this.appEnums}
        value={this.value}
        attrs={this.$attrs}
        onChange={v => this.$emit("change", v)}
      ></Enums>
    );
  }
};
</script>
