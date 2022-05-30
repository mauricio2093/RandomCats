class ApiCats{
    constructor(i,URL){
        this.i = i;
        this.URL = URL;
    }
    //APi axios
    async apiCat(){
        try {
            const resImg = await axios(this.URL);
            const data = await resImg.data[this.i];
            const imgUrl =  data.url;
            const imgId =  data.id;
            console.log(imgId);
            const container = document.getElementById(`img${this.i+1}`);
            container.src = imgUrl;
            const status = resImg.status;
            if (status !== 200){
                throw new Error(`Error de petición HTTP en Random: ${status}`)
            }else{
                return imgId
            };
        } catch(error){
            console.log(error);
            console.log(error.message);
            const errorNode = document.querySelector('#error');
            errorNode.innerText = `Error: ${error.message}`;
        }
        return imgId
    }
    
    async apiLoadFav(){
        
        try {
            const resImg = await axios(this.URL);
            const data= resImg.data;
            const status = resImg.status;
            console.log(data);
            if (status !== 200){
                throw new Error(`Error de petición HTTP en Favorite: ${status}`)
            }else if(this.i === 0){
                const num = data.length;
                return num;
            }else{
                const imageId= data[this.i-1].id;
                const imgUrl = data[this.i-1].image.url;
                const container = document.getElementById(`imgFav${this.i}`);  
                container.src = imgUrl;
                return imageId;
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
            console.log(this.i);           
            const rest = await fetch(this.URL,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        image_id: `${this.i}`
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

    async deleteApiFav(){
        try {                     
            const rest = await fetch(this.URL,{
                    method: 'DELETE'
            });
            const data = rest.json();
            if (rest.status !== 200) throw new Error(`Error de petición HTTP en Delete: ${rest.status}${data.message}`);
        } catch(error){
            console.log(error);
            console.log(error.message);
            const errorNode = document.querySelector('#error');
            errorNode.innerText = `Error: ${error.message}`;
        }
    }
}
export default ApiCats;
