const output = document.querySelector('.output')
const url = 'list.json'

window.addEventListener('DOMContentLoaded', () => {
    
    fetch(url).then(rep => rep.json()).then((data) => {
        output.innerHTML = ''
        data.forEach(element => {
            makeList(element)
        })
    })
})

function makeList(item) {
    const div = document.createElement('div')
    div.innerHTML = `${item.name} - wins =  ${item.wins}, champion = ${item.champion}.`
    output.append(div)
}
