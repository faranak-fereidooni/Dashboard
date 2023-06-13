import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentIcon: string = 'dark_mode';
  isSpinning: boolean = false;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @Output() toggleThemeForMe: EventEmitter<any> = new EventEmitter();

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  toggleTheme() {
    this.isSpinning = true; 
    this.toggleThemeForMe.emit();
    // for change icon in darkMode and lightMode
    setTimeout(() => {
    if (this.currentIcon === 'dark_mode') {
      this.currentIcon = 'light_mode';
    } else {
      this.currentIcon = 'dark_mode';
    }
    this.isSpinning = false; 
  }, 500);
}}
