/* 
¿Qué es un Endpoint de una API?
Un endpoint de API es un punto en el que una API, el código que permite que dos programas de software 
se comuniquen entre sí, se conecta con el programa de software. Las API funcionan enviando solicitudes
de información desde una aplicación web o un servidor web y recibiendo una respuesta .

En otras palabras, los endpoints de API son la ubicación digital específica donde un programa envía 
solicitudes de información para recuperar el recurso digital que existe allí. 
Los endpoints especifican dónde las API pueden acceder a los recursos y ayudan a garantizar el 
correcto funcionamiento del software incorporado. El rendimiento de una API depende de su capacidad 
para comunicarse correctamente con los puntos finales de la API.

Los programas de software suelen tener endpoints. Por ejemplo, en Instagram incluyen uno que permite 
a las empresas y los creadores medir las interacciones de medios y perfiles; uno que les permita moderar 
los comentarios y sus respuestas; y una tercera que les permite descubrir medios etiquetados.

Query parameters?

El query param es la clave valor name=oscar que vemos al final de la URL, y como regla, siempre deberán 
estar después del símbolo de interrogación. Además, una URL puede tener N query params, cómo el siguiente 
ejemplo:

https://myapi.com/customers?firstname=oscar&lastname=blancarte&status=active

Esta URL la podemos utilizar para buscar a todos los clientes donde su nombre es oscar, su apellido es
blancarte y su estatus es activo. Cuando utilizamos más de un Query param, es importante separar cada 
uno mediante el simbolo &. 
*/


// const axios = require('axios');   //usando Nodejs

// DOM
const imagesContainer = document.getElementById('imagesContainer');
const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById('button_2');

//numbers
const number = () =>{
    let numberImages = document.getElementById('numberImages').value;
    numberImages = Number(numberImages);
    return numberImages
};

//APi axios
const apiCat = async (i,URL) =>{
    try {
        const resImg = await axios(URL);
        const imgUrl = resImg.data[i-1].url;

        const container = document.getElementById(`img${i}`);
        container.src = imgUrl;
    } catch(error){
        console.log(error);
    }
}
//IMAG GENERATOR
const imgGenerator = (num,URL) =>{
    let i = 0;
    let html = '';
    for ( i = 1; i <= num; i++) {
        html += `<img alt="Cat random Picture" id="img${i}">`;
        console.log(html);
    }
    const container = document.getElementById("imagesContainer");
    container.innerHTML = html;
    for (i = 1; i <= num; i++){
        apiCat(i,URL);
    }
}
const conditional = (num, URL) => {
    if(num !== 0){
        imgGenerator(num,URL);
    }else{
        alert("Choose a number greater than zero");
    };
}

// onclick
button_1.onclick = () => {
    const numberLimit = number() ;
    //url
    const endpoint = "https://api.thecatapi.com/v1/images/search";
    const parameters = [
        `?limit=${numberLimit}`,
        '&order=Desc',
    ].join('');
    const URL = [endpoint,parameters].join('') ;
    conditional(numberLimit,URL);
    button_2.onclick = (URL)=>{
        imgGenerator(0,URL);
        numberImages.value = "0";
    }
}

