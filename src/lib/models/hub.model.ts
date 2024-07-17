import {Schema, model, models} from 'mongoose'

const HubSchema = new Schema({
    hubName: {
        type: String,
        required: true,
    },
    hubDescription: {
        type: String,
        required: true,
    },
    people: {
        type: Number,
        required: true
    },
    m_invest: {
        type: Number,
        required: true
    },
    invest_period: {
        type: Number,
        required: true
    },
    t_invest: {
        type: String,
        required: true
    },
    hubOwner: {
        type: Schema.Types.ObjectId, ref:"User"
    }
});

const Hub = models?.Hub || model("Hub", HubSchema);

export default Hub;