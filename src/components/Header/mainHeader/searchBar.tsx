import React from 'react'
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import searchLogo from '../../../assets/header.css.svg'

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
        border: '1px solid #888',
        display: "flex",
        '&:focus':{
            border: '1px solid red !important',
        },
        '& input': {
            width: '94%',
            border: 'none',
            outline: 'none',
            paddingLeft: '10px',
            
        },
        '& span':{
            width: '20px',
            display: "flex",
            height: '20px',
            backgroundPositionX: '65.2482%',
            backgroundPositionY: '65.7238%',
            backgroundImage: `url(${searchLogo})`,
            backgroundColor: '#84c225',
            padding: '5px',
            '&:hover':{
                backgroundColor: '#72a020',
            }
        },
    },
  }))

export default function SearchBar() {
    const classes = styles();
    return (
        <div className = {classes.container}>
            <input type = 'text' placeholder = 'Search for products...'/><span></span>
        </div>
    )
}
