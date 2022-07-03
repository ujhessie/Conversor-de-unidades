var res = document.querySelector("#resultado")
function calc(){
    var inp = Number(document.querySelector("#inp-number").value)
    
    res.innerHTML = `
        <p>km: ${inp / 1000}</p>
        <p>hm: ${inp / 100}</p>
        <p>dam: ${inp / 10}</p>
        <p>m: ${inp}</p>
        <p>dm: ${inp * 10}</p>
        <p>cm: ${inp * 100}</p>
        <p>mm: ${inp * 1000}</p>
    `
}
console.log(res.value)