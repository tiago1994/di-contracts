import { TodoList } from "../../../domain/usecases";
import { HttpClient } from "../../protocols/http/http-client";

export class RemoteTodos implements TodoList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<TodoList.Model[]>
  ) {}

  async list(): Promise<TodoList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'GET'
    })

    return httpResponse.body || []
  }
}