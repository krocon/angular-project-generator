import { Component, OnInit } from '@angular/core';
import { __capcp__AuthService } from "../service/__cp__-auth.service";

@Component({
  template: ``
})
export class __capcp__AuthLogoutComponent implements OnInit {

  constructor(
    public authService: __capcp__AuthService,
  ) {
  }

  ngOnInit() {
    this.authService.logout();
  }
}
