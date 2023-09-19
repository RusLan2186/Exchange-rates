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
  const date = Date();

  useEffect(() => {
    dispatch(fetchThunkCurrency());
  }, []);
  console.log(currencyList);
  return (
    <div>
      <div className={cl.date}> {date}</div>
      <div className={cl.container}>
        {error && <h1> `You have an error ${error}` </h1>}
        {isLoading && (
          <div>
            <Loader />
          </div>
        )}

        {currencyList
          .filter(
            (item) => item.txt === 'Долар США' || item.txt === 'Євро' || item.txt === 'Злотий',
          )
          .map((currency) => (
            <div className={cl.item} key={currency.cc}>
              <span className={cl.cc}> {currency.cc}</span>
              <span className={cl.rate}> {currency.rate}</span>
            </div>
          ))}
        <button className={cl.button} onClick={() => setOtherCurrency(!otherCurrency)}>
          Show other currency
        </button>
      </div>
      {otherCurrency && <OtherCurrency currencyList={currencyList} />}
    </div>
  );
};

export default Info;
