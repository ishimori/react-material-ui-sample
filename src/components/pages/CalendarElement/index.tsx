import React from "react";
import "./style.scss";
import { Typography } from "@material-ui/core";

const CalendarElement = ({ day }: any) => {
  // 文字列のフォーマットをどうするか
  const isFirstDay = day.date() === 1;
  // 月の最初だけ月情報をつける
  const format = isFirstDay ? "M月D日" : "D";

  return (
    <div className="element">
      <Typography
        className="date"
        align="center"
        variant="caption"
        component="div"
      >
        {day.format(format)}
      </Typography>
    </div>
  );
};

export default CalendarElement;
