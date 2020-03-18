import Vue from "vue";

import {
  // Basic
  Row,
  Col,
  Container,
  Aside,
  Header,
  Main,
  Button,

  // Form
  Form,
  FormItem,
  Input,
  InputNumber,
  Select,
  OptionGroup,
  Cascader,
  Option,
  Switch,
  TimePicker,
  DatePicker,
  Radio,
  RadioGroup,
  RadioButton,
  Slider,

  // Data
  Table,
  TableColumn,
  Tag,
  Pagination,
  Progress,
  Badge,

  // Notice
  Message,
  MessageBox,
  Loading,

  // Navigation
  Menu,
  Submenu,
  MenuItem,
  PageHeader,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Steps,
  Step,

  // Others
  Dialog,
  Tooltip,
  Card,
  Tabs,
  TabPane,
  Popover,
  Popconfirm,
  Collapse,
  CollapseItem,
  Divider,
  Drawer
} from "element-ui";

Vue.prototype.$ELEMENT = { size: "small", zIndex: 1000 };

// Basic
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Button);

// Form
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Select);
Vue.use(OptionGroup);
Vue.use(Cascader);
Vue.use(Option);
Vue.use(Switch);
Vue.use(TimePicker);
Vue.use(DatePicker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Slider);

// Data
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tag);
Vue.use(Pagination);
Vue.use(Progress);
Vue.use(Badge);

// Notice
// Vue.use(Message);
// Vue.use(MessageBox);
Vue.use(Loading.directive);

// Navigation
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(PageHeader);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Steps);
Vue.use(Step);

// Others
Vue.use(Dialog);
Vue.use(Tooltip);
Vue.use(Card);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Popover);
Vue.use(Popconfirm);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Divider);
Vue.use(Drawer);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
