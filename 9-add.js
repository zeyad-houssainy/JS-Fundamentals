const add = (a, b) => {
    if (a && b) {
        console.log(parseInt(a) + parseInt(b))
    } else {
        console.log(NaN)
    }
}




add(process.argv[2], process.argv[3])