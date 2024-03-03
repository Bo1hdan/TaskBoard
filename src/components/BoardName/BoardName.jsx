import css from './BoardName.module.css';

export const BoardName = ({ text }) => {
  return <h1 className={css.boardName}>{text}</h1>;
};
