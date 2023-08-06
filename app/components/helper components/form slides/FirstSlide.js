'use client';

import classes from './FirstSlide.module.css';
import useInput from '../../hooks/useInput';
import FormFooter from '../FormFooter';
import FormTitle from '../FormTitle';

import { useFormContext } from '@/app/store/form-context';

const FirstSlide = (props) => {
  const ctx = useFormContext();

  const {
    value: nameValue,
    valueIsValid: nameIsValid,
    valueIsInvalid: nameIsInvalid,
    onBlurHandler: nameBlurHandler,
    onChangeHandler: nameChangeHandler,
    reset: nameReset,
  } = useInput(false);

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    valueIsInvalid: emailIsInvalid,
    onBlurHandler: emailBlurHandler,
    onChangeHandler: emailChangeHandler,
    reset: emailReset,
    emailIsNotGood,
  } = useInput(true);

  const {
    value: phoneValue,
    valueIsValid: phoneIsValid,
    valueIsInvalid: phoneIsInvalid,
    onBlurHandler: phoneBlurHandler,
    onChangeHandler: phoneChangeHandler,
    reset: phoneReset,
  } = useInput(false);

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    phoneBlurHandler();
    nameBlurHandler();
    emailBlurHandler();

    if (emailIsValid && phoneIsValid && nameIsValid) {
      ctx.goNextHandler();
      nameReset();
      emailReset();
      phoneReset();
    }
  };

  return (
    <>
      <FormTitle
        mainTitle="Personal info"
        secondaryTitle="Please provide your name, email address, and phone number."
      />
      <div className={classes['main-section']}>
        <form onSubmit={formSubmissionHandler}>
          <div>
            <label htmlFor="name">Name</label>
            {nameIsInvalid && <p>This field is required</p>}
          </div>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            value={nameValue}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
          <div>
            <label htmlFor="email">Email Address</label>
            {emailIsInvalid && <p>This field is required</p>}
            {emailIsNotGood && !emailIsInvalid && (
              <p>Please enter valid email.</p>
            )}
          </div>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="e.g.stephenking@lorem.com"
            value={emailValue}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
          />
          <div>
            <label htmlFor="phone">Phone Number</label>
            {phoneIsInvalid && <p>This field is required</p>}
          </div>
          <input
            name="phone"
            id="phone"
            type="text"
            pattern="[0-9]+"
            placeholder="e.g. +1 234 567 890"
            value={phoneValue}
            onBlur={phoneBlurHandler}
            onChange={phoneChangeHandler}
          />
        </form>
      </div>
      <FormFooter firstPage={true} onClickNext={formSubmissionHandler} />
    </>
  );
};

export default FirstSlide;
