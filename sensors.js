const fs = require('fs');

fs.writeFile("output.txt", '',(err) => {
    if(err) throw err;
})

let arr = new Array(20).fill(true);

for(let i = 0; i < 20; i++){

    let spotNum = Math.floor(Math.random() * 20);

    if(arr[spotNum] == true){
        arr[spotNum] = false;
    }
    else{
        arr[spotNum] = true;
    }

   
    fs.appendFile("output.txt", spotNum + '\n' + arr[spotNum] + '\n', (err) => {
        if(err) throw err;
    })
}