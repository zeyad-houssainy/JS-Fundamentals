const fact = function(n) {
    if (n == 1 || isNaN(n) || n == undefined) {
        return 1
    }
    return n * fact(n-1)
}
console.log(fact(process.argv[2]))
