var list = [];


const addNew = () => {
    setTableDiv();
    setList();
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

const setList = () => {
    var message = getToDoMessage();
    list.push(message);
}

//Query Selectors
const getTableDivElement = () => document.querySelector("#table-list");
const getTitleFormDivElement = () => document.querySelector("#title-form");
const getToDoInput = () => document.querySelector("#toDo-message");
const getToDoMessage = () => document.querySelector("#toDo-message").value;