//Suggest proper spelling of a command
function didYouMean (_word, _commands, _common) {

}

function oneAway (word) {
    let letters = `abcdefghijklmnopqrstuvwxyz`
    let mistakes = []

    let splits = []
    for (i = 0; i < word.length; i++) {
        splits[i] = [word.slice(0, i), word.slice(i, word.length)]
    }
    splits[word.length] = [word, ``]
    mistakes.push(splits)

    let deletes = []
    for (i = 0; i < word.length; i++){
        deletes[i] = splits[i][0] + splits[i][1].slice(1, word.length)
    }
    mistakes.push(deletes)

    let transposes = []
    for (i = 0; i < word.length; i++){
        if (1 < splits[i][1].length)
            transposes[i] = splits[i][0] + splits[i][1][1] + splits[i][1][0] + splits[i][1].slice(2, splits[i][1].length)
    }
    mistakes.push(transposes)

    let replaces = []
    let j = 0
    for (i = 0; i < word.length; i++){
        letters.split(``).forEach(letter => {
            replaces[j] = splits[i][0] + letter + splits[i][1].slice(1, splits[i][1].length)
            j++
        })
    }
    mistakes.push(replaces)

    let inserts = []
    j = 0
    for (i = 0; i < word.length + 1; i++){
        letters.split(``).forEach(letter => {
            inserts[j] = splits[i][0] + letter + splits[i][1]
            j++
        })
    }
    mistakes.push(inserts)

    let filtered = mistakes.filter((value, _index, _array) => {
        if (value != undefined)
            return value
    })

    return filtered
}

function known () {
    
}