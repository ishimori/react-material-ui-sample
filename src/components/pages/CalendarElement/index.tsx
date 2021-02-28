import React from "react";
import "./style.scss";

type Props = {
  children: JSX.Element;
};
const CalendarElement = ({ children }: Props) => {
  return (
    <div className="element">
      <div className="date">{children}</div>
    </div>
  );
};

export default CalendarElement;
