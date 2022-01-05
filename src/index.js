module.exports = function toReadable (number) {
    const num_str = number.toString();
    const n1 = ['one','two','three','four','five','six','seven','eight','nine'];
    const n10 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const n10_to90 = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const n100 = ['one hundred','two hundred','three hundred','four hundred','five hundred',
    'six hundred','seven hundred','eight hundred','nine hundred'];
    
    if(num_str == 0){
        return 'zero';
    }else if(num_str.length == 1){
        for(let i = 0; i < n1.length; i++){
            if(number-1 == i){
                return n1[i];
            }
        }
    }else if(num_str.length == 2 && number <= 19){
        for(let i=0; i<n10.length; i++){
            if(number-10 == i){
                return n10[i];
            }
        }
    }else if(num_str.length == 2){
        const a = parseInt(num_str[0]);
        const b = parseInt(num_str[1]);
        if(b==0){
            return n10_to90[a-1];
        }else{
        return n10_to90[a-1] + " " + n1[b-1];
        }
    }

    else if(num_str.length == 3){
        const a = parseInt(num_str[0]);
        const b = parseInt(num_str[1]);
        const c = parseInt(num_str[2]);

        if(num_str.length == 3 && b<=1 && b>0){
            return n100[a-1] + " " + n10[c];
        }else if(num_str.length == 3 && c==0 && b==0){
            return n100[a-1];
        }else if(num_str.length == 3 && b==0){
            return n100[a-1] +" "+ n1[c-1];
        }else if(num_str.length == 3 && c==0){
            return n100[a-1] + " " + n10_to90[b-1];
        }else if(num_str.length == 3){
            return n100[a-1] + " " + n10_to90[b-1] + " " + n1[c-1];
        }
    }
}
