import mongoose, {Schema, models, model} from "mongoose";

const PromptSchema = new Schema({
    creater: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required."]
    },
    tag: {
        type: String,
        required: [true, "tag is required."]
    }
});

const Prompt = models.Prompt || model('Prompt',PromptSchema);

export default Prompt;