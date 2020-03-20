<script>
import Chart from "mo-ui/lib/chart/Chart";
import PieOption from "mo-ui/lib/chart/PieOption";

const defaultPieOption = new PieOption();
Object.freeze(defaultPieOption);

export default {
  name: "MoPie",

  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      chart: null
    };
  },

  watch: {
    option() {
      this.refresh();
    }
  },

  mounted() {
    const container = this.$refs.chartContainerRef;
    this.chart = new Chart(container, defaultPieOption);
    this.refresh();
  },

  destroyed() {
    this.chart.destroy();
  },

  methods: {
    refresh() {
      this.chart.render(this.option);
    },

    getInstance() {
      return this.chart && this.chart.echart;
    }
  },

  render() {
    return <section ref="chartContainerRef" class="chart-container"></section>;
  }
};
</script>

<style scoped>
.chart-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  padding: 0px;
  margin: 0px;
  border-width: 0px;
  cursor: default;
}
</style>
