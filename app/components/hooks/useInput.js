import { useState } from 'react';

const useInput = (email) => {
  const [value, setValue] = useState('');
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid = value.trim().length > 0;

  const emailIsNotGood = valueIsTouched && !value.includes('@');

  const valueIsInvalid = !valueIsValid && valueIsTouched;

  const onBlurHandler = () => {
    setValueIsTouched(true);
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
    setValueIsTouched(false);
  };

  return {
    value,
    valueIsValid,
    valueIsInvalid,
    onBlurHandler,
    onChangeHandler,
    emailIsNotGood,
    reset,
  };
};

export default useInput;
