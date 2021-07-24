import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public tasks: any = []

  winDoc: any = document

  constructor(private fireService: FireService) { }

  ngOnInit(): void {
    this.fireService.getTasks().subscribe((obsPayload: any) => {
      this.tasks = obsPayload;
    })
  }

  locCompleteTask(id: any) {
    this.fireService.completeTask(id)
  }

  locEditTask(id: any, task: any) {
    this.fireService.editTask(id, task)
  }

}
