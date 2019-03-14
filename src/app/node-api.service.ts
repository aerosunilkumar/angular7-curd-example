import { ApiServiceService } from "./api-service.service";
import { Injectable } from "@angular/core";
import { Todo } from "src/models/todo";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class NodeApiService {
  constructor(public apiService: ApiServiceService) {}

  getTodos(): Observable<Todo[]> {
    return this.apiService.getRequest<Todo>("list");
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.apiService.postRequest<Todo>("create", todo);
  }

  editTodo(todo: Todo): Observable<Todo> {
    return this.apiService.putRequest<Todo>("edit", todo);
  }

  GetTodoById(id): Observable<Todo> {
    return this.apiService.getRequestById<Todo>(`GetById/${id}`);
  }

  deleteTodo(id): Observable<Todo> {
    return this.apiService.deleteRequest<Todo>(`delete/${id}`);
  }
}
