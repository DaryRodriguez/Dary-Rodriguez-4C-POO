let array=[0,1,2]
let span=[
    document.querySelector("#numero"),
    document.querySelector("#numero1"),
    document.querySelector("#numero2")
];

function Like(id){
    array[id]++;
    span[id].innerHTML=array[id]+"like(s)";
}
   