<script>
import Enums from "qq/qq-ui/view/form/Enums";
import { getApplicationList } from "mo-ui/dao/enums";

export default {
  name: "MoApplication",

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
    },

    projectId: {
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
    },

    projectId() {
      this.$emit("change", "");
      this.initModel();
    }
  },

  mounted() {
    this.initModel();
  },

  methods: {
    async initModel() {
      this.appEnums = await getApplicationList({
        teamId: this.teamId,
        projectTagsId: this.projectId
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
