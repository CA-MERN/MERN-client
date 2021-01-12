import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

import SearchRecipeButton from "../searchButton";
import fridge from "../styles/imgs/fridgebackgroundother.jpg";
import pantry from "../styles/imgs/pantrybackground.jpg";
import recipe from "../styles/imgs/recipeimage.jpg";
import pref from "../styles/imgs/supermarket.jpg";
import recipelist from "../styles/imgs/recipelist2.jpg";
import styles from "./carousel.module.css";
import { Slide } from 'material-auto-rotating-carousel'


const { lightGreen } = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;



const Carousel = ({actions}) => {
    let history = useHistory();
const [state, setState] = useState({ open: false });

 function onCloseHandler (){
       setState({ open: false })
       history.push("/");
       actions.setModalOpen("register")
    
 }

return (
        <div style={{ position: 'relative', width: '100%', height: 30 }}>
        <Button class={styles.ButtonOutline} onClick={() => setState({ open: true })}>Where to start?</Button>
        <AutoRotatingCarousel
            label='Get started!'
            open={state.open}
            onClose={{onCloseHandler}}
            onStart={() => setState({ open: false })}
            style={{ position: 'absolute' }}
        >
            <Slide
            media={<img src={fridge} class={styles.slideImage} />}
            mediaBackgroundStyle={{ backgroundColor: "white"}}
            style={{ backgroundColor: lightGreen[600]  }}
            title='Add Ingredients to your Fridge'
            subtitle='Cheese, bread, chicken, soy sauce.. any ingredients in your fridge!'
            />
            <Slide
            media={<img src={pantry} class={styles.slideImage}   />}
            mediaBackgroundStyle={{ backgroundColor: "white" }}
            style={{ backgroundColor: lightGreen[600] }}
            title='Add staples to your Pantry'
            subtitle='Save your usual pantry staples!'
            />
            <Slide
            media={<img src={pref} class={styles.slideImage}  />}
              mediaBackgroundStyle={{ backgroundColor: "white" }}
            style={{ backgroundColor: lightGreen[600] }}
            title='Select any diet preferences.'
            subtitle='Gluten free, dairy free? You can decide! '
            />
            <Slide
            media={<img src={recipe} class={styles.slideImage} />}
             mediaBackgroundStyle={{ backgroundColor: "white" }}
            style={{ backgroundColor: lightGreen[600] }}
            title='Browse recipes!'
            subtitle='We will show you recipes that include the ingredients from your fridge!'
            />
            <Slide
            media={<img src={recipelist} class={styles.slideImage} />}
            mediaBackgroundStyle={{backgroundColor: "white"}}
            style={{ backgroundColor: lightGreen[600] }}
            title='Save them for later!'
            subtitle='Add recipes to your saved collection so you can use them again!'
            />
        </AutoRotatingCarousel>
        </div>
    )

};



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

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);


