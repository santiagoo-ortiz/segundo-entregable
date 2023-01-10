const Cocktail = ( {data} ) => {

    console.log(data)

    return (

        <article className="drink-card">

            
                <div className="cocktail-images">
                <img src={data.strDrinkThumb} alt="" />             
                </div>

             
               
            <div>

            <h3 className="tittle">  {data.strDrink} </h3>

            <p className="titles"> <strong>Category: </strong>  </p>

            <p className="text"> {data.strCategory} </p>


            <p className="titles"> <strong> Instructions: </strong> </p>

            <p className="text"> {data.strInstructions} </p>

            <p className="titles"> <strong>Type of glass: </strong> </p>

            <p className="text">  {data.strGlass} </p>

            </div>


          



        </article>
    )
}

export default Cocktail