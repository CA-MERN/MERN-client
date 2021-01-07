import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, useFormik } from "formik";
import {preferencesList, preferencesName } from "./list";
import getUserPreferences from "../../utils/get-user-preferences";
import {
  getPreference,
  updatePreference,
  getUsername,
  setUsername,
  getPref,
  setPref
} from "../../services/authServices";
import Logo from "../logo";
import Loading from "../loading";
import Card from "../imageParallax";
import styles from "./preferences.module.css";
import appstyles from "../../app.module.css";
import useStyles from "../styles/makeStyles.js";

import Kitchen from "../styles/imgs/kitchen.png";
import Fade from 'react-reveal/Fade';
//MATERIAL
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

//need to write input validation - boolean only
const validate = (values) => {
  const errors = {};
  return errors;
};

// preferences component, is passed:
// userPreferences which is state?
// actions: which is submit (to db) and get payload/data from db.
const Preferences = ({ actions, userPreferences, userLoggedIn }) => {
  const classes = useStyles();
   let history = useHistory();
   const [checked, setChecked] = useState(null);
   const [loading, setloading] = useState({ done: false });


const text = {
      color: 'red',
      marginLeft: "10px",

    }; 

  // On page load- This is calling the DB get request to get the initial user preference data
  useEffect(() => {
    getPreference(getUsername())
      .then((pref) => {
        setPref({ ...pref })
        actions.updatePreferences(JSON.parse(getPref()));
        setChecked(JSON.parse(getPref()))
        console.log("check local", JSON.parse(getPref()))
        console.log("check redux", userPreferences)
      })
      .catch((error) => {
        console.log("errors");
        console.log(error.response);
        if (error.response && error.response.status === 404)
          //formik.setStatus("Error getting pref information ");
          toast.error("Error getting pref information")
        else
          // formik.setStatus(
          //   "There may be a problem with the server. Please try again after a few moments."
          // );
          toast.error("There may be a problem with the server. Please try again after a few moments.")
      });
        setTimeout(() => {
        setloading({ done: true })
        console.log("check loading done")  
        }, 2500);
  }, []);


  const formik = useFormik({
    //calls boolean validation
    validate,
  });

  function submitHandler (values) {
      console.log("check",  values )
          updatePreference({ ...values }, getUsername())
            .then((pref) => {
              console.log(pref);
              setPref(pref)
              actions.updatePreferences(pref);
              console.log("test returned", JSON.parse(getPref()))
              history.push("/preferences/"+getUsername())
              toast.success("Preferences Updated!")
               
            })
            .catch((error) => {
              toast.error("Oh no, error!")
              if (error.response && error.response.status === 404)
                //formik.setStatus("Error getting pref information ");
                toast.error("On no, error updated preferences!")
              else
                // formik.setStatus(
                //   "There may be a problem with the server. Please try again after a few moments."
                // );
                 toast.error("There may be a problem with the server. Please try again after a few moments.")
            });
    }

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Logo />
          <Grid item xs={12} spacing={2}>
            <h1 class={appstyles.headings}>Preferences</h1>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div class={appstyles.layoutContent}>
          {!loading.done ? (
           <Loading/>
              ) : (  
            <> 
                    <div className={styles.prefBox}>
                   
                          <div class={styles.formBox}>

                                  <Formik

                                    initialValues={{ "vegetarian": userPreferences.vegetarian,
                                      "vegan": userPreferences.vegan,
                                      "glutenFree": userPreferences.glutenFree,
                                      "dairyFree": userPreferences.dairyFree,
                                      "veryHealthy": userPreferences.veryHealthy,
                                      "cheap": userPreferences.cheap,
                                      "veryPopular": userPreferences.veryPopular,
                                      "sustainable": userPreferences.sustainable}}
                          
                                      onSubmit={async (values) => {
                                        await sleep(500);
                                        submitHandler(values)
                                      }}
                                >
                                  {({ values }) => (
                                    <Form>
                                      {/* form maps over list in ./list.js, can update more easily if needed */}
                                      {preferencesList.map((preference, index) => (
                                  
                                              <label key={index}>
                                                <Field  type="checkbox" name={preference}/>  
                                                 <span class={styles.prefItem}>{preferencesName[index]}</span>  
                                              </label>
                                    
                                       ))}
                                      <Button
                                        class={styles.updateButton}
                                        type="submit"   
                                      >
                                        Update Preferences
                                      </Button>
                                    </Form>
                                  )}
                                </Formik>
                        </div>
                      <div class={styles.imgBox}>
                        <img alt="Picture of cartoon kitchen" src={Kitchen} />
                        <Card/>
                      </div>
                    </div>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

//checks state
const mapStateToProps = (state) => ({
  userPreferences: state.userPreferences.preferences,
  userLoggedIn: state.userLoggedIn.username,
});

//updates state
const mapDispatchToProps = (dispatch) => ({
  actions: {
    updatePreferences: (data) =>
      dispatch({ type: "updatePreferences", payload: data }),
    submit: () => dispatch({ type: "submit" }),
  },
});

//sends to reducer
export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
