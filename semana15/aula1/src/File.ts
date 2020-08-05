import fs from 'fs'

export const readFile = () => {
    return fs.readFileSync('data.json').toString()
}

export const writeFile = (data:any) => {
    fs.writeFileSync('data.json', data)
}
