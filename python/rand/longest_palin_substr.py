def longestPalindrome(s: str) -> str:
    max_length = 0
    start = 0
    for i in range(len(s)):
        for j in range(i + max_length, len(s)):
            length = j - i + 1
            if i + length > len(s): break
            if length > max_length and isPalin(s, i, j + 1):
                start = i
                max_length = length
                        
    return s[start:start+max_length] if max_length < len(s) else s
        
def isPalin(s: str, start: int, end: int) -> bool:
    for i in range(int((end - start) / 2)):
        if s[start + i] != s[end-i-1]:
            return False
        
    return True