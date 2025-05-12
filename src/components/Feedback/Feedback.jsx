import styles from './Feedback.module.css';

const Feedback = ({ feedback, total, positivePercentage }) => (
  <ul className={styles.list}>
    <li>Good: {feedback.good}</li>
    <li>Neutral: {feedback.neutral}</li>
    <li>Bad: {feedback.bad}</li>
    <li>Total: {total}</li>
    <li>Positive: {positivePercentage}%</li>
  </ul>
);

export default Feedback;
