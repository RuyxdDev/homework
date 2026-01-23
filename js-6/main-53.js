// Задание 1.
// Дан массив пользователей:
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
users.push(
  { name: 'Ann', age: 19, isAdmin: false },
  { name: 'Jack', age: 43, isAdmin: true }
);
console.log('Задание 1. Массив users после добавления:', users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
function getUserAverageAge(users) {
  if (users.length === 0) return 0;
  const sum = users.reduce((acc, user) => acc + user.age, 0);
  return sum / users.length;
}
console.log('Задание 2. Средний возраст пользователей:', getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
function getAllAdmins(users) {
  return users.filter(user => user.isAdmin === true);
}
console.log('Задание 3. Все администраторы:', getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
function first(arr, n) {
  if (n === 0) return [];
  if (n === undefined) return [arr[0]];
  return arr.slice(0, n);
}
const testArray = [1, 2, 3, 4, 5];
console.log('Задание 4. Тест функции first:');
console.log('  first([1,2,3,4,5], 0):', first(testArray, 0));
console.log('  first([1,2,3,4,5]):', first(testArray));
console.log('  first([1,2,3,4,5], 3):', first(testArray, 3));