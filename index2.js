function max_value(x, y, z){
    let max_val = 0;

    if(x>y){
        max_val = x;
    }else{
        max_val = y
    }

    if(z>max_val){
        max_val = z
    }

    return max_val;
}

console.log(max_value(1, 0, 1))
console.log(max_value(0, -10, -20))
console.log(max_value(1000,510,440))