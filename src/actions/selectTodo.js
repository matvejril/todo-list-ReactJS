export default function selectTodo (id) {
    return {
        type: 'SELECT_TODO',
        payload: id
    }
}
