import { useState, useEffect } from "react";
import Description from "./components/Description.jsx";
import Options from "./components/Options.jsx";
import Feedback from "./components/Feedback.jsx";
import Notification from "./components/Notification.jsx";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem("feedbackData");
    if (!storedFeedback) {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }

    return JSON.parse(storedFeedback);
  });

  useEffect(() => {
    localStorage.setItem("feedbackData", JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedbackUpdate = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const handleFeedbackReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedbackCount = feedback.bad + feedback.neutral + feedback.good;
  const positiveFeedbackPercentage = Math.round((feedback.good / totalFeedbackCount) * 100);

  return (
    <>
    <div className="mainview">
      <Description />
      <Options
        options={feedback}
        updateFeedback={handleFeedbackUpdate}
        resetFeedback={handleFeedbackReset}
        total={totalFeedbackCount}
      />
      {totalFeedbackCount === 0 ? (
         <Notification />
      ) : (
        <Feedback
          options={feedback}
          totalQuantity={totalFeedbackCount}
          positiveQuantity={positiveFeedbackPercentage}
        />
      )}
    </div>
    </>
  );
};
export default App;