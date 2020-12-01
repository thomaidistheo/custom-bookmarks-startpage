const newBookmarkBtn = document.querySelector(".new-bookmark-btn") // input button
const doneBtn = document.querySelector(".new-bookmark-btn-done") // done buton after input
const newBookmarkForm = document.querySelector(".new-bookmark-container") // input container
const bookmarkInput = document.querySelector("#newInput") // input
const bookmarkList = document.querySelector("#bookmarkList") // ul

let nodeArray = []

// New bookmark input visibility
newBookmarkBtn.addEventListener('click', () => {    
    newBookmarkForm.classList.toggle("not-visible")
    doneBtn.classList.toggle("not-visible")
    newBookmarkBtn.classList.add("not-visible")
})

doneBtn.addEventListener('click', () => {
    newBookmarkForm.classList.toggle("not-visible")
    newBookmarkBtn.classList.remove("not-visible")
    doneBtn.classList.toggle("not-visible")

    bookmarkInput.value = ""
})

const clear = document.querySelector("#clear")
clear.addEventListener("click", function() {
    localStorage.clear()
    location.reload()
})

//When user submits run this
handleSubmit = () => {
    event.preventDefault()
    createLi()
    storeItemList()
}

// Create visual list item when a user inputs one
createLi = () => {
    const node = document.createElement("li")
    bookmarkList.appendChild(node)
    
    const link = document.createElement("a")
    link.setAttribute("href", `https://${bookmarkInput.value}.com`)
    link.innerHTML = bookmarkInput.value
    node.appendChild(link)
    nodeArray.push(link.innerHTML)
}

// Store the new list item in an array 
storeItemList = () => {
    localStorage["nodeArray"] = JSON.stringify(nodeArray)
}

// Display the stored items from the array
showData = () => {
    // Retrieve the items
    if (nodeArray != []) {
        nodeArray = JSON.parse(localStorage["nodeArray"])
    }
    const stored_data = JSON.parse(localStorage["nodeArray"])
    console.log(stored_data)
    // For each item retrieved create a new li element
    // then insert the item's data to the li's innerHTML
    // then append the whole thing to the ul 
    for(let item in stored_data){
            const newLi = document.createElement("li")
            bookmarkList.appendChild(newLi)
            
            const showLink = document.createElement("a")
            showLink.setAttribute("href", `http://${stored_data[item]}.com`)
            showLink.innerHTML = stored_data[item]
            newLi.appendChild(showLink) 
        }
    }
    
showData()



