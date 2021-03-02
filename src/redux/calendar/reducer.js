import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions";

const day = dayjs();

const init = {
  year: day.year(),
  month: day.month() + 1, // 0-11 なので、1-12にする
};
const calendarReducer = (state = init, action) => {
  // console.log(state);
  const { type, payload } = action;
  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload;
    default:
      return state;
  }
};
export default calendarReducer;
