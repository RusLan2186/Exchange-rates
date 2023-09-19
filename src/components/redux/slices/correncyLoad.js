import { currencyFetching, currencyFetchingError, currencyFetchingSuccess } from './currencySlice';

export const fetchThunkCurrency = () => {
  return function (dispatch) {
    dispatch(currencyFetching());
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      // fetch('https://cdn.cur.su/api/latest.json')
      .then((response) => response.json())
      .then((json) => dispatch(currencyFetchingSuccess(json)))
      .catch((e) => dispatch(currencyFetchingError(e.message)));
  };
};
