<script>
import { mapState } from "vuex";
import * as api from "../dao";

export default {
  name: "qqTestHttp",

  data() {
    return {
      contents: []
    };
  },

  computed: {
    ...mapState("qqTest", ["title", "introduce"])
  },

  async mounted() {
    const payload = {
      patha: "api",
      pathb: "base",
      pathc: "getTeam",
      camelStyle: "驼峰",
      snake_style: "蛇行",
      "kebab-Style": "串行",
      a: "query1",
      b: "query2",
      c: "rest"
    };

    const data1 = await api.getCamelTeam(payload);
    const data2 = await api.getSnakeTeam(payload);
    const data3 = await api.getKebabTeam(payload);

    this.contents = [data1, data2, data3];
  },

  render() {
    return (
      <article>
        <h1 style={{ textAlign: "center" }}>{this.title}</h1>
        <p>{this.introduce}</p>

        <ul>
          {this.contents.map(content => (
            <li>{JSON.stringify(content)}</li>
          ))}
        </ul>
      </article>
    );
  }
};
</script>
