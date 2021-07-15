import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public tasks: any = []

  constructor(private fireService: FireService) {
    
    // Load Tasks Into Array
    this.fireService.getTasks().subscribe(a => {
      this.tasks = []
      a.forEach(b => {
        let item: any = b.payload.doc.data();
        item.id = b.payload.doc.id;
        this.tasks.push(item)
      })
    })

  }

  ngOnInit(): void { }

  locCompleteTask(id:any) {
    this.fireService.completeTask(id)
  }
}
