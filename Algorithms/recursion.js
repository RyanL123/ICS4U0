function digitSumRecursive(num) {
    if (num <= 9) return num;
    return digitSumRecursive(Math.floor(num / 10)) + (num % 10);
}

console.log(digitSumRecursive(126));

function digitSumIterative(num) {
    let ans = 0;
    while (num > 0) {
        ans += num % 10;
        num = Math.floor(num / 10);
    }
    return ans;
}

console.log(digitSumIterative(126));

function palindromeRecursive(str) {
    str = str.toLowerCase();
    if (str.length <= 1) return 0;
    flag = true;
    for (let i = 0; i <= Math.floor(str.length) / 2; i++) {
        flag &= str[i] === str[str.length - 1 - i];
    }
    return (
        flag +
        palindromeRecursive(str.substring(1, str.length)) +
        palindromeRecursive(str.substring(0, str.length - 1)) -
        palindromeRecursive(str.substring(1, str.length - 1))
    );
}

console.log(palindromeRecursive("kayak"));

function palindromeIterative(str) {
    str = str.toLowerCase();
    let ret = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            flag = true;
            for (let k = 0; k <= Math.floor((i + j) / 2); k++) {
                flag &= str[i + k] === str[j - k];
            }
            ret += flag;
        }
    }
    return ret;
}

console.log(palindromeIterative("kayak"));
