export function getMonthNumber(month: string) {
  return new Date(`${month} 1, 2021`).getMonth() + 1;
}
