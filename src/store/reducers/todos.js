//Estado inicial do state global do redux
const INITIAL_STATE = [
  {id: 1, text: 'Fazer café', completed: false},
  {id: 2, text: 'Estudar React Native', completed: true},
  {id: 3, text: 'Estudar Redux', completed: false},
];

// Actions:

// Adicionar um todo
// Marcar todo como completo

// { type: 'ADD_TODO', text: 'Novo todo' }
// { type: 'MARK_AS_COMPLETED', id: 3 }

//reducers:
export default function todos(state = INITIAL_STATE, action) {
  const data = action.payload;
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: Math.random(), text: data.text, completed: false}];
    case 'MARK_AS_COMPLETED':
      return state.map(todo =>
        todo.id === data.id ? {...todo, completed: !todo.completed} : todo,
      );
    default:
      return state;
  }
}
