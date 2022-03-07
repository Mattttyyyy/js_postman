// https://jsonplaceholder.typicode.com/todos


// 3. 
fetch(`https://jsonplaceholder.typicode.com/todos`)
.then( data => data.json() )
.then( data => {

    
    // 4. 
    data.map(element => {
        
        console.log(element.title)
    })
})

// 5.
fetch(`https://jsonplaceholder.typicode.com/todos/1`)
.then(response => response.json())
.then(response => {
    console.log(response)
    //6.
    console.log(`The item `+response.title+` on the list has a status of `+response.completed)
})


//7. 
fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "New To-do",
        completed: false,
        userId: 1
    })
})
.then( response => response.json() )
.then( response => {
    console.log(response)
})

//8. 
fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Updated To-do",
            completed: true,
            userId: 1
        })
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })

//9.

fetch(`https://jsonplaceholder.typicode.com/posts/4`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "new-title",
        description: "nondescript",
        status: "",
        date_completed: "",
        userId: 4
    })
})
.then( data => data.json())
.then(data => {
    console.log(data)
})

//10.
fetch(`https://jsonplaceholder.typicode.com/posts/201`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        completed: true
    })
})
.then( data => data.json())
.then(data => {
    console.log(data)
})


//11. 
fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
    method: "PATCH",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        status: "complete",
        date: "2022-03-07",
        completed: true
    })
})
.then(res => res.json())
.then(res => {
    console.log(res)
})

//12.

//solution 12

fetch(`https://jsonplaceholder.typicode.com/posts/200`, {
    method: "DELETE"
})
