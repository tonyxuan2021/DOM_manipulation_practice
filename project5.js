{
  /* <div class="container">
<div id="add-task-container">
  <input type="text" placeholder="Enter Task" id="input-task" />
  <button id="add-task"><i class="fa-solid fa-plus"></i></button>
</div>

<div id="task-container"></div>
</div> */
}

// selector

const taskContainer = document.querySelector("#task-container");
const userInput = document.querySelector("#input-task");
const addBtn = document.querySelector("#add-task");

// event listener

addBtn.addEventListener("click", addItem);
taskContainer.addEventListener("click", deleteItem);

// functions

{
  /* <div id="task-container">
<ul class="task-list-container">
  <div class="task-item-container">
    <li class="task-item">Hey</li>
    <div class="btns">
      <p class="update-btn">+</p>
      <p class="delete-btn">-</p>
    </div>
  </div>
</ul>
</div> */
}

function addItem() {
  const itemContainer = document.createElement("ul");
  itemContainer.classList.add("task-list-container");
  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item-container");
  itemContainer.append(taskItemContainer);
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  taskItemContainer.append(taskItem);
  taskItem.innerText = userInput.value;

  // create btns
  const btns = document.createElement("div");
  btns.classList.add("btns");
  taskItemContainer.append(btns);

  const updateBtn = document.createElement("button");
  updateBtn.classList.add("update-btn");
  updateBtn.innerText = "+";
  btns.append(updateBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "-";
  btns.append(deleteBtn);

  taskContainer.append(itemContainer);

  userInput.value = "";
}

function deleteItem(e) {
  // console.log(e.target.classList[0]);
  let targetBtn = e.target;

  if (targetBtn.classList[0] === "delete-btn") {
    targetBtn.parentElement.parentElement.remove();
    //   }
  }

  if (targetBtn.classList[0] === "update-btn") {
    targetBtn.parentElement.parentElement.classList.toggle("complete");
    //   }
  }
}
