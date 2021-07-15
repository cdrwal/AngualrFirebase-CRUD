import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: any

  constructor(private fireService: FireService) {
  }

  ngOnInit(): void {
    this.tasks$ = this.fireService.getTasks()

  }

}
