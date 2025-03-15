import style from "./css/Feedback.module.css";

const Feedback = ({ options, totalQuantity, positiveQuantity }) => {
  const { good, neutral, bad } = options;

  return (
    <div className={style.container}>
      <div className={style.list}>
        <div className={style.item}>
          <p className={style.stats}>Good:</p>
          <p className={style.value}>{good}</p>
        </div>
        <div className={style.item}>
          <p className={style.stats}>Neutral:</p>
          <p className={style.value}>{neutral}</p>
        </div>
        <div className={style.item}>
          <p className={style.stats}>Bad:</p>
          <p className={style.value}>{bad}</p>
        </div>
        <div className={style.item}>
          <p className={style.stats}>Total:</p>
          <p className={style.value}>{totalQuantity}</p>
        </div>
        <div className={style.item}>
          <p className={style.stats}>Positive feedback:</p>
          <p className={style.value}>{positiveQuantity} %</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;