import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

type Converter<R, T> = (resp: R) => T;

function handleHttpObservable<ResponseData>(
  observable: Observable<AxiosResponse<ResponseData>>
): Observable<ResponseData>;

function handleHttpObservable<ResponseData, Result>(
  observable: Observable<AxiosResponse<ResponseData>>,
  converter: Converter<ResponseData, Result>
): Observable<Result>;

function handleHttpObservable<ResponseData, Result>(
  observable: Observable<AxiosResponse<ResponseData>>,
  converter?: Converter<ResponseData, Result>,
): Observable<ResponseData | Result> {
  return observable.pipe(
    map(response => {
      if (converter) {
        return converter(response.data);
      }
      return response.data;
    }),
  );
}

export { handleHttpObservable };
