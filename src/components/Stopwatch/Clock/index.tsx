import style from './Clock.module.scss'

interface Props {
  time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const secounds = time % 60;
  const [minutoDezena, minutoUnidade] = String(minutes).padStart(2, '0');
  const [segundoDezena, segundoUnidade] = String(secounds).padStart(2, '0');

  return (
    <>
      <span className={style.clockNumber}>{minutoDezena}</span>
      <span className={style.clockNumber}>{minutoUnidade}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{segundoDezena}</span>
      <span className={style.clockNumber}>{segundoUnidade}</span>
    </>
  );
}
