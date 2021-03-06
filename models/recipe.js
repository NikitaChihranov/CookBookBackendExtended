let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: String,
    photo: String,
    text: String,
    author: String,
    dateOfCreation: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema);