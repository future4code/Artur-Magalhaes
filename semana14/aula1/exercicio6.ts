enum cristo {
    AC = 'antes de Cristo',
    DC = 'depois de Cristo',
}

type tempo = {
    ano: number,
    cristo: cristo | string
}

function historia(ano: number, cristo: cristo | string):tempo {
    const epoca = {
        ano: ano,
        cristo: cristo === 'antes de Cristo' ? 'antes de Cristo' :  'depois de Cristo',
    }

    return epoca;
}

console.log(historia(1900, ''))