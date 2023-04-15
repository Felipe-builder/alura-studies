import style from './List.module.scss'
import Item from "./Item";
import { ITask } from '../../types/task';

interface Props {
  tasks: ITask[],
  selectTask: (taskSelected: ITask) => void 
}

export default function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2> Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item
            selectTask={selectTask}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}
