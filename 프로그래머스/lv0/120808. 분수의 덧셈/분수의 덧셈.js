function solution(denum1, num1, denum2, num2) {
    var topNum = num1*denum2 + num2*denum1
    var botNum = num1*num2
    var maximum = 1
    for(let i = 1 ; i <= topNum ; i ++) {
        if(topNum%i === 0 && botNum%i === 0) {
            maximum = i
        }
    }
    return [topNum/maximum, botNum/maximum]
}