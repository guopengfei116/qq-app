<script>
import { getNavMenus } from "../dao";
import QqBasicLayout from "qq/qq-ui/view/layout/BasicLayout";

export default {
  name: "QqTestCrud",

  components: {
    QqBasicLayout
  },

  data() {
    return {
      logo: "TEST",
      header: {
        app: "Test"
      },
      user: {
        name: "test",
        tooltip: "qq test"
      },
      menus: []
    };
  },

  async mounted() {
    this.menus = await getNavMenus();
  },

  render() {
    const { logo, header, user, menus } = this;

    return (
      <qq-basic-layout logo={logo} header={header} user={user} menus={menus}>
        <router-view></router-view>
      </qq-basic-layout>
    );
  }
};
</script>
