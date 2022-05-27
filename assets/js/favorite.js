function colorChange(i){
    const color_star  = document.getElementById(`color_star${i}`);
    colorValue= color_star.style.color;
    if(colorValue === "black"){
        color_star.style.color = "yellow";
        console.log('amarillo');
    }else{
        color_star.style.color = "black";
        console.log('negro');
    };
}
// const key ='c29e89cf-c31b-4222-ba6f-1d90740d32be';
// const endpoint = `https://api.thecatapi.com/v1/images/favourites}`;
// const parameters = [
//     `?limit=1`,
//     `&order=${key}`,
// ].join('');

// const URL = [endpoint,parameters].join('') ;

/* async function saveFav(){
    try {
        const rest = await fetch(URL, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Image_id: 'djk'
            })
        });
        console.log(rest);
    } catch(error){
        console.log(error);
    }
}
 */
