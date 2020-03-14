<script>
export default {
  name: "QqNotFound",

  render() {
    return (
      <div class="not-found">
        <h1>页面不存在</h1>
      </div>
    );
  }
};
</script>

<style lang="less" scoped>
.not-found {
  overflow: hidden;
  text-align: center;
  h1 {
    margin-top: 30px;
    background-image: -webkit-linear-gradient(
      bottom,
      rgb(155, 26, 214),
      rgb(219, 16, 16)
    );
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 60px;
    color: transparent;
    text-shadow: 6px 6px 10px rgb(70, 168, 185);
  }
}
</style>
