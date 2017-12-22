export default function filterTodo (filterValue) {
    return {
        type: 'FILTER_TODO',
        payload: filterValue
    }
}
