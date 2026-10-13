// Вихідні дані: черга фільмів, які планується переглянути.
//
//     const watchlist = [Inception, Interstellar, The Matrix, Gladiator, Dune];
//
// Завдання: «Фільми на вихідні». Результати виводити в консоль.
//
// 1. Сформувати масив weekendFilms — перші три фільми з черги за алфавітом.
//
//     Зробити це одним ланцюжком методів.
//
//     Сама черга watchlist при цьому має залишитись без змін.
//
//     Очікувано: ["Dune", "Gladiator", "Inception"]
//
// 2. Друг порадив ще два фільми — Oppenheimer і Arrival.
//
//     Додати їх до weekendFilms.
//
// 3. Одним ланцюжком методів вивести weekendFilms у консоль:
//
//     за алфавітом, кожен фільм окремим рядком з порядковим номером.
//
//     Очікувано:
//
// 1. Arrival
//
// 2. Dune
//
// 3. Gladiator
//
// 4. Inception
//
// 5. Oppenheimer
//
// 4. Вивести в консоль watchlist і переконатись, що черга не змінилась:
//
//     ["Inception", "Interstellar", "The Matrix", "Gladiator", "Dune"]

//завдання 1

const watchlist = ["Inception", "Interstellar", "The Matrix", "Gladiator", "Dune"];

const weekendFilms = watchlist.slice().sort().slice(0, 3);

console.log(weekendFilms);
// ["Dune", "Gladiator", "Inception"]

console.log(watchlist);

//завдання 2
const additionalFilms = ["Oppenheimer", "Arrival"];

const updatedWeekendFilms = weekendFilms.concat(additionalFilms);

console.log(updatedWeekendFilms);
// ["Dune", "Gladiator", "Inception", "Oppenheimer", "Arrival"]

//завдання 3
console.log(
    updatedWeekendFilms
        .slice()
        .sort()
        .map((film, index) => `${index + 1}. ${film}`)
        .join("\n")
);

console.log(watchlist);
// ["Inception", "Interstellar", "The Matrix", "Gladiator", "Dune"]