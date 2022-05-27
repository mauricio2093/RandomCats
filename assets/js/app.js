//import
import ImageGenerator from './imageGenerator.js';
import ApiCats from './apiCats.js';
import ApiKey from './key.js';


//call
let key = new ApiKey();
key = key.apiKey();
// DOM
const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById('button_2');


//functions
const images = (num,key,endpoint) =>{
    //call function
    const imgGen = new ImageGenerator(num,key,endpoint);
    const html = imgGen.imgGenerator();
    const container = document.getElementById("imagesContainer");
    container.innerHTML = html;
    const URL = imgGen.callApi();

    for (let i = 1; i <= num; i++){
        const api = new ApiCats(i,URL);
        api.apiCat();
    }
    
}
async function favCats(){
    const i =2;
    const endpoint= 'favourites';
    //call function
    const imgGen = new ImageGenerator(i,key,endpoint);
    const URL = imgGen.callApi();
    console.log(URL);
    const api = new ApiCats(i,URL);
    api.apiLoadFav();
}
window.favCats=favCats;

async function saveFav(i){
    const endpoint= 'favourites';
    //call function
    const imgGen = new ImageGenerator(i,key,endpoint);
    const URL = imgGen.callApi();
    console.log(URL);
    const api = new ApiCats(i,URL);
    api.saveApiFav();
}
window.saveFav = saveFav;

function colorChange(i){
    const color_star  = document.getElementById(`color_star${i}`);
    const colorValue = color_star.style.color;
    if(colorValue === "black"){
        color_star.style.color = "yellow";
        console.log('amarillo');
    }else{
        color_star.style.color = "black";
        console.log('negro');
    };
}
window.colorChange = colorChange;

const number = () => {
    let number_images = Number(document.getElementById('number_images').value);
    return number_images;
}
// onclick
button_1.onclick = () => {
    const num = number();
    const endpoint= 'images/search';
    //validacion
    if(num !== 0){
        images(num,key,endpoint);
    }else{
        alert("Elija un numero mayor a cero");
    };
    button_2.onclick = ()=>{
        console.log(typeof(number_images));
        images(0,key);
        number_images.value="0";
    }
    
}
