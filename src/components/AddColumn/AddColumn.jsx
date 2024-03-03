import css from './AddColumn.module.css';

export const AddColumn = ({ text }) => {
  return (
    <button children={css.filterBtn}>
      {}
      {text}
    </button>
  );
};
