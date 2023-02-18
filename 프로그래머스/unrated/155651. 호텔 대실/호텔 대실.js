function solution(book_time) {
    var answer = 0;
    let room = [];
    book_time = book_time.sort()
    let new_l = [];
    for(var i = 0; i < book_time.length ; i++){
        let box = [];
        let a = (Number(book_time[i][0].split(":")[0])*60) + (Number(book_time[i][0].split(":")[1]))
        let b = (Number(book_time[i][1].split(":")[0])*60) + (Number(book_time[i][1].split(":")[1]))
        box.push(a)
        box.push(b+10)
        new_l.push(box)
    }
    
    for(var q = 0; q < new_l.length; q++){
        
        for(var k = -1; k < room.length; k++){
            if(room.length == 0){
                room.push(new_l[q])
                break;
            }else{
                if(new_l[q][0] >= room[k+1][1]){
                    room[k+1] = new_l[q]
                    break;
                }else if(k+2 == room.length){
                    room.push(new_l[q])
                    break;
                }
            }
        }
        
    }
    answer = room.length
    return answer;
    
}