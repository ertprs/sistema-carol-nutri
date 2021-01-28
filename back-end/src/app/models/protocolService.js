const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const functionEnergyExpend = require('../controllers/energyExpenditure');

const ProtocolService = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    PersonalInformation: {
        dateBirth: {
            type: String,
        },
        maritalStatus: {
            type: String,
        },
        IntestinalTransit:{
            type: String,
        },
        sleepQuality: {
            type: String,
        },
        Weight: {
            type: String,
        },
        height: {
            type: String,
        },
        UrinaryStaining:{
            type: String,
        },
        genre: {
            type: String,
        },
        profession: {
            type: String,
        },
        clinicalHistory: {
            type: String,
        },
        objective: {
            type: String,
        }
    },

    nutritionalSemiology: {
        weightChanges: {
            kgChanges: {
                type: String,
            },
            obsWeight: {
                type: String
            }
        },

        physicalExam: {
            drySkin: {
                type: Boolean,
            },
            mucousMoisture: {
                type: Boolean,
            },
            lossOfHair: {
                type: Boolean,
            },
            edema: {
                type: Boolean,
            },
            weakness: {
                type: Boolean,
            },
            conjunctivalPallor: {
                type: Boolean,
            },
            koilonychicNails: {
                type: Boolean,
            },
            obsPhysicalExam: {
                type: String,
            }
        },

        disgestiveSystem: {
            dyspepsia: {
                type: Boolean
            },
            stomachPains: {
                type: Boolean
            },
            nausea: {
                type: Boolean
            },
            vomiting: {
                type: Boolean
            },
            dysphagia: {
                type: Boolean
            },
            obsDisgestiveSystem: {
                type: String,
            }
        },

        intestinalChanges: {
            diarrhea: {
                type: Boolean
            },
            cold: {
                type: Boolean
            },
            obsIntestinalChanges: {
                type: String,
            }
        }
    },

    waterConsumption: {
        type: String,
    },

    allergiesAndIntolerances: {
        foodAllergy: {
            type: String,
        },
        otherAllergies: {
            type: String
        },
        intolerances: {
            type: String,
        }
    },

    useOfMedicines: {
        medicinesOrSupplements: {
            type: String,
        },
        dose: {
            type: String
        },
        schedule: {
            type: String,
        }
    },

    physicalActivity: {
        physicalActivityYesNo: {
            type: Boolean,
        },
        frequencyActivity: {
            type: String
        }
    },

    alcoholicBeverage: {
        yesNoBeverage: {
            type: Boolean,
        },
        frequencyBeverage: {
            type: String
        }
    },

    smoking: {
        type: Boolean,
    },

    schedules: {
        wakeUp: {
            type: String,
        },
        sleeps: {
            type: String,
        },
        physicalActivity: {
            type: String,
        }
    },

    dietaryEvaluation: {
        mealAndScheduleAndLocal: {
            type: String,
        },
        foods: {
            type: String,
        },
        quantities: {
            type: String,
        }
    },

    preferencesAndAversions: {
        preferences: {
            type: String,
        },
        aversions: {
            type: String,
        }
    },

    foodIngestion: {
        inappetence: {
            type: String
        },
        hyperphagia: {
            type: String,
        }
    },

    anthropometricEvaluation: {
        date: {
            type: String,
        },
        currentWeight: {
            type: String,
        },
        imc: {
            type: Number,
        },
        waist: {
            type: Number,
        },
        arm: {
            type: Number,
        },
        hip: {
            type: Number,
        },
        bicepsSkinfold: {
            type: Number,
        },
        tricepsSkinfold: {
            type: Number,
        },
        mediumAxillarySkinfold : {
            type: Number,
        },
        breastplateSkinfold: {
            type: Number,
        },
        suprailiacSkinfold: {
            type: Number,
        },
        subscapularSkinfold: {
            type: Number,
        },
        abdominalSkinfold: {
            type: Number,
        },
        thighSkinfold: { 
            type: Number,
        },
        calfSkinfold: {
            type: Number,
        },
        ThoracicSkinfold: {
            type: Number,
        },
        calf: {
            type: Number,
        },
        NAF: {
            type: Number,
        },
        energyExpenditure: {
            HarrisBenedict: {
                type: Number,
            },
            faoOms: {
                type: Number,
            },
            iom: {
                type: Number
            }  
        },
        dailyHydraulicNeed: {
            type: Number
        },
        bodyDensity: {
            type: Number
        },
        fatPercentage: {
            type: Number
        },   
        fatWeight: {
            type: Number
        },
        thinWeight: {
            type: Number
        }
    },
    consultaDate: {
        type: String
    }
})

ProtocolService.pre('save', async function(next){

    // Faz uma desestruturacao na variavel anthropometricEvaluation e pega apenas as variaveis desejadas
    const { currentWeight, NAF, tricepsSkinfold, subscapularSkinfold, suprailiacSkinfold, thighSkinfold, abdominalSkinfold } = this.anthropometricEvaluation;
    // Faz uma desestruturacao na variavel PersonalInformation e pega apenas as variaveis desejadas
    const { dateBirth, genre, height, Weight } = this.PersonalInformation;

    // Calcula a idade de acordo com a data de nascimento
    const age = functionEnergyExpend.calculaIdade(dateBirth)
    // Calcular a densidade corporal do paciente
    const dc =  functionEnergyExpend.densidadeCorporal(genre, tricepsSkinfold, suprailiacSkinfold, abdominalSkinfold, subscapularSkinfold, thighSkinfold)
    // Calcular o percentual de gordura
    const percentGordura = functionEnergyExpend.percentualDeGordura(dc)
    // Calcular o peso gordo
    const pesoGordo = functionEnergyExpend.pesoGordo(currentWeight, percentGordura)
    // Calcular o peso magro
    const pesoMagro = functionEnergyExpend.pesoMagro(currentWeight, pesoGordo)

    // Função da formula FAO/OMS para calcular o gasto energetico
    this.anthropometricEvaluation.energyExpenditure.faoOms = functionEnergyExpend.faoOms(currentWeight, age, genre)
    // Funcão para a formula de Harrys Benedict para calcular o gasto energetico
    this.anthropometricEvaluation.energyExpenditure.HarrisBenedict = functionEnergyExpend.harrisBenedict(height, currentWeight, age, genre);
    // Funcao da formula de IOM para calcular o gasto energetico
    this.anthropometricEvaluation.energyExpenditure.iom = functionEnergyExpend.iom(height, currentWeight, age, genre, NAF);
    // Armazeno o calculo feito de necessidade hidrica do paciente
    this.anthropometricEvaluation.dailyHydraulicNeed = (0.035 * currentWeight)
    // Calculo do imc do paciente
    this.anthropometricEvaluation.imc = (Weight / (height * height)).toFixed(2)
    // Armazena o calculo feito de densidade corporal no banco de dados
    this.anthropometricEvaluation.bodyDensity = dc
    // Armazena o calculo feito do percentual de gordura no banco de dados
    this.anthropometricEvaluation.fatPercentage = percentGordura
    // Armazena o calculo feito de peso gordo no banco de dados
    this.anthropometricEvaluation.fatWeight = pesoGordo
    // Armazena o calculo feito de peso magro no banco de dados
    this.anthropometricEvaluation.thinWeight = pesoMagro

})

// Definido o pluglin para poder utilizar a função paginate
ProtocolService.plugin(mongoosePaginate);
// O primeiro argumento é o nome singular da coleção para a qual o model se destina.
mongoose.model('ProtocolService', ProtocolService);