import * as moment from 'moment';

moment.locale("pt-br");

type tarefa = {
    name: string,
    description: string,
    initialDate: moment.Moment,
    finalDate: moment.Moment,
}

let taskList = [
    {
        name: 'Tocar Violão',
        description: 'Tocar músicas do capital inicial',
        initialDate: moment('30/07/2020 08:00', "DD/MM/YYYY HH:mm"),
        finalDate: moment('30/07/2020 09:00', "DD/MM/YYYY HH:mm"),
    },{
        name: 'Assistir jogo do Ceará',
        description: 'Assistir jogo no vozãoTV',
        initialDate: moment('01/08/2020 16:00', "DD/MM/YYYY HH:mm"),
        finalDate: moment('01/08/2020 18:00', "DD/MM/YYYY HH:mm"),
    }
]

function list(arr:tarefa[]) {
    arr.forEach(element => {
        const today = moment.now()
        const duration = element.finalDate.diff(element.initialDate, "minute")
        console.log(`Nome:${element.name}\nHorário de início: ${element.initialDate.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}\nHorário de fim: ${element.finalDate.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}\nDescrição: ${element.description}\nDuração:${duration} minutos\nDias até o evento: ${element.finalDate.diff(today, 'days')}\n`)
    });
}

function createEvent(name:string, description: string, initialDate: moment.Moment, finalDate: moment.Moment) {
    if (!name || !description || !initialDate || !finalDate){
        console.log("Error");
        return
    } else{
        if(initialDate.diff(moment.now()) < 0){
            console.log("Error! Data inicial não pode ser menor que o dia de hoje.")
            return
        }else if(finalDate.diff(moment.now()) < 0){
            console.log("Error! Data Final não pode ser menor que o dia de hoje.")
            return
        }
        else{
        const data = {name, description, initialDate, finalDate}
        taskList.push(data)
        return
        }
    }
}
//2.b) moment().utcOffset("+500")
list(taskList)
createEvent("Aula Labenu","Aula Date",moment('30/07/2020 08:00', "DD/MM/YYYY HH:mm"), moment('30/07/2020 09:00', "DD/MM/YYYY HH:mm"))
list(taskList)