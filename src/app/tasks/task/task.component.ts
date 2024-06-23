import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import {CardComponent} from "../../shared/card/card.component";
import {TasksService} from "../../services/tasks.services";
import {Task} from "../../model/task.model";


@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
