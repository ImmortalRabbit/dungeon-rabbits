import { Observable } from "./observable";

export interface Player {
  readonly name: string;
  readonly position: Position;
}

export enum PlayerStatus {
  MOVING,
  STANDING,
}

// export class PlayerService {
//   readonly players = new Observable<Player[]>([]);
//   readonly playerStatus = new Observable(PlayerStatus.STANDING);

//   addPlayer(name: string){
//     this.players.set([...this.players.get(), { name, position: ])
//   }
// }

// export class TodoService {
//   readonly todos = new Observable<Todo[]>([]);
//   readonly visibilityFilter = new Observable(VisibilityFilter.SHOW_ALL);

//   addTodo(text: string) {
//     this.todos.set([...this.todos.get(), { text, completed: false }]);
//   }

//   toggleTodo(index: number) {
//     this.todos.set(
//       this.todos
//         .get()
//         .map((todo, i) =>
//           i === index ? { text: todo.text, completed: !todo.completed } : todo
//         )
//     );
//   }

//   setVisibilityFilter(filter: VisibilityFilter) {
//     this.visibilityFilter.set(filter);
//   }
// }
