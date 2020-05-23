import React from 'react'

const Recipes = ({recipes}) => {
    console.log(recipes)
    return (
        <div>
            {recipes.map((r, i) => (
                <div class="card" key={i}>
                    <div class="card-body">
                        <h5 class="card-title">{r.recipe_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{r.recipe_id}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Recipes