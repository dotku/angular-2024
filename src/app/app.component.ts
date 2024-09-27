import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
      title: 'content',
    },
    {
      id: '002',
      title: 'content 2',
    },
  ];
  content = 'new content 2024';
  title = 'angular-2024';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchTodos();
  }
  fetchTodos(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    this.http.get<any[]>(apiUrl).subscribe({
      next: (data) => {
        this.items = data.filter((_item, idx) => idx < 10);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
  isArray(obj: any) {
    return Array.isArray(obj);
  }
  addItem() {
    this.items.unshift({
      id: new Date().getTime().toString(),
      title: this.content,
    });
    this.content = '';
  }
  delete(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
