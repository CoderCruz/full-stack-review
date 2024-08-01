import axios from 'axios'


export async function getRecipesData() {
    try {
        const response = await axios.get('http://localhost:5555/recipes/')
        return response.data;
    } catch (error) {
        console.log(`API ERROR ${error}`)
    }
}

export async function postRecipeData(newRecipe) {
    try {
        axios.post('http://localhost:5555/recipes/', newRecipe)
    } catch (error) {
        console.log(`API ERROR ${error}`)
    }
}

export async function updateRecipeData(id, newRecipe) {
    try {
        axios.put(`http://localhost:5555/recipes/${id}`, newRecipe)
    } catch (error) {
        console.log(`API ERROR ${error}`)
    }
}

export async function deleteRecipeData(id) {
    //id
    try {
        axios.delete(`http://localhost:5555/recipes/${id}`)
    } catch (error) {
        console.log(`API ERROR ${error}`)
    }
}