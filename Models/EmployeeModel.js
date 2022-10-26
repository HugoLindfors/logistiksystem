import mongoose from "mongoose";

const EMPLOYEE_SCHEMA = new mongoose.Schema({

    firstName: {

        type: String,
        required: true,
        lowercase: false

    },

    lastName: {

        type: String,
        required: true,
        lowercase: false

    },

    username: {

        type: String,
        unique: true,
        required: true,
        lowercase: false

    },

    sex: { // allthough commonly dismissed as political correctness or wokeness, scientifically, biological sex is different from gender

        type: String,
        required: true,
        lowercase: true

    },

    age: {

        type: Number,
        required: true,
        lowercase: false

    },

    schedule: {

        sunday: {

            isWorking: {

                type: Boolean,
                required: true,
                default: false
            },

            startTime: {

                type: String,
                default: null
            },

            endTime: {

                type: String,
                default: null
            }
        },

        monday: {

            isWorking: {

                type: Boolean,
                required: true,
                default: true
            },

            workingHours: {

                startTime: {

                    type: String,
                    default: "9 AM"
                },

                endTime: {

                    type: String,
                    default: "5 PM"
                }
            }
        },

        tuesday: {

            isWorking: {

                type: Boolean,
                required: true,
                default: true
            },

            workingHours: {

                startTime: {

                    type: String,
                    default: "9 AM"
                },

                endTime: {

                    type: String,
                    default: "5 PM"
                }
            }
        },

        wednesday: {

            isWorking: {

                type: Boolean,
                required: true,
                default: true
            },

            workingHours: {

                startTime: {

                    type: String,
                    default: "9 AM"
                },

                endTime: {

                    type: String,
                    default: "5 PM"
                }
            }
        },

        thursday: {

            isWorking: {

                type: Boolean,
                required: true,
                default: true
            },

            workingHours: {

                startTime: {

                    type: String,
                    default: "9 AM"
                },

                endTime: {

                    type: String,
                    default: "5 PM"
                }
            }
        },

        friday: {

            isWorking: {

                type: Boolean,
                required: true,
                default: true
            },

            workingHours: {

                startTime: {

                    type: String,
                    default: "9 AM"
                },

                endTime: {

                    type: String,
                    default: "5 PM"
                }
            }
        },

        saturday: {

            isWorking: {

                type: Boolean,
                required: true,
                default: false
            },

            workingHours: {

                startTime: {

                    type: String,
                    default: null
                },

                endTime: {

                    type: String,
                    default: null
                }
            }
        },

    },

    role: { // roles like driver, picker and eventual future additions

        type: String,
        required: true,
        lowercase: true

    }
});

export default mongoose.model("Employee", EMPLOYEE_SCHEMA);

/// employees   ->   employee   ->   name
///                             ->   sex
///                             ->   age
///                             ->   schedule   ->   working days   ->   working day   ->   working hours
///                             ->   role