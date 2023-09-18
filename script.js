document.getElementById("dragabbleText").addEventListener("dragstart", (e)=>{
    e.dataTransfer.setData('text/plain', e.target.textContent);
})

const dropArea = document.getElementById("dropArea");

dropArea.addEventListener("dragover", (e)=>{
    e.preventDefault();
})

dropArea.addEventListener("drop", (e)=>{
    
    e.target.textContent = e.dataTransfer.getData("text/plain");
    e.preventDefault();
})