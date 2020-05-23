import React from 'react'

const Recipes = ({recipes}) => {
    return (
        <div>
            {recipes.map((recipe) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{recipe.recipe_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{recipe.recipe_id}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Recipes