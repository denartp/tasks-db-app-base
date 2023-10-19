import { Component, OnInit } from '@angular/core';
import {Task} from "../../services/sqlite/tasks/models/task";

@Component({
  selector: 'app-archived-tasks',
  templateUrl: './archived-tasks.page.html',
  styleUrls: ['./archived-tasks.page.scss'],
})
export class ArchivedTasksPage implements OnInit {

  tasks: Task[] = [];
  constructor() { }

  ngOnInit() {
  }

}
