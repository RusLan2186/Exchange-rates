import React, { useState } from 'react';
import cl from './OtherCurrency.module.scss';

const OtherCurrency = ({ currencyList }) => {
  const [searchValue, setSearchValue] = useState('');

  const searchResult = currencyList.filter((item) =>
    item.cc.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className={cl.wrapper}>
      <div>
        <input
          className={cl.input}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type='text'
          placeholder='Search....'
        />
      </div>
      {searchResult.length > 0 ? (
        <div className={cl.container}>
          {searchResult.map((currency) => (
            <div className={cl.item} key={currency.cc}>
              <span className={cl.cc}> {currency.cc} </span>
              <span className={cl.rate}> {currency.rate}</span>
            </div>
          ))}
        </div>
      ) : (
        <h1 className={cl.not__found}> Currency not found</h1>
      )}
    </div>
  );
};

export default OtherCurrency;
