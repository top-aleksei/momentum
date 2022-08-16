// GET TIME OF DAY
export function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  return Math.trunc(hours / 6);
}
