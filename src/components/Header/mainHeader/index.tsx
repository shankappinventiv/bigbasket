import React from 'react'
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import mainLogo from '../../../assets/bb_logo.png'
import bigStar from '../../../assets/All_bbstar_DT_1_150x30_23rdOct.png'
import SearchBar from './searchBar';
import Cart from './cart';



const styles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBar:{
       width: "51%"
    },
    mainLogo:{},
    bbStar:{},
    cart:{}
  }))

export default function Index() {
    const classes = styles()
    return (
        <div className = { classes.container }>
            <figure className = {classes.mainLogo}>
                <img src = {mainLogo} alt = {''} />
            </figure>
            <div className = { classes.searchBar}>
                {/* <input type = 'text' /> */}
                <SearchBar />
            </div>
            <figure className = {classes.bbStar}>
                <img src = {bigStar} alt = {''} />
            </figure>
            <div className = {classes.cart}>
                <Cart />
            </div>
        </div>
    )
}
