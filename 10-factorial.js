if (process.argv[2]) {
    const fact = (n) => {
        if (n == 1 || isNaN(n)) {
            return 1
        }
        return n * fact(n-1)
    }
    console.log(fact(process.argv[2]))
}
