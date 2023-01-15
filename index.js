let masivchik = []
element = null
n=1
do{
    element = prompt(`Введите елмент масива №${n++} чтобы завершить нажмите Cancel`)
    masivchik.push(element)
} while (element !== null)
masivchik.pop(element)
console.log(masivchik)
masivchik.sort((a, b) => a - b)
console.log(masivchik)
masivchik.splice(1,3)
console.log(masivchik)