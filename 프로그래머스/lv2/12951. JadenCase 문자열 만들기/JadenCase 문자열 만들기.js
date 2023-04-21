function solution(s) {
    s = s.toLowerCase()
    var ss = s.split("")
    var answer = '';
    
    for(var i = 0; i < ss.length; i++){
        if(i === 0){
            if(ss[0] === ("1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"0")){
                answer = answer + ss[0]
            }else{
                answer = answer + ss[0].toUpperCase()
            }
        }else{
            if(i+1 !== ss.length){
                if(ss[i] === " "){
                    ss[i+1] = ss[i+1].toUpperCase()
                    answer = answer + ss[i]
                }else{
                    answer = answer + ss[i]
                }
            }else{
                answer = answer + ss[i]
            }
            
        }
    }
    return answer;
}