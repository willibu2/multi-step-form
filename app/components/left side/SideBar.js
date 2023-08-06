'use client';

import classes from './SideBar.module.css';
import SmallButton from '../helper components/SmallButton';

const SideBar = () => {
  return (
    <div className={classes.div}>
      <div className={classes['step-container']}>
        <SmallButton number={1} />
        <div className={classes['info-container']}>
          <p>Step 1</p>
          <h2>your info</h2>
        </div>
      </div>
      <div className={classes['step-container']}>
        <SmallButton number={2} />
        <div className={classes['info-container']}>
          <p>Step 2</p>
          <h2>select plan</h2>
        </div>
      </div>
      <div className={classes['step-container']}>
        <SmallButton number={3} />
        <div className={classes['info-container']}>
          <p>Step 3</p>
          <h2>add-ons</h2>
        </div>
      </div>
      <div className={classes['step-container']}>
        <SmallButton number={4} />
        <div className={classes['info-container']}>
          <p>Step 4</p>
          <h2>summary</h2>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
