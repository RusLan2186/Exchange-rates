import { currencyFetching, currencyFetchingError, currencyFetchingSuccess } from './currencySlice';

export const fetchThunkCurrency = () => {
  return function (dispatch) {
    dispatch(currencyFetching());
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      // fetch('http://apilayer.net/api/live?access_key=b1bba10acdf8ee9e85fc658ebe30fe2')
      .then((response) => response.json())
      .then((json) => dispatch(currencyFetchingSuccess(json)))
      .catch((e) => dispatch(currencyFetchingError(e.message)));
  };
};
