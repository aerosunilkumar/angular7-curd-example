import { NodeApiService } from "./../node-api.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Todo } from "src/models/todo";
import { Router } from "@angular/router";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
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
  }

  get f() {
    return this.todoForm.controls;
  }

  onSubmit() {
    this.nodeApiService.createTodo(this.todoForm.value).subscribe(
      (data: Todo) => {
        this.router.navigateByUrl("/list");
      },
      error => {}
    );
  }
}
