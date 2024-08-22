let count=0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){    
        if(count%10===0){
            let decSeguidor = count;
            alert(`Felicitaciones llegaste a ${decSeguidor} seguidores.`);
        }  

}

function resetCount(){
    parseInt(document.getElementById('countDisplay').innerText="0");
    count=0;
}