class ApiCats{
    constructor(i,URL){
        this.i = i;
        this.URL = URL;
    }
    //APi axios
    async apiCat(){
        try {
            const resImg = await axios(this.URL);
            const imgUrl = resImg.data[this.i-1].url;
            const container = document.getElementById(`img${this.i}`);
            container.src = imgUrl;
            console.log('Random');
            console.log(resImg);
            const status = resImg.status;
            if (status !== 200) throw new Error(`Error de petición HTTP en Random: ${status}`);
        } catch(error){
            console.log(error);
            console.log(error.message);
            const errorNode = document.querySelector('#error');
            errorNode.innerText = `Error: ${error.message}`;
        }
    }
    
    async apiLoadFav(){
        try {
            const resImg = await fetch(this.URL);
            const data= await resImg.json();
            if(this.i === 0){
                const num = data.length;
                return num;
            }else{
                const imgUrl = data[this.i-1].image.url;
                const container = document.getElementById(`imgFav${this.i}`);  
                container.src = imgUrl;
            }
            const status = resImg.status;
            if (status !== 200){
                throw new Error(`Error de petición HTTP en Favorite: ${status}`)
            }
        } catch(error){
            console.log(error);
            console.log(error.message);
            const errorNode = document.querySelector('#error');
            errorNode.innerText = `Error: ${error.message}`;
        }
        
        
    }
    
    async saveApiFav(){
        try {                        
            const rest = await fetch(this.URL,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        image_id: 'dpc'
                    }),
            });
            console.log(rest);
            const data = rest.json();
            if (rest.status !== 200) throw new Error(`Error de petición HTTP en Save: ${rest.status}${data.message}`);
        } catch(error){
            console.log(error);
            console.log(error.message);
            const errorNode = document.querySelector('#error');
            errorNode.innerText = `Error: ${error.message}`;
        }
    }
}
export default ApiCats;
