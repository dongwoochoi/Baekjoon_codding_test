function solution(s) {    
    const set = new Set(s);
    
    if(set.size === s.length){
        return s.split("").sort().join("");
    }
    
    const sArr = s.split("");
    
    for(let i = 0; i < sArr.length; i++){
        if(!s.includes(sArr[i])){
            
        }
        
        if(s.indexOf(sArr[i]) !== s.lastIndexOf(sArr[i])){
            s = s.split(sArr[i]).join("");    
        }
    }
    
    return s.split("").sort().join("");
}