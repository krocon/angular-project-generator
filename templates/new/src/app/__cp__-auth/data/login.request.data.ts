export class LoginRequestData {

  constructor(
    public username: string = '',
    public password: string = '',
    public remember: boolean = true) {
  }
}
