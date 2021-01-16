

module.exports = {

    harrisBenedict(height, P, I, G) {
        const A = height * 100
        try {
            let GET = 0;
            if(typeof A !== undefined || typeof P !== undefined || typeof I !== undefined || typeof G !== undefined) {
                if(G == "Mulher") {
                    GET = 655 + (9.6 * P) + (1.9 * A) - (4.7 * I);
                }
                else if(G == "Homem"){
                    GET = 66 + (13.8 * P) + (5.0 * A) - (6.8 * I);
                }
                return GET.toFixed(2);
            } 
        }
        catch (error) {
            return res.send({error: 'Campo indefinido.' })
        }
    },

    faoOms(P, I, G) {
        try {
            var GET = 0;
            if(typeof P != "undefined" || typeof I != "undefined" || typeof G != "undefined") {
                if(G == "Mulher") {
                    if(I >= 10 && I <= 18) {
                        GET = (13.384 * P) + 692.6;
                    }
                    else if(I >= 18 && I <= 30) {
                        GET = (14.818 * P) + 486.6;
                    }
                    else if(I >= 30 && I <= 60) {
                        GET = (8.126 * P) + 845.6;
                    }
                    else if(I >= 60) {
                        GET = (9.082 * P) + 658.5;
                    }
                }
                else if(G == "Homem"){
                    if (I >= 10 && I <= 18) {
                        GET = (17.686 * P) + 658.2;
                    }
                    else if (I >= 18 && I <= 30) {
                        GET = (15.057 * P) + 692.2;
                    }
                    else if(I >= 30 && I <= 60) {
                        GET = (11.472 * P) + 873.1;
                    }
                    else if(I >= 60) {
                        GET = (11.711 * P) + 587.7;
                    }
                }
                return GET.toFixed(2);
            }
        }
        catch (error) {
            return res.send({error: 'Campo indefinido.' })
        }
    },

    iom(height, P, I, G, NAF) {
        try {
            const A = height * 100
            let GET = 0;
            if(typeof A != "undefined" || typeof P != "undefined" || typeof I != "undefined" || typeof G != "undefined" || typeof NAF != "undefined") {
                if(G == "Mulher") {
                    if(I >= 9 && I <= 18) {
                        GET = 135.3 - (30.8 * I) + (NAF * (10.0 * P + 934 * A)) + 25;
                    }
                    else if(I >= 19) {
                        GET = 354 - (6.91 * I) + (NAF * (9.36 * P + 726 * A))
                    }
                }
                else if(G == "Homem"){
                    if (I >= 9 && I <= 18) {
                        GET = 88.6 - (61.9 * I) + (NAF * (26.7 * P + 903 * A)) + 25
                    }
                    else if(I >= 19) {
                        GET = 662 - (9.53 * I) + (NAF * (15.91 * P + 539.6 * A))
                    }
                }
                return GET.toFixed(2);
            }
        }
        catch (error) {
            return res.send({error: 'Campo indefinido.' })
        }
    },

    calculaIdade(dataNasc){ 
        try {
            if(dataNasc != "undefined") {
                var dataAtual = new Date();
                var anoAtual = dataAtual.getFullYear();
                var anoNascParts = dataNasc.split('-');
                var diaNasc =anoNascParts[2];
                var mesNasc =anoNascParts[1];
                var anoNasc =anoNascParts[0];
                var idade = anoAtual - anoNasc;
                var mesAtual = dataAtual.getMonth() + 1; 
                //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
                if(mesAtual < mesNasc){
                    idade--; 
                } else {
                //Se estiver no mes do nascimento, verificar o dia
                    if(mesAtual == mesNasc){ 
                        if(new Date().getDate() < diaNasc ){ 
                            //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                            idade--; 
                        }       
                    }
                } 
                return idade; 
            }
        }
        catch (error) {
            return error
        }
    },
}