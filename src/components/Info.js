import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './loader/Loader';

import { fetchThunkCurrency } from './redux/slices/correncyLoad';

const Info = () => {
  const dispatch = useDispatch();
  const { currencyList, error, isLoading } = useSelector((store) => store.currency);

  useEffect(() => {
    dispatch(fetchThunkCurrency());
  }, []);

  return (
    <div>
      {error && <h1> `You have an error ${error}` </h1>}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {currencyList

        .filter((item) => item.txt === 'Долар США' || item.txt === 'Євро' || item.txt === 'Злотий')
        .map((currency) => (
          <div key={currency.cc}>
            {currency.txt} {currency.rate} {currency.exchangedate}
          </div>
        ))}
    </div>
  );
};

export default Info;
