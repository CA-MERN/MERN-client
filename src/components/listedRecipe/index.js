import React,{useState} from 'react'
import { connect } from "react-redux";
import styles from "./listRecipe.module.css";
import useStyles from "../styles/makeStyles.js";

//MATERIAL
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Loading from "../loading";


const ListedRecipe = ({userLoggedIn, recipe, saveRecipe, savedType, removeSavedRecipe}) => {
  const classes = useStyles();
  const [addRecipe, setAddRecipe] = useState("");
  const [loading, setloading] = useState({ done: false });
  const {id, usedIngred, missedIngred, title, readyInMinutes, servings, image} = recipe 

  let convert = Math.floor(readyInMinutes / 60) + " hour and " +  readyInMinutes % 60 + " minutes"

  async function collectRecipeHandler () {
      const newRecipe = {
                  username: userLoggedIn,
                  recipeID: 1234 ,
                  title: "Test",
                  readyInMinutes: 1234,
                  servings: 2,
                  sourceUrl: "Test",
                  image: "Test",
                  cuisines: ["Test"],
                  dishTypes: ["Test"],
                  diets: ["Test"],
                  instructions:  ["Test"]
              }
      // const newRecipe = {
      //             username: userLoggedIn,
      //             _id: addRecipe.id ,
      //             title: addRecipe.title,
      //             readyInMinutes: addRecipe.readyInMinutes,
      //             servings: addRecipe.servings,
      //             sourceUrl: recipe,
      //             image: addRecipe,
      //             cuisines: addRecipe,
      //             dishTypes: addRecipe,
      //             diets: addRecipe,
      //             instructions:  addRecipe,
      //         }
        setloading({ done: false });
        await saveRecipe(newRecipe)
        setTimeout(() => {
          setloading({ done: true });
          console.log("check loading done") 
          }, 5000)
        console.log("hit here")
  }

  

   if (savedType ==="saved recipes") {
   //This is for save Recipe page
    return (
            <div>
                {/* {errorMessage && <ErrorText>{errorMessage}</ErrorText>} */}
                <Grid item sm spacing={1}   wrap="wrap">
      
                  <Paper className={classes.paper} variant="outlined" > 
                
                          <div class={styles.listItem}>
                                  <img alt="recipe" src={image} />        
                                  <h3>{title}</h3>
                                  <p>Serves: {servings}</p>
                                  <p>Prep time: {convert}</p>
                                </div>
                            <Button variant="outlined" class={styles.removeButton} onClick={removeSavedRecipe}>Remove</Button>
                    </Paper>  
             
                </Grid>
            </div>)

   } else {
  //This is for browse Recipe page
    return (
        <div>
            {/* {errorMessage && <ErrorText>{errorMessage}</ErrorText>} */}
           <Grid item sm spacing={1}   wrap="wrap">
                <Paper className={classes.paper} variant="outlined" > 
                <div class={styles.listItem}>
                    <div>You have {usedIngred}/{usedIngred+ missedIngred} ingredients! </div>
                    <img alt="recipe" src={image} />        
                    <h3>{title}</h3>
                    <p>Serves: {servings}</p>
                    <p>Prep time: {convert}</p>
                </div>
                <Button variant="outlined" class={styles.savedButton} onClick={collectRecipeHandler}>Save Recipe!</Button>
               </Paper>
        </Grid>
        </div>
    )
    }
}

const mapStateToProps = (state) => ({
  userLoggedIn: state.userLoggedIn.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setModalOpen: (modalId) => {
      dispatch({ type: "openModal", payload: modalId });
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListedRecipe);

