function solution(board) {
    var answer = 0;
    if(board[0].length == 1){
        if(board[0] == 1){
            answer = 0;
        }
        else{
            answer = 1;
        }
        return answer;
    }
    for(var i = 0; i < board[0].length; i++){
        for(var j = 0; j < board[0].length; j++){
            if(board[i][j] == 1){
                if(i == 0){
                    if(j == 0){
                        if(board[i + 1][j] != 1){board[i + 1][j] = 2;}
                        if(board[i][j + 1] != 1){board[i][j + 1] = 2;}
                        if(board[i + 1][j + 1] != 1){board[i + 1][j + 1] = 2;}
                    }if(j == board[0].length - 1){
                        if(board[i + 1][j] != 1){board[i + 1][j] = 2;}
                        if(board[i][j - 1] != 1){board[i][j - 1] = 2;}
                        if(board[i + 1][j - 1] != 1){board[i + 1][j - 1] = 2;}
                    }else{
                        if(board[i][j - 1] != 1){board[i][j - 1] = 2;}
                        if(board[i][j + 1] != 1){board[i][j + 1] = 2;}
                        if(board[i + 1][j - 1] != 1){board[i + 1][j - 1] = 2;}
                        if(board[i + 1][j + 1] != 1){board[i + 1][j + 1] = 2;}
                        if(board[i + 1][j] != 1){board[i + 1][j] = 2;}

                    }
                }else if(i == board[0].length - 1){
                    if(j == 0){
                        if(board[i - 1][j] != 1){board[i - 1][j] = 2;}
                        if(board[i][j + 1] != 1){board[i][j + 1] = 2;}
                        if(board[i - 1][j + 1] != 1){board[i - 1][j + 1] = 2;}
                    }if(j == board[0].length - 1){
                        if(board[i - 1][j] != 1){board[i - 1][j] = 2;}
                        if(board[i][j - 1] != 1){board[i][j - 1] = 2;}
                        if(board[i - 1][j - 1] != 1){board[i - 1][j - 1] = 2;}
                    }else{
                        if(board[i][j - 1] != 1){board[i][j - 1] = 2;}
                        if(board[i][j + 1] != 1){board[i][j + 1] = 2;}
                        if(board[i - 1][j - 1] != 1){board[i - 1][j - 1] = 2;}
                        if(board[i - 1][j + 1] != 1){board[i - 1][j + 1] = 2;}
                        if(board[i - 1][j] != 1){board[i - 1][j] = 2;}
                    }
                }else if(j == 0){
                    if(i == 0){
                        if(board[i + 1][j] != 1){board[i + 1][j] = 2;}
                        if(board[i][j + 1] != 1){board[i][j + 1] = 2;}
                        if(board[i + 1][j + 1] != 1){board[i + 1][j + 1] = 2;}
                    }if(i == board[0].length - 1){
                        if(board[i - 1][j] != 1){board[i - 1][j] = 2;}
                        if(board[i][j + 1] != 1){board[i][j + 1] = 2;}
                        if(board[i - 1][j + 1] != 1){board[i - 1][j + 1] = 2;}
                         
                    }else{
                        if(board[i - 1][j] != 1){board[i - 1][j] = 2;}
                        if(board[i + 1][j] != 1){board[i + 1][j] = 2;}
                        if(board[i - 1][j + 1] != 1){board[i - 1][j + 1] = 2;}
                        if(board[i][j + 1] != 1){board[i][j + 1] = 2;}
                        if(board[i + 1][j + 1] != 1){board[i + 1][j + 1] = 2;}
                    }
                }else if(j == board[0].length - 1){
                    if(i == 0){
                        if(board[i + 1][j] != 1){board[i + 1][j] = 2;}
                        if(board[i][j - 1] != 1){board[i][j - 1] = 2;}
                        if(board[i + 1][j - 1] != 1){board[i + 1][j - 1] = 2;}
                    }
                    if(i == board[0].length - 1){
                        if(board[i - 1][j] != 1){board[i - 1][j] = 2;}
                        if(board[i][j - 1] != 1){board[i][j - 1] = 2;}
                        if(board[i - 1][j - 1] != 1){board[i - 1][j - 1] = 2;}
                    }else{
                        if(board[i - 1][j] != 1){board[i - 1][j] = 2;}
                        if(board[i + 1][j] != 1){board[i + 1][j] = 2;}
                        if(board[i - 1][j - 1] != 1){board[i - 1][j - 1] = 2;}
                        if(board[i][j - 1] != 1){board[i][j - 1] = 2;}
                        if(board[i + 1][j - 1] != 1){board[i + 1][j - 1] = 2;}
                    }
                }else{
                    if(board[i -1][j - 1] != 1){board[i -1][j - 1] = 2;}
                    if(board[i - 1][j] != 1){board[i - 1][j] = 2;}
                    if(board[i - 1][j + 1] != 1){board[i - 1][j + 1] = 2;}
                    if(board[i][j + 1] != 1){board[i][j + 1] = 2;}
                    if(board[i][j - 1] != 1){board[i][j - 1] = 2;}
                    if(board[i + 1][j - 1] != 1){board[i + 1][j - 1] = 2;}
                    if(board[i + 1][j] != 1){board[i + 1][j] = 2;}
                    if(board[i + 1][j + 1] != 1){board[i + 1][j + 1] = 2;}
                }
            }
        }
    }
    for(var a = 0; a < board[0].length; a++){
        for(var b = 0; b < board[0].length; b++){
            if(board[a][b] == 0){
                answer = answer + 1;
            }
        }
    }
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log(board[3]);
    console.log(board[4]);
    return answer;
}