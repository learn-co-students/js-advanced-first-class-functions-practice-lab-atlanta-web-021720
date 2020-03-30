// Code your solution in this file!
const logDriverNames = driver => {
    driver.forEach(function (el) {
        console.log(el.name)
    })
}

const logDriversByHometown = (driver, location) => {
    driver.forEach(function (el) {
        if (el.hometown === location)
        console.log(el.name)
    })
}

const driversByRevenue = driver => {
     return driver.slice().sort(function compareNumbers(a, b) {
        return a.revenue - b.revenue;
      })
}

const driversByName = driver => {
   return driver.slice().sort(function (a, b) {
        return a.name.localeCompare(b.name)
    })
}

const totalRevenue = driver => {
   return driver.reduce(function (acc, currVal,) {
        return currVal.revenue + acc
    }, 0)
}

const averageRevenue = driver => {
    return totalRevenue(driver) / driver.length
}