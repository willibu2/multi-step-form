import classes from './FormFooter.module.css';

const FormFooter = (props) => {
  const { firstPage, lastPage } = props;

  let mainClasses = `${classes.main}`;

  if (firstPage) {
    mainClasses = `${classes.main} ${classes['first-page']}`;
  }

  if (lastPage) {
    mainClasses = `${classes.main} ${classes['last-page']}`;
  }

  return (
    <div className={mainClasses}>
      <p onClick={props.onClickBack}>Go Back</p>
      <button className={classes['next-btn']} onClick={props.onClickNext}>
        Next Step
      </button>
      <button className={classes['confirm-btn']}>Confirm</button>
    </div>
  );
};

export default FormFooter;
