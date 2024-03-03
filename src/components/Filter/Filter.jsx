import css from './Filter.module.css';

export const Filter = ({ text }) => {
  return (
    <button children={css.filterBtn}>
      {}
      {text}
    </button>
  );
};
