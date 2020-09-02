var list = [];

const addNew = () => {
    setList();
    setTableDiv();
    setTableBody();
};

//create 'table' content
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
    if (list[0] == null) {
        tableTask += `
        <tr>
            <td class="table-index"></td>
            <td class="table-message">
                <p>&#10004; You have nothing planned for today!<br>
                <br>&#9728; Soak up a sun for a tan &#127958;<br>
                &#10052; Or take advantage of Alaskan snow to make a snowman &#9731;<br></p>
            </td>
            <td></td>
            <td></td>
        </tr>
        `
    }
    else {
        for (let i = 0; i<list.length; i++) {
            tableTask += `
                <tr>
                    <td class="table-index">${i+1}</td>
                    <td class="table-message">${list[i]}</td>
                    <td><a class="edit-icon" onclick="editItem(${i});">&#9999;</a></td>
                    <td><a class="remove-icon" onclick="removeItem(${i});">&#128465;</a></td>
                </tr>
            `
        }
    }

    tableBody.innerHTML = tableTask;
};


const setList = () => {
    var message = getToDoMessage();
    list.push(message);
};

const editItem = (i) => {
    list[i] = "I was changed";
    setTableBody();
}

const removeItem = (i) => {
    list.splice(i,1);
    setTableBody();
}


//Query Selectors
const getTableDivElement = () => document.querySelector("#table-list");
const getTitleFormDivElement = () => document.querySelector("#title-form");
const getToDoInput = () => document.querySelector("#toDo-message");
const getToDoMessage = () => document.querySelector("#toDo-message").value;
const getEditModal = () => document.querySelector("#textEditModal");