import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { EnlacesComponent } from '../enlaces/enlaces.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, EnlacesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;


  // Super super util es literalmente usar DOM
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > 50;
    console.log(this.isScrolled);
  }
}