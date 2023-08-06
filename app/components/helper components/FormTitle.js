import Form from '../Main';
import classes from './FormTitle.module.css';

const FormTitle = (props) => {
  const { mainTitle, secondaryTitle } = props;

  return (
    <div className={classes.main}>
      <h1>{mainTitle}</h1>
      <h2>{secondaryTitle}</h2>
    </div>
  );
};

export default FormTitle;
