function questions(role){
    switch(role){
        case `Manager`:
            return function(name){
                return `Hi ${name}, What is the core value of the comapany?`;
        };
        case `Native`:
            return function(){
                return `Hi ${role}, What is your best programming language?`;
        };
        case `Elders`:
            return function(){
                return `Hi ${role}, Do you love your job?`;
        };
        default:
            return `Wrong role`;
    }
}


let answer = questions("Manager")
 console.log(answer("Oladimeji Olamilekan  Holychild Damilare Iniestajnr  BadBoyQ  Baba-Bank  OloriEbi 1 [Omo MaYeGun oF ishaga Land] "))