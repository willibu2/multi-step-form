'use client';

import classes from './RightSide.module.css';

import FirstSlide from '../helper components/form slides/FirstSlide';
import SecondSlide from '../helper components/form slides/SecondSlide';
import ThirdSlide from '../helper components/form slides/ThirdSlide';
import FourthSlide from '../helper components/form slides/FourthSlide';
import FifthSlide from '../helper components/form slides/FifthSlide';

import { useFormContext } from '@/app/store/form-context';

const RightSide = () => {
  const ctx = useFormContext();

  const showFirstSlide = ctx.formState.step === 1;
  const showSecondSlide = ctx.formState.step === 2;
  const showThirdSlide = ctx.formState.step === 3;
  const showFourthSlide = ctx.formState.step === 4;
  const showFifthSlide = ctx.formState.step === 5;

  return (
    <section className={classes.main}>
      {showFirstSlide && <FirstSlide />}
      {showSecondSlide && <SecondSlide />}
      {showThirdSlide && <ThirdSlide />}
      {showFourthSlide && <FourthSlide />}
      {showFifthSlide && <FifthSlide />}
    </section>
  );
};

export default RightSide;
