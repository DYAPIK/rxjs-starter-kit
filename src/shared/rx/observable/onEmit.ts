import { Observable } from 'rxjs';

export function onEmit<T>(observable$: Observable<T>, onSuccess: (data: T) => void, onError?: (error: any) => void) {
  const subscription = observable$.subscribe(
    data => {
      onSuccess(data);
      subscription.unsubscribe();
    },
    error => {
      onError?.(error);
    },
  );
}
