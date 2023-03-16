function solution(d, budget) {
    d.sort((a, b) => a - b)
    var box = [];
    for(var i = 0; i < d.length; i++){
        if(budget > 0){
            if(budget >= d[i]){
                budget = budget - d[i];
                box.push(i);
            }
        }
    }
    return box.length;
}