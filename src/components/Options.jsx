import style from "./css/Options.module.css";
const Options = ({ options, total, updateFeedback, resetFeedback }) => {
  const buttonFeedback = Object.keys(options);

  const handleClick = (feedbackType) => updateFeedback(feedbackType);

  return (
    <div className={style.container}>
      {buttonFeedback.map((buttonType, idx) => {
        return (
          <button
            onClick={() => {
              handleClick(buttonType);
            }}
            className={style.button}
            type="button"
            key={idx}
          >
            {buttonType}
          </button>
        );
      })}
      {total > 0 && (
        <button
          onClick={() => resetFeedback()}
          className={style.button}
          type="reset"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;