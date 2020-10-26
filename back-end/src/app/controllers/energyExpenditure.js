

module.exports = {

    harrisBenedict(A, P, I, G) {
        let GET = 0;
        if(G == "Feminino") {
            GET = 655 + (9.6 * P) + (1.9 * A) - (4.7 * I);
        }
        else {
            GET = 66 + (13.8 * P) + (5.0 * A) - (6.8 * I);
        }
        return GET.toFixed(2);
    },

    faoOms(P, I, G) {
        var GET = 0;
        if(G == "Feminino") {
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
        else {
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
    },

    iom(A, P, I, G, NAF) {
        let GET = 0;
        if(G == "Feminino") {
            if(I >= 9 && I <= 18) {
                GET = 135.3 - (30.8 * I) + (NAF * (10.0 * P + 934 * A)) + 25;
            }
            else if(I >= 19) {
                GET = 354 - (6.91 * I) + (NAF * (9.36 * P + 726 * A))
            }
        }
        else {
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