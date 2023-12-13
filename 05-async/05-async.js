// Event Loop

// const timeout = setTimeout(() => {
//     console.log('after 2 seconds')
// }, 2000); // setTimeout выполняется с задержкой, асинхронно

// clearTimeout(timeout); // остановили таймаут, не выведется 

// setTimeout(() => {
//     console.log('after 3 seconds')
// }, 3000);

// let count = 0;
// setInterval(() => {
//     console.log('tick', ++count)
// }, 1000);

// function delay (callback, time = 1000) {
//     setTimeout(callback, time)
// };

// delay(() => {
//     console.log('timeout')
// }, 2000);

const delay = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3])
            reject('Error in delay')
        }, time)
    })
    return promise
};

// delay(2000)
//     .then((data) => {
//         console.log('Timeout', data)
//         return data.map((x) => x ** 2)
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => console.log('Finally'))

const getData = () => new Promise((resolve) =>
resolve([1, 2, 3]));

async function asyncExample() {
    try {
        await delay(3000) // ждет 3 с.
        const data = await getData()
        console.log(data)
    } catch (err) {
        console.log(err)
    } finally {
        console.log('Finally')
    }
};

asyncExample();