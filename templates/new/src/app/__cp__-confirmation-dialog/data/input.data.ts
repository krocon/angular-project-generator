export class InputData {
  constructor(
    public key: string,
    public label: string,
    public color = '',
    public clazz = '',
    public type = 'text',
    public inputValue: any = '',
  ) {
  }
}
