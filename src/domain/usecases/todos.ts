import { TodosModel } from "../models";

export interface TodoList {
  list: () => Promise<TodoList.Model[]>;
}

export namespace TodoList {
  export type Model = TodosModel;
}
