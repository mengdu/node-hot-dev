function sleep () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}


(async function () {
  await sleep()
  console.log('hello!')
})()
