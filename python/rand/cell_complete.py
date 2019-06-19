def cellCompete(states, days):
    # WRITE YOUR CODE HERE
    results = [0]*len(states)
    
    for i in range(days):
        for j in range(len(states)):
            status = getStatus(states, j)
            results[j] = status

        states = results[:]
    return results
        
    
def getStatus(state, i):
    left = state[i - 1] if i > 0 else 0
    right = state[i + 1] if i + 1 < len(state) else 0
    
    if left == right:
        return 0
    else:
        return 1

assert(cellCompete([1,1,1,0,1,1,1,1], 2) == [0, 0, 0, 0, 0, 1, 1, 0])
assert(cellCompete([1,0,1,0,1,0,0,1], 4) == [0,0,1,1,1,1,1,0])