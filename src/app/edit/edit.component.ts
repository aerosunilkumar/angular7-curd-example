import { ApiServiceService } from "./../api-service.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NodeApiService } from "../node-api.service";
import { Todo } from "src/models/todo";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  todoForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private nodeApiService: NodeApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      name: ["", Validators.required]
    });
    this.nodeApiService.GetTodoById(1).subscribe(
      (data: Todo) => {
        this.todoForm.controls.name.setValue(data.name);
      },
      error => {}
    );
  }

  get f() {
    return this.todoForm.controls;
  }

  onSubmit() {
    this.nodeApiService.editTodo({ ...this.todoForm.value, id: 1 }).subscribe(
      (data: Todo) => {
        this.router.navigateByUrl("/list");
      },
      error => {}
    );
  }
}
