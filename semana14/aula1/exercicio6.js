var cristo;
(function (cristo) {
    cristo["AC"] = "antes de Cristo";
    cristo["DC"] = "depois de Cristo";
})(cristo || (cristo = {}));
function historia(ano, cristo) {
    var epoca = {
        ano: ano,
        cristo: cristo === 'antes de Cristo' ? 'antes de Cristo' : 'depois de Cristo'
    };
    return epoca;
}
console.log(historia(1900, ''));
