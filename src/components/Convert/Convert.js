import React from 'react';
import { useSelector } from 'react-redux';
import cl from './Convert.module.scss';

const Convert = () => {
  const defaultCorrency = ['ua', 'usa', 'eur', 'pln'];
  const currencyList = useSelector((store) => store.currency.currencyList);

  return (
    <div className={cl.wrapper}>
      <h1 className={cl.title}>Convert</h1>
      <ul className={cl.list}>
        {defaultCorrency.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {/* <input value={value} onChange={(e) => setValue(e.target.value)} type='number' /> */}
    </div>
  );
};

export default Convert;
