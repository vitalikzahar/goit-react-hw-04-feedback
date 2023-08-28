import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notificatoin } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const goodFeadbacks = () => setGood(prevState => prevState + 1);
  // const neutralFeadbacks = () => setNeutral(prevState => prevState + 1);
  // const badFeadbacks = () => setBad(prevState => prevState + 1);
  const total = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round(
    (good * 100) / (good + neutral + bad)
  );

  const addFeedback = type => {
    console.log(type);
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          feedback={addFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {' '}
        {total === 0 ? (
          <Notificatoin title={'Notification message="There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedbackPercentage}
          />
        )}{' '}
      </Section>
    </div>
  );
};
