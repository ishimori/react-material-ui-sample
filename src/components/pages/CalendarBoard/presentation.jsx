import React from "react";
import CalendarElement from "../CalendarElement";
// import { createCalendar } from "../../../services/calendar";
import GenericTemplate from "../../templates/GenericTemplate";
import { GridList, Typography } from "@material-ui/core";

import "./style.scss";

// const calendar = createCalendar();
const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar }) => {
  return (
    <GenericTemplate title="カレンダー">
      <div className="container">
        <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
          {days.map((d) => (
            <li key={d}>
              <Typography
                className="days"
                color="textSecondary"
                align="center"
                variant="caption"
                component="div"
              >
                {d}
              </Typography>
            </li>
          ))}
          {calendar.map((c) => (
            <li key={c.toISOString()}>
              <CalendarElement day={c} />
            </li>
          ))}
        </GridList>
      </div>
    </GenericTemplate>
  );
};

export default CalendarBoard;
