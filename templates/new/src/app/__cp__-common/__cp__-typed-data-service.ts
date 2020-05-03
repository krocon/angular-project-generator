import { BehaviorSubject } from 'rxjs';

export class __capcp__TypedDataService<T> {

  private readonly bhs: BehaviorSubject<T> = new BehaviorSubject<T>(null);
  valueChanges$ = this.bhs.asObservable();
  private value: T;

  constructor(
    private readonly key: string,
    private readonly defaultValue: T = null,
    private readonly equals: (x: T, y: T) => boolean =
      (x: T, y: T) => JSON.stringify(x) === JSON.stringify(y),
    private readonly clone: (x: T) => T = (x: T) => JSON.parse(JSON.stringify(x)),
    private readonly parse: (s: string) => T = (s: string) => JSON.parse(s) as T,
    private readonly stringify: (x: T) => string = (x: T) => JSON.stringify(x)
  ) {
    this.init();
  }

  init() {
    const item = localStorage.getItem(this.key);
    if (item) {
      this.value = this.parse(item);
    } else {
      this.value = this.defaultValue;
    }
    if (this.value) {
      this.next();
    }
  }

  update(nvObj: T) {
    if (!this.equals(nvObj, this.value)) {
      this.value = this.parse(this.stringify(nvObj));
      const nv = this.stringify(nvObj);
      localStorage.setItem(this.key, nv);
      this.next();
    }
  }

  getValue(): T {
    return this.value;
  }

  private next() {
    this.bhs.next(this.clone(this.value));
  }

}
