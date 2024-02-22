let date = new Date;
document.getElementById("currentyear").innerText = date.getFullYear();

document.getElementById("modifieddate").innerText = new Date(document.lastModified)