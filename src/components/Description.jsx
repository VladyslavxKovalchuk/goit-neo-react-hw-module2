import style from "./css/Description.module.css";
const Description = () => {
  return (
    <div className={style.heading}>
      <h1 className={style.title}>
        <span className={style.highlight}>Sip</span> Happens Café
      </h1>
      <p className={style.text}>
        Please leave your feedback  <span className={style.texthighlight}>about</span> our service by selecting one  <span className={style.texthighlight}>of the </span> 
         options <span className={style.texthighlight}>below</span>.
      </p>
    </div>
  );
};

export default Description;