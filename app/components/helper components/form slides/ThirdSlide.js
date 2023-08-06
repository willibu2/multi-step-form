import classes from './ThirdSlide.module.css';

import FormFooter from '../FormFooter';
import FormTitle from '../FormTitle';
import AddOn from '../AddOn';

import { useFormContext } from '@/app/store/form-context';

const ThirdSlide = () => {
  const ctx = useFormContext();

  return (
    <>
      <FormTitle
        mainTitle="Pick add-ons"
        secondaryTitle="Add-ons enhance your gaming experience"
      />
      <div className={classes['addon-container']}>
        <AddOn
          title="Online service"
          desc="Access to multiplayer games"
          price={1}
          onClick={ctx.changeAddOnHandler.bind(null, 0)}
          type={0}
        />
        <AddOn
          title="Larger Storage"
          desc="Extra 1TB of cloud save"
          price={2}
          onClick={ctx.changeAddOnHandler.bind(null, 1)}
          type={1}
        />
        <AddOn
          title="Customizable profile"
          desc="Custom theme on your phone"
          price={2}
          onClick={ctx.changeAddOnHandler.bind(null, 2)}
          type={2}
        />
      </div>
      <FormFooter
        onClickNext={ctx.goNextHandler}
        onClickBack={ctx.goBackHandler}
      />
    </>
  );
};

export default ThirdSlide;
