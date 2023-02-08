def solution(lottos, win_nums):
    low = lottos.count(0)
    high = len(list(set(win_nums)&set(lottos)))
    rank = [6,6,5,4,3,2,1]
    answer = [rank[high+low],rank[high]]
    return answer