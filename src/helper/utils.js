export function formatDate(dateString){
    return dateString.slice(0,10)
}



export function shorter(str = "", maxLenght){
    if(!maxLenght || str.length<maxLenght){
        return str;
    }
    return  str.slice(0, maxLenght)+"..."
}