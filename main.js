let username = prompt("Enter Username: ","Ali")
let DATA = []

// Auto focus on input box
document.getElementById("input").autofocus;

function render() {
  // Take input from input box
  let input = document.getElementById("input").value
  let draftTextVal = "";

  // check if input box is not empty
  if(input != "") {
    // if not empty then add the text of input box to DATA Array
    DATA.push(input)
    localStorage.draftText = "";
  } else {
    draftTextVal = localStorage.draftText
  }

  // empty the container (remove all messages) and then refresh all messages
  document.getElementById('messages_container').innerHTML = ""

  // Show All Messages on page, run a loop on DATA Array
  for(let i in DATA) {
    // i is index number every time.... starting from 0
    document.getElementById('messages_container').innerHTML +=
    "<li style='list-style: none' id="+i+" class='msg'>" + username + " : " + DATA[i] +
    " <button onclick='edit_msg(this)'>Edit</button>"+
    " <button onclick='delete_msg(this)'>Delete</button></li>"
  }
  // Empty the input box
  document.getElementById("input").value = ""
  save()
}

function save() {
  // save our messages in localStorage
  localStorage.messages = JSON.stringify(DATA) // convert Array to string
}

function load() {
  // load all messages from localStorage
  DATA = JSON.parse(localStorage.messages)
  render()
  document.getElementById("input").value = localStorage.draftText
  console.log(DATA)
}
load()

function edit_msg(obj) {
  DATA[obj.parentNode.id] = prompt("Update Message")
  render()
}

function delete_msg(obj) {
  DATA.splice(obj.parentNode.id,1)
  render()
}

function deleteAll() {
  DATA = []
  render()
}

// This function save the text as user type in input box
function saveDraft() {
  let input = document.getElementById("input").value
  localStorage.draftText = input
}
