import classes from './FifthSlide.module.css';
import Image from 'next/image';

const FifthSlide = () => {
  return (
    <div className={classes.main}>
      <Image
        className={classes.logo}
        src="/images/icon-thank-you.svg"
        width={50}
        height={50}
        alt="swoosh logo"
      />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default FifthSlide;
