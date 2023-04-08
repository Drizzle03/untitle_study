const $input = document.querySelector("#input");

const text = localStorage.getItem("data");
$input.value = text;

const $delete = document.querySelector("#delete");
$delete.addEventListener("click", (event)=>{
    console.log("delete");
    $input.value = "";
});

const $save = document.querySelector("#save");
$save.addEventListener("click", (event)=>{
    console.log("save");
    localStorage.setItem("data", $input.value);
});

const $load = document.querySelector("#load");
$load.addEventListener("click", (event)=>{
    console.log("load");
    loadContent = localStorage.getItem("data");
    $input.value = loadContent
});

