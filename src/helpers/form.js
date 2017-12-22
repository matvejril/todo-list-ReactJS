export function dataConvertToForm (todo) {
    todo.dateDeadline = new Date(todo.dateDeadline).toISOString().substr(0, 10);
    return todo
}
