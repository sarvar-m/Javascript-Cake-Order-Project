"use strict";

const patisserie = {
  bananaCaramel: {
    stock: 3,
    price: 9.99,
  },
  contessa: {
    stock: 5,
    price: 7.99,
  },
  concorde: {
    stock: 11,
    price: 22.99,
  },
  mouseCake: {
    stock: 8,
    price: 16.99,
  },
  confettiSuprise: {
    stock: 9,
    price: 14.99,
  },
};

const cakeType = document.getElementById('cakeSelect');
const orderAmount = document.getElementById('cakeAmount');
const orderBtn = document.getElementById('submit_btn');

/*
const checkOrder = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let inStock = patisserie[order[0]].stock >= order[1];

      if(inStock) {
        let totalPayment = 0;
        totalPayment = order[1] * patisserie[order[0]].price;
        console.log(`You ordered ${order[1]} ${order[0]}`)
        console.log(`All of the items are in stock. The total cost of the order is ${totalPayment}.`);
        resolve([order, totalPayment]);
      } else {
        reject(`The order could not be completed because some items are sold out.`);
      }
            
    }, 1000)
  })
}

const payment = (resolvedValueArray) => {
  const order = resolvedValueArray[0];
  const totalPayment = resolvedValueArray[1];
  return new Promise((resolve, reject) => {
    //setTimeout
    setTimeout(() => {
      if(confirm('Do you confirm this order?')) {
        console.log(`Payment completed. You paid $${totalPayment}.`);
        resolve(order);
      }
    }, 2000)
  })  
}

const stockControl = (resolvedValueArray) => {
  return new Promise((resolve, reject) => {
    //setTimeout
    setTimeout(() => {
      patisserie[order[0]].stock = patisserie[order[0]].stock - order[1];
      if(patisserie[order[0]].stock < 5) {
        resolve(`To Cashier: Please wait for checking stock...${order[0]} stock is ${patisserie[order[0]].stock} and it is critical`)
      }else{
        resolve(`We have enough stock for this item. No need to worry.`);
      }
    }, 3000)
  })  
    //setTimeout

  }
*/



orderBtn.onclick = ()=>{

  const checkOrder = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
  
        let inStock = patisserie[order[0]].stock >= order[1];
  
        if(inStock) {
          let totalPayment = 0;
          totalPayment = order[1] * patisserie[order[0]].price;
          console.log(`You ordered ${order[1]} ${order[0]}`)
          console.log(`All of the items are in stock. The total cost of the order is ${totalPayment}.`);
          resolve([order, totalPayment]);
        } else {
          reject(`The order could not be completed because some items are sold out.`);
        }
              
      }, 1000)
    })
  }
  
  const payment = (resolvedValueArray) => {
    const order = resolvedValueArray[0];
    const totalPayment = resolvedValueArray[1];
    return new Promise((resolve, reject) => {
      //setTimeout
      setTimeout(() => {
        if(confirm('Do you confirm this order?')) {
          console.log(`Payment completed. You paid $${totalPayment}.`);
          resolve(order);
        }
      }, 2000)
    })  
  }
  
  const stockControl = (resolvedValueArray) => {
    return new Promise((resolve, reject) => {
      //setTimeout
      setTimeout(() => {
        patisserie[order[0]].stock = patisserie[order[0]].stock - order[1];
        if(patisserie[order[0]].stock < 5) {
          resolve(`To Cashier: Please wait for checking stock...${order[0]} stock is ${patisserie[order[0]].stock} and it is critical`)
        }else{
          resolve(`We have enough stock for this item. No need to worry.`);
        }
      }, 3000)
    })  
      //setTimeout
  
    }

     // sample order template
  let order = [cakeType.value, orderAmount.value];

  checkOrder(order)
    .then((resolvedValueArray) => {
      return payment((resolvedValueArray))
    })
    .then((resolvedValueArray) => {
      return stockControl((resolvedValueArray))
    })
    .then((successMessage) => {
      console.log(successMessage);
    })
    .catch((errorMessage) => {
      console.log(errorMessage);
    })  
}

