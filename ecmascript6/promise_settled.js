if (!Promise.allSettled) {
    Promise.allSettled = promises =>
      Promise.all(
        promises.map((promise, i) =>
          promise
            .then(value => ({
              status: "fulfilled",
              value,
            }))
            .catch(reason => ({
              status: "rejected",
              reason,
            }))
        )
      );
  }

  if (!Promise.any) {
    Promise.any = promises =>
      Promise.all(
        // promises.map((promise, i) =>
        //   promise
        //     .then(value => ({
        //       status: "fulfilled",
        //       value,
        //     }))
        //     .catch(reason => ({
        //       status: "rejected",
        //       reason,
        //     }))
        // )
        getFulfilledArr(promises)
      );
  }
  const getFulfilledArr = promises => {
    let returnVal = []
    for (const promise of promises) {
        if (promise.status === "fulfilled") {
            returnVal.push(promise.value)
            break
        } else {
            console.log(promise.reason)
        }
    }
    return returnVal
  }
  const delay = n => new Promise(resolve => setTimeout(resolve, n));
  const promises = [
    delay(100).then(() => 1),
    delay(200).then(() => 2),
    delay(300).then(() => {
      throw new Error("Boom");
    }),
  ];
  Promise.any(promises).then(console.log);