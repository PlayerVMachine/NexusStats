const f = require(`util`).format

let oneAway = (word) => {
    let letters = `abcdefghijklmnopqrstuvwxyz`
    let mistakes = []

    let splits = []
    for (i = 0; i < word.length; i++) {
        splits[i] = [word.slice(0, i), word.slice(i, word.length)]
    }
    splits[word.length] = [word, ``]

    for (i = 0; i < word.length; i++){
        mistakes.push(splits[i][0] + splits[i][1].slice(1, word.length))
    }

    for (i = 0; i < word.length; i++){
        if (1 < splits[i][1].length)
            mistakes.push(splits[i][0] + splits[i][1][1] + splits[i][1][0] + splits[i][1].slice(2, splits[i][1].length))
    }

    for (i = 0; i < word.length; i++){
        letters.split(``).forEach(letter => {
            mistakes.push(splits[i][0] + letter + splits[i][1].slice(1, splits[i][1].length))
        })
    }

    for (i = 0; i < word.length + 1; i++){
        letters.split(``).forEach(letter => {
            mistakes.push(splits[i][0] + letter + splits[i][1])
        })
    }

    let filtered = mistakes.filter((value, _index, _array) => {
        if (value != undefined)
            return value
    })

    return filtered
}

//Suggest proper spelling of a command
exports.didYouMean = (word, commands, prefix) => {
    let options = oneAway(word)
    
    let found = options.find((elem) => {
        if (-1 < commands.indexOf(elem))
            return elem
    })
    
    if (undefined != found)
        return f(`Command \`%s%s\` not found did you mean \`%s%s\`?`, prefix, word, prefix, found)
    else
        return ``
}
