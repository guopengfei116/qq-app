<script>
export default {
  name: "CrudExampleContents",

  functional: true,

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  render(h, context) {
    const { data } = context.props;

    return (
      <el-table
        data={data}
        border
        attrs={context.data.attrs}
        {...{ directives: context.data.directives }}
      >
        <el-table-column prop="id" label="id" align="center"></el-table-column>

        <el-table-column
          prop="status"
          label="状态"
          align="center"
          show-overflow-tooltip={true}
        ></el-table-column>

        <el-table-column
          prop="createTime"
          label="创建时间"
          align="center"
          show-overflow-tooltip={true}
        ></el-table-column>

        <el-table-column
          label="操作"
          align="center"
          scopedSlots={context.scopedSlots}
        ></el-table-column>
      </el-table>
    );
  }
};
</script>
