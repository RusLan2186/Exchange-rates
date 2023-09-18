import React from 'react';

const OtherCurrency = ({ currencyList }) => {
  return (
    <div>
      {currencyList.map((currency) => (
        <div key={currency.cc}>
          {currency.txt} {currency.rate} {currency.exchangedate}
        </div>
      ))}
    </div>
  );
};

export default OtherCurrency;
