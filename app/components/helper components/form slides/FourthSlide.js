import classes from './FourthSlide.module.css';

import FormTitle from '../FormTitle';
import FormFooter from '../FormFooter';
import SingleAddon from '../SingleAddon';

import { useFormContext } from '@/app/store/form-context';

const FourthSlide = () => {
  const ctx = useFormContext();

  const type = ctx.formState.type;
  const subscription = ctx.formState.plan ? 'Monthly' : 'Yearly';

  let planPrice;

  if (ctx.formState.type === 'Arcade') {
    planPrice = 9;
  }

  if (ctx.formState.type === 'Advanced') {
    planPrice = 12;
  }

  if (ctx.formState.type === 'Pro') {
    planPrice = 15;
  }

  if (!ctx.formState.plan) {
    planPrice = planPrice * 10;
  }

  let addOnsPrice;

  addOnsPrice = ctx.formState.addOns.reduce((acc, cur) => {
    if (cur.active) {
      return acc + cur.price;
    }

    return acc;
  }, 0);

  if (!ctx.formState.plan) {
    addOnsPrice = addOnsPrice * 10;
  }

  const totalPrice = planPrice + addOnsPrice;

  const duration = ctx.formState.plan ? 'mo' : 'yr';

  return (
    <>
      <FormTitle
        mainTitle="Finishing up"
        secondaryTitle="Double-check everything looks OK before confirming."
      />
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes['first-div']}>
            <div>
              <p className={classes.plan}>{`${type} (${subscription})`}</p>
              <p className={classes.change} onClick={ctx.goBackHandler}>
                Change
              </p>
            </div>
            <p
              className={classes['plan-price']}
            >{`$${planPrice}/${duration}`}</p>
          </div>
          {ctx.formState.addOns[0].active && (
            <SingleAddon
              title="Online service"
              price={1}
              plan={ctx.formState.plan}
            />
          )}
          {ctx.formState.addOns[1].active && (
            <SingleAddon
              title="Larger Storage"
              price={2}
              plan={ctx.formState.plan}
            />
          )}
          {ctx.formState.addOns[2].active && (
            <SingleAddon
              title="Customizable Profile"
              price={2}
              plan={ctx.formState.plan}
            />
          )}
        </div>
        <div className={classes['total-container']}>
          <p className={classes.total}>
            Total (per {ctx.formState.plan ? 'month' : 'year'})
          </p>
          <p
            className={classes['total-price']}
          >{`+$${totalPrice}/${duration}`}</p>
        </div>
      </div>
      <FormFooter
        onClickNext={ctx.goNextHandler}
        onClickBack={ctx.goBackHandler}
      />
    </>
  );
};

export default FourthSlide;
