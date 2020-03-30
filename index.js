// Code your solution in this file!



function logDriverNames(drivers) {
    for (const driver of drivers) {
        console.log(driver.name)
    }
}

function logDriversByHometown(drivers, location) {
    for (const driver of drivers) {
        if (driver.hometown === location) {
            console.log(driver.name)
        }
    }
}

function driversByRevenue(drivers) {
    return drivers.slice().sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers) {
    return drivers.slice().sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
    let totalPrice = 0;

    drivers.forEach(function(driver) {
        totalPrice += driver.revenue;
    });

    return totalPrice;
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length
}