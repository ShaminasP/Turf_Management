import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema(
    {
        turf: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "turfs",
            required: true
        },
        balance: {
            type: Number,
            required: true,
            default: 0
        },
        withdrawn: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const paymentModel = mongoose.model('payments', paymentSchema)


export default paymentModel