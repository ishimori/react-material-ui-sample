import React from "react";
import "./style.scss";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
// ==========ここから変更する==========
import { isSameMonth, isFirstDay, isSameDay } from "../../../services/calendar";

const CalendarElement = ({ day }: any) => {
  // 当日かどうか判断
  const today = dayjs();

  // 今月以外をグレーダウン
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  // 月の最初だけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D";

  // 当日か判断
  const isToday = isSameDay(day, today);

  return (
    <div className="element">
      <Typography
        className="date"
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? "today" : ""}>{day.format(format)}</span>
      </Typography>
    </div>
  );
};

export default CalendarElement;
