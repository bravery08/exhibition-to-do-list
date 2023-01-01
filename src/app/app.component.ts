import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exhibition To-Do List';

  deleteTask(index: number) {
    this.items.splice(index, 1);
  }

  public items: { description: string; checked: boolean }[] = [];
  public newTask!: string;

  addItem() {
    if (this.newTask == '') {    
    }
    else {
      this.items.push({ description: this.newTask, checked: false });
      this.newTask = '';
    }
  }
}
