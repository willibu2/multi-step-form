import classes from './AddOn.module.css';
import Image from 'next/image';
import { useFormContext } from '@/app/store/form-context';

const AddOn = (props) => {
  const ctx = useFormContext();

  const { title, desc, price, onClick, type } = props;

  const mainClasses = ctx.formState.addOns[type].active
    ? `${classes.main} ${classes['main-active']}`
    : `${classes.main}`;

  const editedPrice = ctx.formState.plan
    ? `+$${price}/mo`
    : `+${price * 10}/yr`;

  return (
    <div className={mainClasses} onClick={onClick}>
      <button className={classes.btn}>
        <Image
          className={classes['checkmark-icon']}
          width={10}
          height={10}
          alt="checkmark icon"
          src="/images/icon-checkmark.svg"
        />
      </button>
      <div className={classes['text-container']}>
        <h2 className={classes['title']}>{title}</h2>
        <p className={classes.desc}>{desc}</p>
      </div>
      <p className={classes.price}>{editedPrice}</p>
    </div>
  );
};

export default AddOn;
