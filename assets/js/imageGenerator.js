class ImgGenerator{
    constructor(num,key,endPoint){
        this.num = num;
        this.key = key;
        this.endPoint = endPoint;
    }
     //IMAG GENERATOR
    imgGenerator(){
        let i = 0;
        let html = '';
        for ( i = 1; i <= this.num; i++) {
            html += `<img alt="Cat random Picture" class="imagesCat" id="img${i}">
                    <button type="button" class="favoriteButton" onclick="colorChange(${i});saveFav(${i});favCats();"><i style="color:black;" class="ri-star-fill color-star" id="color_star${i}"></i></button>`;
            console.log(html);
        }
        return html
    }
    callApi(){
        //URL
        const endpoint = `https://api.thecatapi.com/v1/${this.endPoint}/`;
        const parameters = [
        `?limit=${this.num}`,
        `&api_key=${this.key}`,
        ].join('');
        const URL = [endpoint,parameters].join('') ;
        return URL
    }
}
export default ImgGenerator;
