if (process.argv[2] && !isNaN(parseInt(process.argv[2]))) {
    for (let i = 0; process.argv[2] > i; i++) {
        console.log("X".repeat(process.argv[2]))
    }
} else {
    console.log("Missing size")
}



