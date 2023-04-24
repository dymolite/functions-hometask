function num(a) {
    var count=0;
    if (a>0 && a<50) {
        for (let i = 1; i <= a; i++) {
            if(i%3===0){
                count++;
            }
        }
    }
    else if (a>50 && a<100){
        for (let i = 1; i <= a; i++) {
            if(i%5===0) {
                count++;
            }
        }
    }
    else {
        for (let i = 1; i <= a; i++) {
            if(i%8===0){
                count++;
            }
        }
    }
    return count;
}
alert(num(prompt()))