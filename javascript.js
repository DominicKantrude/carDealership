//Total profit for 2017

let profit = dealership.filter(sale => sale.purchase_date.split("-")[0] === "2017")
.map(deal => deal.gross_profit)
.reduce((accumaltor, current) => accumaltor += current)
console.log({profit})


//In which month did they sell the most cars?
const monthSales2017 = dealership.filter(sale => sale.purchase_date.split("-")[0] === "2017").reduce((tally, sale) => {
    
    let month = sale.purchase_date.split("-")[1]
    tally[month] = (tally[month] || 0) + 1
    return tally
}, [])

const finalMonthSales2017 = Object.keys(monthSales2017).sort(function (a, b) { return monthSales2017[a] - monthSales2017[b] }).reverse()[0]
console.log({ finalMonthSales2017 })


 //Which salesperson sold the most cars?
const salesByAgent2017 = dealership.filter(sale => sale.purchase_date.split("-")[0] === "2017").reduce((tally, sale) => {

    let agent = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`
    tally[agent] = (tally[agent] || 0) + 1
    return tally
}, [])

const agentWithMostSales = Object.keys(salesByAgent2017).sort(function (a, b) { return salesByAgent2017[a] - salesByAgent2017[b] }).reverse()[0]
console.log({ agentWithMostSales })

// salePeople = {}

// const createKey = (lastName, firstName) =>{
// let key = lastName + "-" +  firstName
// salePeople[key] = (salePeople[key] + 1 || 1);
// }

// dealership.forEach(deal => {
//     createKey(deal.sales_agent.last_name, deal.sales_agent.first_name)
// });

// let mostSoldSalesperson = "";
// for (var key in salePeople) {
//    if(salePeople[mostSoldSalesperson] == null){
//     mostSoldSalesperson = key;
//    }

//    if(salePeople[key] > salePeople[mostSoldSalesperson]){
//     mostSoldSalesperson = key
//    }
// }
// console.log(mostSoldSalesperson.split("-")[0] + " " + mostSoldSalesperson.split("-")[1]) 

//Which salesperson made the most profit?
salePeople = {}
const createKeyOrAdd = (lastName, firstName, profit) => {
    let key = lastName + "-" + firstName
    salePeople[key] = (salePeople[key] + profit || profit);
}

dealership.forEach(deal => {
    createKeyOrAdd(deal.sales_agent.last_name, deal.sales_agent.first_name, deal.gross_profit)
});

let mostSoldSalesperson = "";
for (var key in salePeople) {
    if (salePeople[mostSoldSalesperson] == null) {
        mostSoldSalesperson = key;
    }

    if (salePeople[key] > salePeople[mostSoldSalesperson]) {
        mostSoldSalesperson = key
    }
}
console.log({mostSoldSalesperson})

//Which model was the most popular?
carModelsSold = {}

const createKey = (model) => {
    carModelsSold[model] = (carModelsSold[model] + 1 || 1);
}

dealership.forEach(deal => {
    createKey(deal.vehicle.model)
});

let mostSoldModel = "";
for (var key in carModelsSold) {
    if (salePeople[mostSoldModel] == null) {
        mostSoldModel = key;
    }

    if (carModelsSold[key] > carModelsSold[mostSoldModel]) {
        mostSoldModel = key
    }
}
console.log({mostSoldModel})

//Which bank provided the most loans to our customers?
const salesByBank2017 = dealership.filter(sale => sale.purchase_date.split("-")[0] === "2017").reduce((tally, sale) => {

    let bank = sale.credit.credit_provider
    tally[bank] = (tally[bank] || 0) + 1
    return tally
}, [])

const bankWithMostSales = Object.keys(salesByBank2017).sort(function (a, b) { return salesByBank2017[a] - salesByBank2017[b] }).reverse()[0]
console.log({bankWithMostSales })