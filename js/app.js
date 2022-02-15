const topPlaer = document.getElementById("top-player");
topPlaer.style.color="rgba(255, 99, 71, 1)";
const topBlogs= document.getElementById("top-blogs");
topBlogs.style.color="rgba(255, 99, 71, 1)";
//change background color
const palyers = document.getElementById("bgc-players");
palyers.style.backgroundColor = " rgba(255, 99, 71, 0.8)"
// add click handelar in submit button and add new element 
document.getElementById("submit-btn").addEventListener('click',function(){
    const inputText = document.getElementById("input-text").value;
    const li = document.createElement('li');
    li.innerText = inputText;
    const playerList =document.getElementById("player-list");
    playerList.appendChild(li);
});
// add click handelar in click button
document.getElementById("click-btn").addEventListener('click',function(){
    const inputField = document.getElementById("input-type");
    const inputFieldValue =  inputField.value
    if(inputFieldValue >= 0 && inputFieldValue < 5){
    const changeValue = parseInt(inputFieldValue)+1;
    inputField.value = changeValue;
    }else{
        const clickBtn= document.getElementById('click-btn');
        clickBtn.style.display='none'
    }
})
// 
