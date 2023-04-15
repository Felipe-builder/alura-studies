import { useEffect, useState } from "react";
import { timeToSecounds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";

import style from './Stopwatch.module.scss'

interface Props {
  selected: ITask | undefined
}

export default function Stopwatch({ selected }: Props ) {
  const [time, setTime] = useState<number>();
 
  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSecounds(selected.time))
    }
  }, [selected]);
  
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choice one card and start the stopwatch</p>
      Time: {time}
      <div className={style.clockWrapper}>
        <Clock/>
      </div>
      <Button>
        Start
      </Button>
    </div>
  )
}