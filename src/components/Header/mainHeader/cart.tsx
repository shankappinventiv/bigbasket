import React from 'react'
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import cartLogo from '../../../assets/header.css.svg'


const styles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
        display: "flex",
        padding: '19px 12px',
        background: '#f2f2f2',
        border: '2px solid #f2f2f2',
        cursor: 'pointer',
        alignItems: 'center',
        '&:hover':{
            background: '#e6e6e6',
        },
        '& i':{
            width: '40px',
            display: "flex",
            height: '28px',
            backgroundPositionX: '2.91708%',
            backgroundPositionY: '2.02361%',
            backgroundImage: `url(${cartLogo})`,
        }
    },
    basket:{
        display: "flex",
        flexDirection: 'column',
        marginLeft: 5,
        color: '#4d4d4d',
        font: '13px ProximaNovaA-Semibold',
        fontWeight: 400,
    },
  }))
export default function Cart() {
    const classes = styles();
    return (
        <div className = { classes.container}>
            <i>

            </i>
            <div className = { classes.basket}>
                <span>My Basket</span>
                <span>0 Items</span>
            </div>
        </div>
    )
}
