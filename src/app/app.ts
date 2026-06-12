import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [CommonModule , MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'aishwaryajadhav';
  isDarkMode = true;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
}
