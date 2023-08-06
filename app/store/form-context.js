'use client';

import React, { useContext, useReducer, useState } from 'react';

const formContext = React.createContext({
  formState: {},
  goBackHandler: () => {},
  goNextHandler: () => {},
  changePlanHandler: () => {},
  changeTypeHandler: () => {},
  changeAddOnHandler: () => {},
});

const initialState = {
  step: 1,
  plan: true,
  type: '',
  addOns: [
    { name: 'onlineService', active: false, price: 1 },
    { name: 'largerStorage', active: false, price: 2 },
    { name: 'customizableProfile', active: false, price: 2 },
  ],
};

const formReducer = (state, action) => {
  if (action.type === 'GO-BACK') {
    const currentStep = state.step;

    return { ...state, step: currentStep - 1 };
  }

  if (action.type === 'NEXT') {
    const currentStep = state.step;

    return { ...state, step: currentStep + 1 };
  }

  if (action.type === 'CHANGE-PLAN') {
    const oldplan = state.plan;

    return { ...state, plan: !oldplan };
  }

  if (action.type === 'CHANGE-TYPE') {
    return { ...state, type: action.value };
  }

  if (action.type === 'CHANGE-ADD-ON') {
    const currentAddon = action.value;

    let newAddOns = [...state.addOns];

    console.log(currentAddon);
    console.log(newAddOns);

    newAddOns[currentAddon].active = !newAddOns[currentAddon].active;

    return { ...state, addOns: newAddOns };
  }

  return initialState;
};

export const FormContextProvider = (props) => {
  const [formState, dispatchFormAction] = useReducer(formReducer, initialState);

  const goBackHandler = () => {
    dispatchFormAction({ type: 'GO-BACK' });
  };
  const goNextHandler = () => {
    dispatchFormAction({ type: 'NEXT' });
  };

  const changePlanHandler = () => {
    dispatchFormAction({ type: 'CHANGE-PLAN' });
  };

  const changeTypeHandler = (value) => {
    dispatchFormAction({ type: 'CHANGE-TYPE', value: value });
  };

  const changeAddOnHandler = (value) => {
    dispatchFormAction({ type: 'CHANGE-ADD-ON', value: value });
  };

  const data = {
    formState,
    goBackHandler,
    goNextHandler,
    changePlanHandler,
    changeTypeHandler,
    changeAddOnHandler,
  };

  return (
    <formContext.Provider value={data}>{props.children}</formContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(formContext);
};
