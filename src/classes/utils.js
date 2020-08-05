import axios from "axios";
import useSWR from "swr";

export function currencyFormat(number, prefix = "$", tofixed = 0) {
  return tofixed
    ? prefix + number.toFixed(tofixed).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    : prefix + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function useCancellableSWR(key, swrOptions = {}) {
  const source = axios.CancelToken.source();

  return [
    useSWR(
      key,
      url =>
        axios.get(url, { cancelToken: source.token }).then(res => res.data),
      {
        ...swrOptions
      }
    ),
    source
  ];
}
//
// // usage:
// const [{ data }, cancelFn] = useCancellableSWR('/endpoint');
//
// cancelFn.cancel()
