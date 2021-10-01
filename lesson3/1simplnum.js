

    let i = 2;
    while(i < 100){
        let j = 2;
        while(j <= i){
            if(i % j == 0){
                break;
            }
            j++;
        }
        if(i==j){
            console.log(i);
        }
        i++;
    }
    