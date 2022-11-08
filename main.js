function onClick(id){
    const one = document.getElementById("one")
    const two = document.getElementById("two")

    if(id === "one") {
        one.innerHTML = "clicked"
    }
    else if (id === "two"){
        two.innerHTML = "clicked!"
    }

}