import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: '[app-navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getCurrentUserStatus()
      .subscribe((user) => {
        // console.log(user)
        this.user = user
      })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
