import { distinctUntilChanged } from 'rxjs/operators';

export function distinctUntilValueChange() {

  return distinctUntilChanged((x, y) => {
      if (!x || !y) {
        return false;
      }
      return (JSON.stringify(x) === JSON.stringify(y));
    }
  );

}
