import { TodoList } from '../../../domain/usecases'
import { RemoteTodos } from '../../../data/usecases/todos/remote-todos'
import { makeApiUrl, makeAxiosHttpClient } from '../http'

export const makeRemoteTodos = (): TodoList => new RemoteTodos(makeApiUrl('/todos'), makeAxiosHttpClient())