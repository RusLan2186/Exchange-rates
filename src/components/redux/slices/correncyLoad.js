import { currencyFetching, currencyFetchingError, currencyFetchingSuccess } from './currencySlice';

export const fetchThunkCurrency = () => {
  return function (dispatch) {
    dispatch(currencyFetching());
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then((response) => response.json())
      .then((json) => dispatch(currencyFetchingSuccess(json)))
      .catch((e) => dispatch(currencyFetchingError(e.message)));
  };
};
