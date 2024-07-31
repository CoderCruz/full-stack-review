import express from 'express';
import { Recipe } from '../model/recipeModel.js'
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        return res.status(200).json({
            count: recipes.length,
            data: recipes
        })   
    } catch (error) {
        console.log(error)
        res.status(500).send({message: `ERROR OCCURED ${error}`})
    }
})

router.post('/', async (req, res) => {
    const {title, ingredients, instructions, author} = req.body;
    if(!title || !ingredients || !instructions || !author) 
        res.status(400).send({message: 'Send all required fields'})

    try {
        const newRecipe = {
            title,
            ingredients,
            instructions,
            author
        }

        const recipe = await Recipe.create(newRecipe)
        return res.status(201).send(recipe)
    } catch (error) {
        console.log(error)
        res.status(500).send({message: `ERROR OCCURED ${error}`})
    }
})

router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await Recipe.findByIdAndUpdate(id, req.body)
        res.status(200).send({ message: 'Recipe has been updated'})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: `ERROR OCCURED ${error}`})
    }
})

router.delete('/:id', async(req, res) => {
        try {
            const { id } = req.params;
            const results = await Recipe.findByIdAndDelete(id)
            if(!results) return res.status(404).json({message: 'Recipe not found'})
            return res.status(200).send({message: 'Recipe deleted successfully'})
        } catch (error) {
            console.log(error)
            res.status(500).send({message: `ERROR OCCURED ${error}`})
        }
        
})

export default router;