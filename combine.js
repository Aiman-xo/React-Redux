const { createStore, combineReducers } = window.Redux;

function Todo(prev = { list: [] }, action) {
    switch (action.type) {
        case 'Add-to-do':
            return {
                ...prev,
                list: [...prev.list, action.payLoad]

            }
        default:
            return prev
    }
}

function DarkMode(prev = 'light', action) {
    switch (action.type) {
        case 'change-mode':
            return prev === 'light' ? "dark" : "light"
        default:
            return prev
    }
}
const rootRedu = combineReducers({
    todo: Todo,
    Mode: DarkMode
})
const store = createStore(rootRedu);

store.subscribe(() => {
    const state = store.getState();

    const ul = document.getElementById("addLists");
    ul.innerHTML = "";

    state.todo.list.map((val) => {
        const li = document.createElement("li");
        li.innerText = val;
        ul.style.color = state.Mode === "dark" ? "white" : "black"

        ul.appendChild(li)
    })
    document.body.style.backgroundColor = state.Mode === "dark" ? "black" : "white"

})



function AllactionCreator(type, val) {
    return {
        type: type,
        payLoad: val
    }
}

document.getElementById("task").onchange = (e) => {
    store.dispatch(AllactionCreator("Add-to-do", e.target.value))
}

document.getElementById("toggle").addEventListener("click", () => {
    store.dispatch(AllactionCreator("change-mode", "light"))
})

