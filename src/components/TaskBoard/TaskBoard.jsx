import { BoardName } from 'components/BoardName/BoardName';
import { Filter } from 'components/Filter/Filter';
import { AddColumn } from 'components/AddColumn/AddColumn';
import css from 'components/TaskBoard/TaskBoard.module.css';

export const TaskBoard = () => {
  return (
    <div>
      <div className={css.projectHeader}>
        <BoardName text="Project office" />
        <Filter text="Filters" />
      </div>

      <div>
        <AddColumn text="Add another column" />
      </div>
    </div>
  );
};
