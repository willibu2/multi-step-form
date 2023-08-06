'use client';

import classes from './SecondSlide.module.css';
import { useEffect, useState } from 'react';

import FormTitle from '../FormTitle';
import FormFooter from '../FormFooter';
import PlanBox from '../PlanBox';

import { useFormContext } from '@/app/store/form-context';

const SecondSlide = (props) => {
  const ctx = useFormContext();

  const plan = ctx.formState.plan;
  const activeType = ctx.formState.type;

  const planTypeHandler = ctx.changeTypeHandler;

  const nextClickHandler = () => {
    if (!activeType) return;

    ctx.goNextHandler();
  };

  const backClickHandler = () => {
    ctx.goBackHandler();
  };

  let monthlyBtnClasses;
  let yearlyBtnClasses;

  if (ctx.formState.plan) {
    monthlyBtnClasses = `${classes['monthly-btn']} ${classes['active-btn']}`;
    yearlyBtnClasses = `${classes['yearly-btn']} `;
  } else {
    monthlyBtnClasses = `${classes['monthly-btn']} `;
    yearlyBtnClasses = `${classes['yearly-btn']} ${classes['active-btn']}`;
  }

  return (
    <>
      <FormTitle
        mainTitle="Select your plan"
        secondaryTitle="You have the option of monthly or yearly billing."
      />
      <div className={classes.main}>
        <div className={classes['plans-container']}>
          <PlanBox
            imageSrc="/images/icon-arcade.svg"
            plan={plan}
            price="9"
            type="Arcade"
            activePlan={activeType}
            onClick={planTypeHandler.bind(null, 'Arcade')}
          />
          <PlanBox
            imageSrc="/images/icon-advanced.svg"
            plan={plan}
            type="Advanced"
            price="12"
            activePlan={activeType}
            onClick={planTypeHandler.bind(null, 'Advanced')}
          />
          <PlanBox
            imageSrc="/images/icon-pro.svg"
            plan={plan}
            type="Pro"
            price="15"
            activePlan={activeType}
            onClick={planTypeHandler.bind(null, 'Pro')}
          />
        </div>
        <div className={classes['switch-container']}>
          <p className={classes.monthly}>Monthly</p>
          <div
            className={classes['btns-container']}
            onClick={ctx.changePlanHandler}
          >
            <button
              className={monthlyBtnClasses}
              onClick={ctx.changePlanHandler}
            ></button>
            <button
              className={yearlyBtnClasses}
              onClick={ctx.changePlanHandler}
            ></button>
          </div>
          <p className={classes.yearly}>Yearly</p>
        </div>
      </div>
      <FormFooter
        onClickNext={nextClickHandler}
        onClickBack={backClickHandler}
      />
    </>
  );
};

export default SecondSlide;
