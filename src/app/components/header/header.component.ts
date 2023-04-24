import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSideNavVisible: boolean = false;

  toggleSideNav() {
    console.log(this.isSideNavVisible);
    this.isSideNavVisible = !this.isSideNavVisible;
  }
}
