// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Leeds').then(function (temp) {
//   console.log('Promise success', temp);
// }, function(err) {
//   console.log('Promise error', err);
// })

function addPromise (a,b) {
  return new Promise(function (resolve,reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    }
    else {
      reject('both variables must be numbers');
    }
  });
}

addPromise(2,54).then(function (sum) {
  console.log("You added up numbers to make " + sum);
}, function(err) {
  console.log("This has failed because" + err);
});
addPromise(2,'d').then(function (sum) {
  console.log("You added up numbers to make", sum);
}, function(err) {
  console.log("This has failed because", err);
});
