let para = document.getElementById("para");

    para.addEventListener('mouseover', function run(){
        alert('Mouse is insiding the para');
    });

function hide(){
    let btn = document.getElementById("btn");
    let para = document.getElementById("para");

    if(para.style.display != 'none')
        para.style.display = 'none';
    else 
        para.style.display = 'block';
    
}