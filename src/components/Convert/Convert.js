import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cl from './Convert.module.scss';

const Convert = ({ currency, onChangeCurrency }) => {
  const defaultCorrency = ['ua', 'usd', 'eur', 'pln'];
  //   const currencyList = useSelector((store) => store.currency.currencyList);
  //   const [fromCurrency, setFromCurrency] = useState('UA');

  return (
    <div className={cl.wrapper}>
      <ul className={cl.list}>
        {defaultCorrency.map((cur, i) => (
          <li
            onClick={() => onChangeCurrency(i)}
            className={currency === i ? cl.itemLi : cl.itemActive}
            key={cur}
          >
            {cur}
          </li>
        ))}
      </ul>
      {/* <input value={value} onChange={(e) => setValue(e.target.value)} type='number' /> */}
    </div>
  );
};

export default Convert;
