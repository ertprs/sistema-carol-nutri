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
    personalData: {
        name: {
            type: String,
            required: true,
        },
        dateBirth: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        maritalStatus: {
            type: String,
            required: true
        },
        profession: {
            type: String,
            required: true
        },
        clinicalHistory: {
            type: String,
            required: true,
        },
        objective: {
            type: String,
            required: true
        }
    },

    nutritionalSemiology: {
        weightChanges: {
            weightLoss: {
                type: Boolean,   
            },
            weightAgain: {
                type: Boolean,
            },
            kg: {
                type: String,
                required: true
            },
            Obs: {
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
            Obs: {
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
            Obs: {
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
            Obs: {
                type: String,
            }
        }
    },

    waterConsumption: {
        type: String,
        required: true
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
        yesNo: {
            type: Boolean,
            required: true,
        },
        frequency: {
            type: String
        }
    },

    alcoholicBeverage: {
        yesNo: {
            type: Boolean,
            required: true,
        },
        frequency: {
            type: String
        }
    },

    smoking: {
        type: Boolean,
        required: true
    },

    schedules: {
        wakeUp: {
            type: String,
            required: true
        },
        sleeps: {
            type: String,
            required: true
        },
        physicalActivity: {
            type: String,
            required: true
        }
    },

    dietaryEvaluation: {
        mealAndScheduleAndLocal: {
            type: String,
            required: true
        },
        foods: {
            type: String,
            required: true
        },
        quantities: {
            type: String,
            required: true
        }
    },

    preferencesAndAversions: {
        preferences: {
            type: String,
            required: true
        },
        aversions: {
            type: String,
            required: true
        }
    },

    foodIngestion: {
        inappetence: {
            type: String,
            required: true
        },
        hyperphagia: {
            type: String,
            required: true
        }
    },

    anthropometricEvaluation: {
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        currentWeight: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        imc: {
            type: Number,
            required: true
        },
        waist: {
            type: Number,
            required: true
        },
        arm: {
            type: Number,
            required: true
        },
        hip: {
            type: Number,
            required: true
        },
        bicepsSkinfold: {
            type: Number,
            required: true
        },
        tricepsSkinfold: {
            type: Number,
            required: true
        },
        mediumAxillarySkinfold : {
            type: Number,
            required: true
        },
        breastplateSkinfold: {
            type: Number,
            required: true
        },
        suprailiacSkinfold: {
            type: Number,
            required: true
        },
        subscapularSkinfold: {
            type: Number,
            required: true
        },
        abdominalSkinfold: {
            type: Number,
            required: true
        },
        thighSkinfold: {
            type: Number,
            required: true
        },
        calfSkinfold: {
            type: Number,
            required: true
        },
        ThoracicSkinfold: {
            type: Number,
            required: true
        },
        calf: {
            type: Number,
            required: true
        },
        NAF: {
            type: Number,
            required: true
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