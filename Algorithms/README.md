# [ICS4U0 Algorithms](https://github.com/johnfraserss/ICS4U/wiki/Algorithms)

### Time complexity analysis (sorting)

**Bubble Sort:** O(n<sup>2</sup>)

**Insertion Sort:** O(n<sup>2</sup>)

**.sort():** O(nlogn)

**Q: What do you notice about the searches that have the thin bars vs. those with the thicker bars?**

The slower algorithms such as bubble sort and insertion sort have thicker bars, while the faster algorithms such as quick sort and merge sort have thinner bars. This is due to the difference in their time complexities, as quick sort and sort more items in the same amount of time bubble sort can sort less items

**Q: Why would someone make this video?**

Run the sorting algorithm on an array of numbers, with the numbers representing the height of the
bars. Then, on every pass of the algorithm, scan the whole array left to right, playing a sound for
every number, with greater numbers having a higher pitch and vise versa

**Q: How could this video be skewed to show something that is incorrect?**

Some arrays could already be partially in order at the start of the search, while other arrays can be in complete reverse order. This can give the illusion that a slower sorting algorithm is faster than a faster one, when in reality the data that is being sorted was not the same.

### Time complexity analysis (searching)

**Linear search:** O(n)

**Sorting + Binary search:** O(nlogn + logn)
