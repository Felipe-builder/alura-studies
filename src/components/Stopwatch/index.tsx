import { useEffect, useState } from "react";
import { timeToSecounds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";

import style from './Stopwatch.module.scss'

interface Props {
  selected: ITask | undefined,
  finalizeTask: () => void
}

export default function Stopwatch({ selected, finalizeTask}: Props ) {
  const [time, setTime] = useState<number>();
 
  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSecounds(selected.time))
    }
  }, [selected]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if(count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      finalizeTask();
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choice one card and start the stopwatch</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>
        Start
      </Button>
    </div>
  )
}