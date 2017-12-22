const LIST_NAME = 'test-app_todo-items';

export function readFromLocalStorage() {
    const str = localStorage.getItem(LIST_NAME);
    return JSON.parse(str) || [];
}

export function writeToLocalStorage(list) {
    localStorage.setItem(LIST_NAME, JSON.stringify(list));
}
