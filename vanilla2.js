const { createStore } = window.Redux;

function redFun(prev = { name: '' }, action) {
    switch (action.type) {
        case 'gettingName':
            return {
                ...prev,
                name: action.payLoad
            }
    }
    return prev
}

const store = createStore(redFun);
document.getElementById("name").onchange = (e) => {
    store.dispatch({
        type: 'gettingName',
        payLoad: e.target.value
    })
}
document.getElementById("getName").onclick = () => {
    document.getElementById("res").innerText = store.getState().name;
}

