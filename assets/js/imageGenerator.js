class ImgGenerator{
    constructor(num,key,endPoint){
        this.num = num;
        this.key = key;
        this.endPoint = endPoint;
    }
     //IMAG GENERATOR
    imgGenerator(){
        let html = '';
        for ( let i = 1; i <= this.num; i++) {
            html += `<img alt="Cat random Picture" class="imagesCat" id="img${i}">
                    <button type="button" class="favoriteButton" onclick="colorChange(${i});saveFav(${i});"><i style="color:white;" class="ri-star-fill " id="color_star${i}"></i></button>`;
        }
        return html
    }
    imgFav(){
        let html = '';
        for (let i = 1; i <= this.num; i++) {
            html  += `<img alt="Cat random Picture" class="imagesCat" id="imgFav${i}">
                <button type="reset" class="favoriteButton" onclick="Delete(${i})"><i style="color:white;" class="ri-close-fill r" id="color_star${i}"></i></button>`;
            const container = document.getElementById("imagesContainer_1");
            container.innerHTML = html;
        }
        return html
    }
    // Call
    callApi(){
        //URL
        const endpoint = `https://api.thecatapi.com/v1/${this.endPoint}`;
        let parameters;
        if(this.endPoint === 'images/search'){
            parameters = [
                `?limit=${this.num}`,
                `&api_key=${this.key}`,
            ].join('');
        }else{
            parameters = [
                `?api_key=${this.key}`,
            ].join('');
        }
        
        const URL = [endpoint,parameters].join('') ;
        return URL
    }
    // Call
    callApiNKey(){
        //URL
        const endpoint = `https://api.thecatapi.com/v1/${this.endPoint}`;
        const URL = endpoint;
        return URL
    }
}
export default ImgGenerator;
