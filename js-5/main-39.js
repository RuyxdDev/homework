// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
    name: "Daniil",
    secondName: "Rutskiy",
    age: 2,
    eyesColor: "blue"
}

const getPar = (obj) =>{
    for (const key in obj) {
        console.log(obj[key])
    }
    return 'Конец объекта'
}

console.log(getPar(person))

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const person2 = {
    name: "Daniil",
    secondName: "Rutskiy",
    age: 2,
    eyesColor: "blue"
}

const isEmpty = (obj) => {
    for (const key in obj) {
        return false
    }
    return true
}

console.log(isEmpty(person2))

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
    title: "Название",
    description: "Описание",
    isCompleted: "Да"
}
const task2 = task
const cloneAndModify = (object, modifications) => {
    modifications = { ...object };
    modifications.title = '2';
    for (const key in modifications) { 
        return modifications
    }
}
console.log(task)
console.log(cloneAndModify(task, task2))


// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

const callAllMethods = (obj) => {
    for (const key in obj) {
        if(typeof(obj[key]) === 'function'){
            obj[key]()
        }else{
            return obj[key]
        }
    }
}

console.log(callAllMethods(myObject))
