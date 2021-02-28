import React from "react";
import CalendarElement from "../CalendarElement";
import { createCalendar } from "../../../services/calendar";
import GenericTemplate from "../../templates/GenericTemplate";
import { GridList } from "@material-ui/core";
// import dayjs from "dayjs";
// import "dayjs/locale/ja";
import "./style.scss";

// dayjs.locale("ja");

// const createCalendar = () => {
//   const firstDay = dayjs().startOf("month");
//   const firstDayIndex = firstDay.day();

//   return Array(35)
//     .fill(0)
//     .map((val, index) => {
//       const diffFromFirstDay = index - firstDayIndex;
//       const day = firstDay.add(diffFromFirstDay, "day");
//       console.log(typeof day);
//       console.log(day);
//       return day;
//     });
// };
const calendar = createCalendar();

const CalendarBoard = () => {
  return (
    <GenericTemplate title="カレンダー">
      <div className="container">
        <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
          {calendar.map((c: any) => (
            <li key={c.toISOString()}>
              <CalendarElement>{c.format("D")}</CalendarElement>
            </li>
          ))}
        </GridList>
      </div>
    </GenericTemplate>
  );
};

export default CalendarBoard;
