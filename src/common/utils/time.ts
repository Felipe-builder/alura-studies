export function timeToSecounds(time: string) {
  const [hours = '0', minutes = '0', secounds = '0' ] = time.split(":");
  const hoursOnSecounds = Number(hours) * 3600;
  const minutesOnSecounds = Number(minutes) * 60;
  return hoursOnSecounds + minutesOnSecounds + Number(secounds);
}
