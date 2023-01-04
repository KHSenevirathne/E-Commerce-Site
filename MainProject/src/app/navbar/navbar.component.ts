import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showSide_Bar = false;
  show_Account = false;

  constructor(private route:ActivatedRoute, private router:Router){ }

  go_Account():void {
    this.router.navigate(['/account']);
  }

  go_Ad_Post():void {
    this.router.navigate(['/post-ad']);
  }
}