import { getBackwardDateRange } from "qq/qq-core/date/range";

const shortcutNameDict = {
  "day/0-0": "今天",
  "day/1-1": "昨天",
  "day/6-0": "近一周",
  "day/14-0": "近半个月",

  "month/0-0": "本月",
  "month/1-1": "上月",
  "month/2-0": "近三个月",
  "month/5-0": "近半年",

  "year/0-0": "本年",
  "year/1-1": "去年"
};

const defaultShortcutAs = {
  rules: ["month/2-0", "month/5-0", "year/0-0"]
};

export function getShortcuts(shortcutsAs = defaultShortcutAs) {
  const { rules, minLimit, maxLimit } = shortcutsAs;

  return rules.map(rule => {
    return {
      text: shortcutNameDict[rule],
      onClick(picker) {
        picker.$emit("pick", getBackwardDateRange(rule, minLimit, maxLimit));
      }
    };
  });
}

/**
 * @method 日期是否可选
 * 如果日期大于当前年份，或者等于当前年但大于当前月时不可选
 * */
export function isDisabledDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const curretnDate = new Date();
  const currentYear = curretnDate.getFullYear();
  const currentMonth = curretnDate.getMonth();

  return year > currentYear || (month > currentMonth && year === currentYear);
}
