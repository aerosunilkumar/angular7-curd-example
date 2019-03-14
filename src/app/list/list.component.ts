import { Todo } from "./../../models/todo";
import { Component, OnInit } from "@angular/core";
import { NodeApiService } from "../node-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(
    protected nodeApiService: NodeApiService,
    private router: Router
  ) {}

  onDelete(id) {
    this.nodeApiService.deleteTodo(id).subscribe(
      (data: Todo) => {
        this.loadDataFromServer();
      },
      error => {}
    );
  }

  loadDataFromServer() {
    this.nodeApiService.getTodos().subscribe(
      (data: Todo[]) => {
        this.todos = data;
      },
      error => {}
    );
  }

  ngOnInit() {
    this.loadDataFromServer();
  }
}
