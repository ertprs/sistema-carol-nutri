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
            kg: {
                type: String,
            },
            Obs: {
                type: String
            }
        },

        physicalExam: {
            drySkin: {
                type: String,
            },
            mucousMoisture: {
                type: String,
            },
            lossOfHair: {
                type: String,
            },
            edema: {
                type: String,
            },
            weakness: {
                type: String,
            },
            conjunctivalPallor: {
                type: String,
            },
            koilonychicNails: {
                type: String,
            },
            Obs: {
                type: String,
            }
        },

        disgestiveSystem: {
            dyspepsia: {
                type: String
            },
            stomachPains: {
                type: String
            },
            nausea: {
                type: String
            },
            vomiting: {
                type: String
            },
            dysphagia: {
                type: String
            },
            Obs: {
                type: String,
            }
        },

        intestinalChanges: {
            diarrhea: {
                type: String
            },
            cold: {
                type: String
            },
            Obs: {
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

    useOfMedicines: [{
        medicinesOrSupplements: {
            type: String,
        },
        dose: {
            type: String
        },
        schedule: {
            type: String,
        }
    }],

    physicalActivity: {
        yesNo: {
            type: String,
        },
        frequency: {
            type: String
        }
    },

    alcoholicBeverage: {
        yesNo: {
            type: String,
        },
        frequency: {
            type: String
        }
    },

    smoking: {
        type: String,
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

    dietaryEvaluation: [{
        mealAndScheduleAndLocal: {
            type: String,
        },
        foods: {
            type: String,
        },
        quantities: {
            type: String,
        }
    }],

    preferencesAndAversions: [{
        preferences: {
            type: String,
        },
        aversions: {
            type: String,
        }
    }],

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
        }
    }
})

ProtocolService.pre('save', async function(next){

    const energyExpend = this.anthropometricEvaluation.energyExpenditure;
    const { height, currentWeight, NAF } = this.anthropometricEvaluation;
    const { age, genre } = this.personalData;

    energyExpend.faoOms = functionEnergyExpend.faoOms(currentWeight, age, genre);
    energyExpend.HarrisBenedict = functionEnergyExpend.harrisBenedict(height, currentWeight, age, genre);
    energyExpend.iom = functionEnergyExpend.iom(height, currentWeight, age, genre, NAF);
    this.anthropometricEvaluation.dailyHydraulicNeed = (0.035 * currentWeight).toFixed(2);
    
})

// Definido o pluglin para poder utilizar a função paginate
ProtocolService.plugin(mongoosePaginate);

mongoose.model('ProtocolService', ProtocolService);