import moment from "moment";

/**
 * @method 倒推方式获取日期范围
 *
 * @param ${年月日类型}/${起始时间减去数值}-${结束时间减去数值}
 * 年："year/0-0" => 最近一年[当年, 当年]
 * 月："month/2-0" => 最近3个月[3个月前, 当月]
 * 月："month/5-0" => 最近6个月[6个月前, 当月]
 * 日："day/6-0" => 最近一周[7天前, 当天]
 *
 * @return [startDate, endDate]: Array<Date, Date>
 * */
export function getBackwardDateRange(
  expression,
  min = "1970-01-01",
  max = moment().add(50, "year")
) {
  const [type, subExpression] = expression.split("/");
  const [startSub, endSub] = subExpression.split("-");

  // backward
  let start = moment()
    .subtract(startSub, type)
    .startOf(type);
  let end = moment()
    .subtract(endSub, type)
    .endOf(type);

  // limit
  start = moment.max(start, moment(min));
  end = moment.min(end, moment(max));

  // to date
  return [start.toDate(), end.toDate()];
}
