import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IUser} from '../../models/iuser';
import {UserService} from '../../service/user.service';
import {TokenStorageService} from '../../service/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMess = '';
  roles: string[] = [];
  account: IUser;
  myGroup: FormGroup;
  returnUrl: string;

  constructor(private userService: UserService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams[this.returnUrl] || '/stores/1/';
  }

  onSubmit() {
    this.userService.login(this.form)
      .subscribe(
        data => {
          // login successful so redirect to return url
          this.router.navigateByUrl( this.returnUrl);
          this.tokenStorage.saveToken(data.token);
          console.log(data.token);
          this.tokenStorage.saveUserId(data.id);
          console.log(data);
          this.tokenStorage.saveStatusWhenUserLogged('logged');
          this.isLoginFailed = false;
          this.isLoggedIn = true;
        },
        error => {
          // login failed so display error
          this.errorMess = error.error.message;
          this.isLoginFailed = true;
        });
  }

}
