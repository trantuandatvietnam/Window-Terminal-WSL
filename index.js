const input = [
    {
        name: "John",
        age: 13
    },
    {
        name: "Mark",
        age: 56
    },
    {
        name: "Rachel",
        age: 45
    },
    {
        name: "Nate",
        age: 67
    },
    {
        name: "Jeniffer",
        age: 65
    },
]

function respectiveAge(arr) {
    const theSmallestAge = findMinAge(arr);
    const theOldestAge = findMaxAge(arr);
    return [theSmallestAge, theOldestAge, theOldestAge - theSmallestAge]
}

function findMinAge(arr) {
    let minAge = arr[0].age;
    arr.forEach(item => {
        minAge = item.age < minAge ? item.age : minAge;
    });
    return minAge;
}
function findMaxAge(arr) {
    let maxAge = arr[0].age;
    arr.forEach(item => {
        maxAge = item.age > maxAge ? item.age : maxAge;
    });
    return maxAge;
}
console.log(respectiveAge(input));