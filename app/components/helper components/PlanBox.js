import classes from './PlanBox.module.css';
import Image from 'next/image';

const PlanBox = (props) => {
  const { imageSrc, price, plan, activePlan, onClick, type } = props;

  const yearlyPrice = price * 10;

  const editedPrice = plan ? `$${price}/mo` : `$${yearlyPrice}/yr`;

  let mainClasses = `${classes.main}`;

  if (activePlan === type) {
    mainClasses = `${classes.main} ${classes['main-active']}`;
  }
  return (
    <div className={mainClasses} onClick={onClick}>
      <Image
        className={classes.img}
        alt="arcade icon"
        width={50}
        height={50}
        src={imageSrc}
      />
      <h2>{type}</h2>
      <p className={classes.price}>{editedPrice}</p>
      {!plan && <p className={classes.free}>2 months free</p>}
    </div>
  );
};

export default PlanBox;
