import { Component } from '@angular/core';

// Component imports:
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TodosComponent],
  providers: [TodoService]
})

export class AppComponent {
  
}
