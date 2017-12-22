export default function addToLocal (todoList) {
    return {
        type: 'ADD_TO_LOCAL',
        payload: todoList
    };
}
