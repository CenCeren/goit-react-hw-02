import styles from './Options.module.css';

const Options = ({ options, onLeaveFeedback, onReset, hasFeedback }) => (
  <div className={styles.buttons}>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
    {hasFeedback && (
      <button onClick={onReset} className={styles.reset}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
