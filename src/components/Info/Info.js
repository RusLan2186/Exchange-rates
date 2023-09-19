import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/Loader';
import OtherCurrency from './OtherCurrency';
import cl from './Info.module.scss';

import { fetchThunkCurrency } from '../redux/slices/correncyLoad';

const Info = () => {
  const dispatch = useDispatch();
  const { currencyList, error, isLoading } = useSelector((store) => store.currency);
  const [otherCurrency, setOtherCurrency] = useState(false);
  const data = Date();

  useEffect(() => {
    dispatch(fetchThunkCurrency());
  }, []);

  return (
    <div>
      <h1>hello</h1>
      {data}
      <div className={cl.container}>
        {error && <h1> `You have an error ${error}` </h1>}
        {isLoading && (
          <div>
            <Loader />
          </div>
        )}
        <button onClick={() => setOtherCurrency(!otherCurrency)}>Show other currency</button>
        {currencyList
          .filter(
            (item) => item.txt === 'Долар США' || item.txt === 'Євро' || item.txt === 'Злотий',
          )
          .map((currency) => (
            <div key={currency.cc}>
              {currency.cc} {currency.rate}
            </div>
          ))}
      </div>
      {otherCurrency && <OtherCurrency currencyList={currencyList} />}
    </div>
  );
};

export default Info;
