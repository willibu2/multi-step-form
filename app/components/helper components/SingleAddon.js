import classes from './SingleAddon.module.css';

const SingleAddon = (props) => {
  const { title, price, plan } = props;

  const subscription = plan ? 'mo' : 'yr';

  return (
    <div className={classes.main}>
      <p className={classes.title}>{title}</p>
      <p className={classes.price}>{`+${
        plan ? price : price * 10
      }$/${subscription}`}</p>
    </div>
  );
};

export default SingleAddon;
