let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")


input1.addEventListener("input", function(){
    let c = this.value
    let f = (c * 9/5) + 32
    input2.value = f

    // let newV = f
    // .split('.')[1]
    // if (newV === 0000) {
    //     input1.value = f
    // } else {
    //     input1.value = f.toFixed(4)
    // }
    
})


input2.addEventListener("input" , function(){
    let f = this.value
    let c =(f - 32) * 5/9;
    input1.value = c

    // let newV = c.split('.')[1]
    // if (newV === 0000) {
    //     input1.value = c
    // } else {
    //     input1.value = c.toFixed(4)
    // }

})