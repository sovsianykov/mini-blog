import React, {useEffect, useState} from "react";
import ArticleCard from './../../../components/ArticeCard/ArticleCard'
import firebase from '../../../Config/firbase';
import './style.scss'
import {Grid} from "@material-ui/core";

const db = firebase.firestore()

const Main =() => {
    const[isLoaded, setIsLoaded] =useState(false)
    const[articles, setArticles] =useState([])
    useEffect(() =>{
         getMyArticles()
        console.log(articles)
        console.log(db.collection('Article'))
    },[articles, isLoaded])
    const getMyArticles =() => {
       db
           .collection('Article')
           .limit(8)
           .get()
           .then(docs =>{
               if (!docs.empty) {
                   let allArticles = []
                   docs.forEach(doc =>{
                       const article = {
                           id : doc.id,
                           ...doc.data()

                       }
                       allArticles.push(article)
                   })
                   setArticles(allArticles)
                   setIsLoaded(true)
                   console.log(articles)
               }
           })
    }
    return (
        <div>
          <div className="toolbar">
              toolbar
          </div>
            <Grid container justify='center'>
                { isLoaded ? articles.map((article,i) =>(
                    <Grid item xs={12} sm={3} md={3} key={i}>
                        <ArticleCard data = {article}/>
                    </Grid>
                )) : ''


                }
            </Grid>
        </div>
    )
}
export default Main