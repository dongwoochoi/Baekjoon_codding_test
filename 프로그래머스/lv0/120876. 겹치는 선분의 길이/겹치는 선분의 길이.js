function solution(lines) {
    var answer = 0;
    var line = [];
    for(var i =0; i < lines.length; i++){
        var box = []
        for(var j = lines[i][0] +1; j < lines[i][1] + 1; j++){
            box.push(j)
        }
        line.push(box)
    }
    var same = [];
    same.push(line[0].filter(x=> line[1].includes(x)));
    same.push(line[0].filter(x=> line[2].includes(x)));
    same.push(line[1].filter(x=> line[2].includes(x)));
    same = [...same[0],...same[1],...same[2]];
    var s_same = new Set(same);
    if(s_same.size > 0){
        answer = (s_same.size)-1
    }
    console.log(s_same)
    return s_same.size;
}