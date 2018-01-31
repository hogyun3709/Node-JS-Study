console.log('Starting application');
setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Second inside of callback');
}, 0);

console.log('Finishing applicaiton');
