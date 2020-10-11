const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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
            type: String,
            required: true
        },
        height: {
            type: String,
            required: true
        },
        imc: {
            type: String,
            required: true
        },
        waist: {
            type: String,
            required: true
        },
        arm: {
            type: String,
            required: true
        },
        hip: {
            type: String,
            required: true
        },
        bicepsSkinfold: {
            type: String,
            required: true
        },
        tricepsSkinfold: {
            type: String,
            required: true
        },
        mediumAxillary : {
            type: String,
            required: true
        },
        breastplate: {
            type: String,
            required: true
        },
        suprailiac: {
            type: String,
            required: true
        },
        subscapular: {
            type: String,
            required: true
        },
        abdominal: {
            type: String,
            required: true
        },
        thigh: {
            type: String,
            required: true
        },
    },
})

// Definido o pluglin para poder utilizar a função paginate
ProtocolService.plugin(mongoosePaginate)

mongoose.model('ProtocolService', ProtocolService);