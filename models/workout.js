const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true
                },
                name: {
                    type: String,
                    trim: true
                },
                weight: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                duration: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ],
        totalDuration: {
            type: Number
        }
    }
)

const Workout = mongoose.model("Workout", exerciseSchema);

module.exports = Workout;
