/*
because counting sort is stable, we can run counting sort iteratively on an array of numbers
first wrt the least significant digits, then the next digit, and so on.
After the first iteration the numbers will be sorted wrt the smallest digit,
by the end the numbers will be sorted wrt all digits (ie actually sorted)

we could just sort the numbers with counting sort directly, but that would require a
countArr with length equal to the entire range of the numbers ([0,999] would require countArr of length 1000, despite only having two elements in the output)
that would be O(n + k), k being the range

radix is O(kn), k being the number of digits in the largest number of the input
essentially, k distinct calls to a linear counting sort (with some constant associated with the radix of each digit)

*/
