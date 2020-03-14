import moment from "moment";

const dateStyle = "YYYY-MM-DD";
const timeStyle = "hh:mm:ss";
const dateTimeStyle = `${dateStyle} ${timeStyle}`;

export const formatDate = (time, style = dateStyle) =>
  moment(time).format(style);

export const formatTime = (time, style = timeStyle) =>
  moment(time).format(style);

export const formatDateTime = (time, style = dateTimeStyle) =>
  moment(time).format(style);
