//import
import ImageGenerator from './imageGenerator.js';
import ApiCats from './apiCats.js';
import ApiKey from './key.js';

//call key
let key = new ApiKey();
key = key.apiKey();
// DOM
const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById('button_2');


//functions
const images = async (num,key,endpoint) =>{
    //call function
    const imgGen = new ImageGenerator(num,key,endpoint);
    const html = imgGen.imgGenerator();
    const container = document.getElementById("imagesContainer");
    container.innerHTML = html;
    const URL = imgGen.callApi();
    let id = [];
    for (let i = 0; i < num; i++){
        const api = new ApiCats(i,URL);
        id[i]= await api.apiCat();
    }
    return id;   
}

function colorChange(i){
    const color_star  = document.getElementById(`color_star${i}`);
    const colorValue = color_star.style.color;
    if(colorValue === "white"){
        color_star.style.color = "yellow";
        console.log('amarillo');
    }else{
        color_star.style.color = "white";
        console.log('negro');
    };
}
window.colorChange = colorChange;

async function favCats(){
    let num = 0;
    const endpoint= 'favourites';
    //call function
    let imgGen = new ImageGenerator(num,key,endpoint);
    const URL = imgGen.callApi();

    const api = new ApiCats(num,URL);
    num = await api.apiLoadFav();
    imgGen = new ImageGenerator(num);
    const html = imgGen.imgFav();
    const container = document.getElementById("imagesContainer_1");
    container.innerHTML = html;

    let idFav = [];
    for (let i = 1; i <= num; i++){
        const api = new ApiCats(i,URL);
        idFav[i-1]= await api.apiLoadFav();
    }   
    return idFav; 
}
let idFavA = await favCats();
console.log(idFavA);
async function Delete (i){
    const idImg = await idFavA[i-1];
    const endpoint= `favourites/${idImg}`;
     //call function
    let imgGen = new ImageGenerator(i,key,endpoint);
    const URL = imgGen.callApi();
    console.log(URL);
    const api = new ApiCats(idImg,URL);
    await api.deleteApiFav();
    favCats();
}
window.Delete = Delete;



const number = () => {
    let number_images = Number(document.getElementById('number_images').value);
    return number_images;
}
// onclick

button_1.onclick = async () => {
    const num = number();
    const endpoint= 'images/search';
    //validacion
    if(num !== 0){
        let id = await images(num,key,endpoint);
        console.log(id + "esto es apra divertire" + typeof(id));
        async function saveFav (i){
            const idImg = id[i-1];
            const endpoint= 'favourites';
             //call function
            let imgGen = new ImageGenerator(i,key,endpoint);
            const URL = imgGen.callApi();
            const api = new ApiCats(idImg,URL);
            await api.saveApiFav();
            favCats();
        }
        window.saveFav = saveFav;

        
    }else{
        alert("Elija un numero mayor a cero");
    };
    button_2.onclick = ()=>{
        console.log(typeof(number_images));
        images(0,key);
        
        number_images.value="0";
    }
    
}


