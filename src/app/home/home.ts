import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule , MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
protected title = 'aishwaryajadhav';
  isDarkMode = true;
  menuOpen = false;
  viewMore = false
  constructor(
    private route : Router
  ){}


  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  menuIcon(){
    this.menuOpen = !this.menuOpen
  }
  aboutme(){
    this.viewMore = !this.viewMore
  }
  redirectProjects(){
    this.route.navigate(['/myprojects'])
  }
}
