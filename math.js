for (i = 0; i <= 6; i += 1) {
    let gen = Math.ceil(Math.random() * 10)
    let men = Math.ceil(Math.random() * 10)
    let mine = `${gen} * ${men}`
    let mie = `${gen} + ${men}`
    let mi = `${gen} - ${men}`
    let min = `${gen} / ${men}`
    let arr = [mine, mie, mi, min]
    pile = Math.floor(Math.random() * arr.length)
    vise = arr[pile]
    ask = window.prompt(`Solution for ${vise}`)
    if (mine == vise) {
        if (ask == gen * men) {
            alert("nice")
        }
        else {
            alert("ok")
        }
    }
    if (mie == vise) {
        if (ask == gen + men) {
            alert("nice")
        }
        else {
            alert("ok")
        }
    } if (mi == vise) {
        if (ask == gen - men) {
            alert("nice")
        }
        else {
            alert("ok")
        }
    }
    if (gen % men == 0) {
        if (min == vise) {
            if (ask == gen / men)
                alert("nice")
        }
        else {
            alert("ok")
        }
    }
}

ale = window.prompt(`Answer of ${gen}*${men}`)
if (ale == gen * men) {
    alert("good")
}
console.log(gen)