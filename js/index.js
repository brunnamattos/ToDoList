var list = [];


const addNew = () => {
    setTableDiv();
    setTableBody();
    setList();
};

//create 'table' body
const setTableDiv = () => {
    const titleFormElement = getTitleFormDivElement();
    const tableElement = getTableDivElement();
    titleFormElement.innerHTML = `<h1>Your to do list!</h1>`;
    tableElement.innerHTML = `
        <table class="table table-striped table-borderless">
            <thead id="tableHead" class="thead-dark">
                <tr>
                    <th>#</th>
                    <th>To do</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="tableBody">
                
            </tbody>
        </table>
    `
};

const setTableBody = () => {
    let tableTask = "";
    for (let i = 0; i<list.length; i++) {
        console.log(list[i]);
        tableTask += `
            <tr>
                <td class="table-name">${i+1}</td>
                <td class="table-url">${list[i]}</td>
                <td><a class="edit-icon" onclick="editItem(${i});">&#9999;</a></td>
                <td><a class="remove-icon" onclick="removeItem(${i});">&#128465;</a></td>
            </tr>
        `
    }

    tableBody.innerHTML = tableTask;
};


const setList = () => {
    var message = getToDoMessage();
    list.push(message);
};

const editItem = (i) => {
    list[i] = "eu fui alterado";
    setTableBody();
}

// const removeItem = (i) => {
    
// }

//Query Selectors
const getTableDivElement = () => document.querySelector("#table-list");
const getTitleFormDivElement = () => document.querySelector("#title-form");
const getToDoInput = () => document.querySelector("#toDo-message");
const getToDoMessage = () => document.querySelector("#toDo-message").value;