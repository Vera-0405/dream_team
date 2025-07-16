
function sale(bills) {
    let coin5 = 0;
    let coin10 = 0;
    let coin20 = 0;

    let price = 5;
    let clients = 0;

for(let i = 0; i < bills.length; i++) {
    let coin = bills[i];
    if( coin === price) {
        clients++;
    coin5++;
    } else {
        if(coin === 20) {
            if(coin10 > 0 && coin5 > 0) { // 10 + 5
                clients++;
                coin10--;
                coin5--;
                coin20++;
            } else { // 5 + 5 + 5
                if(coin5 > 3) {
                    clients++; 
                    coin5 = coin5 - 3;
                    coin20++;
                }
            }
            








        } else { // 10
            if(coin5 > 0) {
                clients++;
                coin5--;
                coin10++;
            }
        }
    }
}
 return clients;
}
//example 1 : 5
let bills1 = [5,5,5,10,20];
console.log(`bills 1(5) : ` + sale(bills1));
console.log();

//example 2 : 4
let bills2 = [5,5,10,10,20];
console.log(`bills 2(4) : ` + sale(bills2));
console.log();

//example 3 : 7
let bills3 = [5,5,5,5,10,20,10];
console.log(`bills 3(7) : ` + sale(bills3));
console.log();








function sale(bills) {
  let coins = [0, 0, 0];
  let price = 5;
  let clients = 0;
  for (let i = 0; i < bills.length; i++) {
    let coin = bills[i];
    if (coin === price) {
      clients++;
      coins[0]++;
    } else {
      if (coin === 20) {
        if (coins[1] > 0 && coins[0] > 0) {
          // 10 + 5
          clients++;
          coins[1]--;
          coins[0]--;
          coins[2]++;
        } else {
          // 5 + 5 + 5
          if (coins[0] >= 3) {
            clients++;
            coins[0] = coins[0] - 3;
            coins[2]++;
          }
        }
      } else {
        // 10
        if (coins[0] > 0) {
          clients++;
          coin[0]--;
          coin[1]++;
        }
      }
    }
  }
  return clients;
}