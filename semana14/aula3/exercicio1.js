"use strict";
exports.__esModule = true;
var moment = require("moment");
moment.locale("pt-br");
var taskList = [
    {
        name: 'Tocar Violão',
        description: 'Tocar músicas do capital inicial',
        initialDate: moment('30/07/2020 08:00', "DD/MM/YYYY HH:mm"),
        finalDate: moment('30/07/2020 09:00', "DD/MM/YYYY HH:mm")
    }, {
        name: 'Assistir jogo do Ceará',
        description: 'Assistir jogo no vozãoTV',
        initialDate: moment('01/08/2020 16:00', "DD/MM/YYYY HH:mm"),
        finalDate: moment('01/08/2020 18:00', "DD/MM/YYYY HH:mm")
    }
];
function list(arr) {
    arr.forEach(function (element) {
        var today = moment.now();
        var duration = element.finalDate.diff(element.initialDate, "minute");
        console.log("Nome:" + element.name + "\nHor\u00E1rio de in\u00EDcio: " + element.initialDate.format("dddd, DD [de] MMMM [de] YYYY, HH:mm") + "\nHor\u00E1rio de fim: " + element.finalDate.format("dddd, DD [de] MMMM [de] YYYY, HH:mm") + "\nDescri\u00E7\u00E3o: " + element.description + "\nDura\u00E7\u00E3o:" + duration + " minutos\nDias at\u00E9 o evento: " + element.finalDate.diff(today, 'days') + "\n");
    });
}
function createEvent(name, description, initialDate, finalDate) {
    if (!name || !description || !initialDate || !finalDate) {
        console.log("Error");
        return;
    }
    else {
        if (initialDate.diff(moment.now()) < 0) {
            console.log("Error! Data inicial não pode ser menor que o dia de hoje.");
            return;
        }
        else if (finalDate.diff(moment.now()) < 0) {
            console.log("Error! Data Final não pode ser menor que o dia de hoje.");
            return;
        }
        else {
            var data = { name: name, description: description, initialDate: initialDate, finalDate: finalDate };
            taskList.push(data);
            return;
        }
    }
}
//2.b) moment().utcOffset("+500")
list(taskList);
createEvent("Aula Labenu", "Aula Date", moment('30/07/2020 08:00', "DD/MM/YYYY HH:mm"), moment('30/07/2020 09:00', "DD/MM/YYYY HH:mm"));
list(taskList);
