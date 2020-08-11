const addNew = () => {
    setTableDiv();
    setTableDiv();
    createList();
}

//create 'table' body
const setTableDiv = () => {
    const titleFormElement = getTitleFormDivElement();
    const tableElement = getTableDivElement();
    titleFormElement.innerHTML = `<h1>Your to do list!</h1>`;
    tableElement.innerHTML = `
        <table>
            <tr>
                <th>Nº</th>
                <th>To do</th>
            </tr>
        </table>
    `
}

const createList = () => {
    var list = []
    list = list.push(getToDoMessage());
}


//Query Selectors
const getTableDivElement = () => document.querySelector("#table-list");
const getTitleFormDivElement = () => document.querySelector("#title-form");
const getToDoMessage = () => document.querySelector("#toDo-message").value;
console.log(getToDoMessage());