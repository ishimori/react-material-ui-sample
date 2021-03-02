import dayjs from "dayjs";

export const createCalendar = (month) => {
  // // 今月の最初の日を追加
  // const firstDay = dayjs().startOf("month");
  // // 曜日
  // const firstDayIndex = firstDay.day();
  const firstDay = getMonth(month);
  const firstDayIndex = firstDay.day();
  // console.log(firstDay);
  return Array(35)
    .fill(0)
    .map((_, i) => {
      // 今週の日付を差分計算で取得
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");
      return day;
    });
};
export const getMonth = ({ year, month }) => {
  return dayjs(`${year} - ${month}`);
};

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day) => day.date() === 1;
