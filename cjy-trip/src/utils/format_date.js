import dayjs from "dayjs" 
export function formatMonthDay(date, formatS="MM月DD日") {
  return dayjs(date).format(formatS)
}

export function dateDistance(l, r) {
  return dayjs(r).diff(dayjs(l), 'day') 
}