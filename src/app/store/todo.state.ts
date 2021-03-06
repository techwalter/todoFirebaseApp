import { State, Action, Selector, StateContext } from "@ngxs/store";
import { AddTodo, UpdateTodo, DeleteTodo, UpdateSingleTodo } from "./todo.actions";
import { Todo } from "./todo.model";
import * as _ from "lodash";
export interface TodoStateModel {
  todos: Todo[];
  filter: Array<Array<number>>;
}

@State<TodoStateModel>({
  name: "todo",
  defaults: {
    todos: [],
    filter: []
  }
})
export class TodoState {
  @Selector()
  public static getAllTodos(data: TodoStateModel) {
    return data.todos;
  }
  @Selector()
  public static getAllFilter(data: TodoStateModel) {
    return data.filter;
  }
  @Selector()
  public static getActiveTodos(data: TodoStateModel) {
    return data.todos.filter(todo => todo.completed === false);
  }
  @Selector()
  public static getCompletedTodos(data: TodoStateModel) {
    return data.todos.filter(todo => todo.completed === true);
  }

  @Action(AddTodo)
  public add(
    { getState, patchState }: StateContext<TodoStateModel>,
    { payload }: AddTodo
  ) {
    const state = getState();
    patchState({
      todos: [...state.todos, payload]
    });
  }

  @Action(UpdateTodo)
  public updateTodo(ctx: StateContext<TodoStateModel>) {
    const state = ctx.getState();
    ctx.patchState({
      todos: [...state.todos]
    });
  }
  @Action(UpdateSingleTodo)
  public updateSingleTodo(ctx: StateContext<TodoStateModel>, event: UpdateSingleTodo) {
    const state = ctx.getState();
    ctx.patchState({
      todos: state.todos.map(todo => {
        if (todo.title === event.payload.title) {
          return {
            ...todo,
            time: event.payload.time
          };
        } else {
          return {
            ...todo,
          };
        }
      })
    });
  }
  @Action(DeleteTodo)
  public deleteTodo(
    ctx: StateContext<TodoStateModel>,
    { payload }: DeleteTodo
  ) {
    ctx.patchState({
      todos: ctx.getState().todos.filter(todo => todo.id !== payload.id)
    });
  }
}
