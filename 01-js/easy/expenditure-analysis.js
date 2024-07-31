/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr=[]
  let flag=0;
  for(let i=0;i<transactions.length;i++){
    for(let j=0;j<arr.length;j++){
        if (arr[j].category==transactions[i].category){
          arr[j].totalSpent+=transactions[i].price;
          flag=1;
          break;
        }
    }
    if(flag==0){
      arr.push({category:transactions[i].category,totalSpent:transactions[i].price})
    }
    flag=0
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
