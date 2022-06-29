function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = parimpar(1194)

console.log(`O número é ${res}`)