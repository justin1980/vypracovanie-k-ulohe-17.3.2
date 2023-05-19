for(i=1990;i <= 2030;i++){
    
    if(i%4==0){
        if(i%10==0){
        console.log("P O " + i)
    }
    else if((i%4)==0){
        console.log("P " + i)
    }     
    }
    else if((i%10)==0){
        console.log("O " + i)
    }
    else if(i == 2001){
        console.log("N " + i)
    }
    else{
        console.log(i)
    }
}