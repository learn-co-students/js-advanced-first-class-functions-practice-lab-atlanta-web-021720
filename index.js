
const logDriverNames = function(arr) {
    const callback = function (el, i, arr) {
        console.log(el.name);
    };
    return arr.forEach(callback);
}

const logDriversByHometown = function(arr, loc) {
    const callback = function (el, i, arr) {
        if (el.hometown === loc) {
            console.log(el.name);
        };
    };
    return arr.forEach(callback);
};

const driversByRevenue = function(arr) {
    const callback = function(a, b) {
        return a.revenue - b.revenue;
    };
    let newArr = [...arr]
    return newArr.sort(callback);
};

const driversByName = function(arr) {
    const callback = function(a,b) {
        return a.name.localeCompare(b.name);
    };
    let newArr = [...arr];
    return newArr.sort(callback);
}

const totalRevenue = function(arr) {
    const sumRevenue = function(agg, el, i, arr) {
        return agg + el.revenue;
    };
    let total = arr.reduce(sumRevenue, 0)
    return total
}

const averageRevenue = function(arr) {
    const avgRevenue = function(agg, el, i, arr) {
        return (agg + (el.revenue/arr.length));
    };

    let average = arr.reduce(avgRevenue, 0);
    return average;
    //returns avg revenue of all drivers
}