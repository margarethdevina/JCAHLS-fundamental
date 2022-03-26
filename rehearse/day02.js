/**
 * klo infinite loop kejadian di console, tekan ctrl c
 * looping itu ada 3
 * 1 while loop
 * 2 do while loop
 * 3 for loop, tahu limit
 */

let i = 10
while (i > 0) {
    console.log(i)
    i--;
}

i = 0
do {
    console.log(i)
    i++
}
while (i <= 10)

for (i=1; i<=30; i++){
    if (i%3==0 && i%5==0){
        console.log(`bizz buzz ${i}`);
    } else if (i%3==0){
        console.log(`bizz ${i}`);
    } else if (i%5==0){
        console.log(`buzz ${i}`);
    }
};

