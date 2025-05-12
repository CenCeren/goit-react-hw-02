import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';

const LOCAL_STORAGE_KEY = 'feedbackData';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = type => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={styles.container}>
      <h1>Sip Happens Café</h1>
      <Section title="Please leave your feedback about our service by selecting one of the options below.">
        <Options
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={updateFeedback}
          onReset={resetFeedback}
          hasFeedback={totalFeedback > 0}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </Section>
    </div>
  );
};

export default App;
