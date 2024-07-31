import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

export const Recipe = mongoose.model('Test-Recipe', RecipeSchema)