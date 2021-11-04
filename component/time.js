

  
    
export default function time(){

    const date = new Date();

    const Year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();


    return `${month +1}/${day}/${Year}  

                ` 
}



