import { Component, OnInit } from '@angular/core';
import { FireService } from "src/app/services/fire.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  title: any
  date: any

  constructor(private fireService: FireService) { }

  ngOnInit(): void {
  }

  locAddTask() {
    this.fireService.addTask({title: this.title, date: this.date})
    this.title = this.date = ''
  }

}
