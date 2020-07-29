import * as fs from 'fs'

if(fs.existsSync('./tarefas.txt')){
    if(process.argv[2] === undefined){
        const fileData:string = fs.readFileSync('./tarefas.txt').toString()
        console.log(fileData)
    } else {
        fs.appendFileSync('./tarefas.txt', process.argv[2]+'\n')
    }
}
else {
    if(process.argv[2] !== undefined){
        fs.writeFileSync('./tarefas.txt', process.argv[2]+'\n')
    }
}