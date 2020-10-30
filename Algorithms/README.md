# [ICS4U0 Algorithms](https://github.com/johnfraserss/ICS4U/wiki/Algorithms)

_Every test was done using the numbers.json file with file size 2.8mb_

### Time complexity analysis (sorting)

**Bubble Sort:** O(n<sup>2</sup>)

416,679ms in 1 trial

**Insertion Sort:** O(n<sup>2</sup>)

107,612ms in 1 trial

**.sort():** O(nlogn)

Average of 347.74ms over 100 trials

### Analysis

**Q: Complete a computational complexity analysis of each of your own sorting algorithms and also compare it to the built-in .sort() function (figure out which one runs faster, why, when, etc.).**

A: Insertion sort appears to be 4 times faster than bubble sort. This 4x time increase is not evident in the time complexity, as n/4 is considered equal to n in terms of big O notation. Javascript's built in .sort function, however, is over 50 times faster than insertion sort, and 200 times faster than bubble sort. This is due to the .sort function being nlogn in time complexity, compared to the n<sup>2</sup> worst case for insertion and bubble sort.

**Q: What do you notice about the searches that have the thin bars vs. those with the thicker bars?**

The slower algorithms such as bubble sort and insertion sort have thicker bars, while the faster algorithms such as quick sort and merge sort have thinner bars. This is due to the difference in their time complexities, as quick sort and sort more items in the same amount of time bubble sort can sort less items

**Q: Why would someone make this video?**

To show the difference in speed between different sorting algorithms and to better visualize the underlying logic in each of the algorithms.

**Q: How could this video be skewed to show something that is incorrect?**

Some arrays could already be partially in order at the start of the search, while other arrays can be in complete reverse order. This can give the illusion that a slower sorting algorithm is faster than a faster one, when in reality the data that is being sorted was not the same.

### Time complexity analysis (searching)

**Linear search:** O(n)

Average of 2.40ms over 1000 trials

**Sorting + Binary search:** O(nlogn + logn)

Average of 248.74ms over 100 trials

### Analysis

**Q: Complete a computational complexity analysis of each of the searching algorithms. One part of this analysis should include a comparison between using linear search and using binary search + .sort().**

In general, linear search should be faster than sorting + binary searching. This is due to linear search being O(n), while sorting then binary searching is O(nlogn + logn), simplified to O(logn\*(n+1)). As we can see, sorting + binary searching has an extra logn factor, which is strictly increasing. For very small values of n, sorting + binary searching may be faster than linear searching.
