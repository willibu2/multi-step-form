import classes from './SmallButton.module.css';
import { useFormContext } from '@/app/store/form-context';

const SmallButton = (props) => {
  const { number } = props;

  const ctx = useFormContext();

  let btnIsActive = number === ctx.formState.step;

  if (number === 4) {
    btnIsActive = number <= ctx.formState.step;
  }

  const btnClasses = btnIsActive
    ? `${classes.btn} ${classes['btn-active']}`
    : `${classes.btn}`;

  return <button className={btnClasses}>{number}</button>;
};

export default SmallButton;
