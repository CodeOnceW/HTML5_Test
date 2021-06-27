console.log('before');

setTimeout(
    () => { console.log('Last'); }, 2000
)

console.log('after');

// before
// after
// Last