import { dataConvertToForm } from "../helpers/form";

const initialState = {
    list: [],
    selected: null,
    filterValue: ''
};

export default function todoList(state = initialState, action) {

    switch (action.type) {
        case "ADD_TO_LOCAL": {
            const todos = action.payload;
            return {
                ...state,
                ...todos
            };
        }
        case "ADD_TODO": {
            const list = [...state.list];
            list.push(action.payload);
            return {
                ...state,
                list,
            };
        }

        case "SELECT_TODO": {
            const selected = dataConvertToForm({ ...state.list.find((todo) => todo.id === action.payload) });
            return {
                ...state,
                selected
            };
        }

        case "UPDATE_TODO": {
            const list = [...state.list];
            const selected = null;
            list.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.name = action.payload.name;
                    todo.description = action.payload.description;
                    todo.importance = action.payload.importance;
                    todo.dateDeadline = action.payload.dateDeadline;
                    todo.datePerformance = action.payload.datePerformance;
                    todo.status = action.payload.status;
                }
            });
            return {
                ...state,
                list,
                selected
            };
        }

        case "REMOVE_TODO": {
            const list = [...state.list].filter((todo) => todo.id !== action.payload);
            return {
                ...state,
                list
            }
        }

        case "PERFORMANCE_TODO": {
            const list = state.list.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                if (todo.status === "В процессе") {
                    todo.status = "Выполнено";
                    todo.datePerformance = Date.now();
                    if (todo.datePerformance < todo.dateDeadline) {
                        todo.status = "Выполнено";
                    } else {
                        todo.status = "Выполнено c опозданием";
                    }
                } else {
                    todo.status = "В процессе";
                    todo.datePerformance = '-';
                }
                return todo;
            });
            return {
                ...state,
                list
            };
        }

        case "FILTER_TODO": {
            const filterValue = action.payload;
            return {
                ...state,
                filterValue
            };
        }

        default: {
            return state
        }
    }
}
