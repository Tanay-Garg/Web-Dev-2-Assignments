const text= document.querySelector(".Events>h2")
function Click(){
    const newelement= document.createElement("div")
    newelement.id= "card1"
    const heading= document.createElement("h1")

    heading.textContent= document.getElementById("title").value
    
    const date= document.createElement("p")
    date.textContent= document.getElementById("date").value

    const category= document.createElement("h2")
    category.textContent= document.getElementById("cat").value

    const desc= document.createElement("p")
    desc.textContent= document.getElementById("Des").value

    newelement.append(heading, date, category, desc)

    const container= document.querySelector(".inside")
    container.append(newelement)
    document.querySelector("#eventform").reset()
    document.querySelector(".Events>h2").remove();
}
function Click2(){
    const cards= document.querySelector(".inside")
    cards.innerHTML= ""
    const container2= document.querySelector(".Events")
    container2.append(text)
}

function Click3(){
    const newelement= document.createElement("div")
    newelement.id= "card1"
    const heading= document.createElement("h1")

    heading.textContent= "Web Development"
    
    const date= document.createElement("p")
    date.textContent= "2026-01-19"

    const category= document.createElement("h2")
    category.textContent= "Class"

    const desc= document.createElement("p")
    desc.textContent= "Web development Class"

    newelement.append(heading, date, category, desc)

    const container= document.querySelector(".inside")
    container.append(newelement)
    document.querySelector(".Events>h2").remove();
}
function Click4(){
    const newelement1= document.createElement("div")
    newelement1.id= "card1"
    const heading1= document.createElement("h1")

    heading1.textContent= "Art Workshop"
    
    const date1= document.createElement("p")
    date1.textContent= "2026-03-26"

    const category1= document.createElement("h2")
    category1.textContent= "Activity"

    const desc1= document.createElement("p")
    desc1.textContent= "Workshop on Art and Craft"

    newelement1.append(heading1, date1, category1, desc1)

    const container1= document.querySelector(".inside")
    container1.append(newelement1)
}

let key= ""
document.addEventListener("keydown", function(event){
    key= event.key;
    document.getElementById("keypressed").textContent= 
    "You Pressed:" + key;
});
