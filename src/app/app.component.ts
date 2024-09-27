import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items = [
    {
      id: '001',
      content: 'content',
    },
    {
      id: '002',
      content: 'content 2',
    },
  ];
  content = 'new content 2024';
  title = 'angular-2024';
  isArray(obj: any) {
    return Array.isArray(obj);
  }
  addItem() {
    this.items.push({
      id: new Date().getTime().toString(),
      content: this.content,
    });
    this.content = '';
  }
  delete(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
