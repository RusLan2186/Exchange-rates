import React, { useState } from 'react';

const OtherCurrency = ({ currencyList }) => {
  const [searchValue, setSearchValue] = useState('');

  const searchResult = currencyList.filter((item) =>
    item.cc.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div>
      <div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type='text'
          placeholder='Search....'
        />
      </div>
      {searchResult.map((currency) => (
        <div key={currency.cc}>
          {currency.cc} {currency.rate}
        </div>
      ))}
    </div>
  );
};

export default OtherCurrency;
