import { Buttons } from './FeedbackOptions.styled';
export const FeedbackOptions = ({
  goodFeadbacks,
  neutralFeadbacks,
  badFeadbacks,
}) => {
  return (
    <Buttons>
      <button key={'good'} onClick={goodFeadbacks}>
        {'good'}
      </button>
      <button key={'neutral'} onClick={neutralFeadbacks}>
        {'neutral'}
      </button>
      <button key={'bad'} onClick={badFeadbacks}>
        {'bad'}
      </button>
      {/* {options.map(option => (
        <button
          key={option}
          onClick={() => {
            feedback(option);
          }}
        >
          {option}
        </button>
      ))} */}
    </Buttons>
  );
};
