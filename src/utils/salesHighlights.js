// Count occurancies of each product name by checking if it exists in our object, then either initialize it's count to 1 or increment it if 
// it exists. Compare the sales count by iterating through the object and checking if the current product's count is higher than previously
//  stored highest count
function findMostPopular(data) {
    const productSalesCounts = {}

    data.forEach((sale) => {
        const { productName } = sale
        if (productSalesCounts[productName]) {
            productSalesCounts[productName]++
        } else {
            productSalesCounts[productName] = 1
        }
    });

    let mostSoldProduct = ''
    let highestSalesCount = 0

    for (const productName in productSalesCounts) {
        if (productSalesCounts[productName] > highestSalesCount) {
            mostSoldProduct = productName
            highestSalesCount = productSalesCounts[productName]
        }
    }

    return mostSoldProduct
}

function sumTotalRevenue(data) {
    let totalRevenue = 0
    for (let i = 0; i < data.length; i++) {
        totalRevenue += data[i].price
    }

    return totalRevenue.toFixed(2)
}

export { findMostPopular, sumTotalRevenue }