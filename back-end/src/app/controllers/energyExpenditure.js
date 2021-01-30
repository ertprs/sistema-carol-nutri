
// Exportando as funcoes para serem usadas na aplicaçõa principal
module.exports = {
    // Funcão para a formula de Harrys Benedict para calcular o gasto energetico
    harrisBenedict(height, P, I, G) { // Altura, peso, idade e genero
        const A = height * 100 // Transformando metros para centimetros
        try {
            let GET = 0;
            if(typeof A !== undefined || typeof P !== undefined || typeof I !== undefined || typeof G !== undefined) {
                if(G == "Mulher") {
                    GET = 655 + (9.6 * P) + (1.9 * A) - (4.7 * I);
                }
                else if(G == "Homem"){
                    GET = 66 + (13.8 * P) + (5.0 * A) - (6.8 * I);
                }
                return GET.toFixed(2); // Retorna o valor com duas casas decimais
            } 
        }
        catch (error) {
            return res.send({error: 'Campo indefinido.' }) /// Caso algumas dad variaveis sejam indefinidas, retorna este erro
        }
    },
    // Função da formula FAO/OMS para calcular o gasto energetico
    faoOms(P, I, G) { // Peso, idade e genero
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
    // Funcao da formula de IOM para calcular o gasto energetico
    iom(height, P, I, G, NAF) { // Altura, peso, idade, genero e nivel de atividade fisica (NAF)
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
    // Calcular a idade de acordo com a data de nascimento do paciente
    calculaIdade(dataNasc){ 
        try {
            if(dataNasc != "undefined") {
                var dataAtual = new Date(); // Pega a data atual
                var anoAtual = dataAtual.getFullYear(); // Armazena o ano
                var anoNascParts = dataNasc.split('-'); // Cria um vetor para armazena o ano, mes e dia
                var diaNasc =anoNascParts[2]; // Armazena o dia
                var mesNasc =anoNascParts[1]; // Armazena o mes
                var anoNasc =anoNascParts[0]; // Armazena o ano
                var idade = anoAtual - anoNasc; // Calcula a idade de acordo com o ano atual e o ano de nascimento
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
    // Formula para calcular a densidade corporal do paciente
    densidadeCorporal(genero, triceps, supraIliaca, abdomen, subesCapular, coxa) {
        try {
            
            let dc = 0;
            
            if(typeof genero != "undefined" || typeof triceps != "undefined" || typeof supraIliaca != "undefined" || typeof abdomen != "undefined") {
                if(genero == "Mulher") {

                    dc = 1.1665-0.07063*Math.log10(subesCapular + supraIliaca + coxa)
                    
                }
                else if(genero == "Homem") {
                    
                    dc = 1.17136-0.06706*Math.log10(triceps + supraIliaca + abdomen)
                }
            }

            return dc.toFixed(2)
        }
        catch(error) {
            return error
        }
    },

    percentualDeGordura(dc) {
        try {
            let percentGordura = 0;
            if(typeof dc != "undefined") {

                percentGordura = (495 / dc) - 450

            }
            return percentGordura.toFixed(2)
        }
        catch(error) {
            return error
        }
    },

    pesoGordo(pesoTotal, percentGordura) {
        try {
            let pesoGord = 0;
            if(typeof pesoTotal != "undefined" || typeof percentGordura != "undefined") {

                pesoGord = pesoTotal * (percentGordura / 100)

            }
            return pesoGord.toFixed(2)
        }
        catch(error) {
            return error
        }
    },

    pesoMagro(pesoTotal, pesoGordo) {
        try {
            let pesoMagr = 0;
            if(typeof pesoTotal != "undefined" || typeof pesoGordo != "undefined") {

                pesoMagr = pesoTotal - pesoGordo

            }
            return pesoMagr.toFixed(2)
        }
        catch(error) {
            return error
        }
    },
}