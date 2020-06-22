import React from 'react'
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import Arrow from "../../assets/header.css.svg"

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
        display: "flex",
        borderTop: '1px solid #f2f2f2',
        borderBottom: '1px solid #eaeaea',
        borderRight: '1px solid #eaeaea',
        // backgroundColor: '#84c225',
        alignItems: 'center',
    },
    shopByCategry:{
        backgroundColor: '#84c225',
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 15px',
        boxSizing: 'border-box',
        width: '245px !important',
        '& i':{
            display: "flex",
            width: '10px',
            height: '5.89px',
            backgroundImage: `url(${Arrow})`,
            backgroundPositionX: '1.3986%',
            backgroundPositionY: '0.975437%',
        },
        '& span':{
            textTransform: 'uppercase',
            font: '15px ProximaNovaA-Bold!important',
            // padding: '8px 6px',
            color: 'white',
            fontWeight: 900,
            lineHeight: '20px!important',
        },
    },
    offer:{
        padding: '10px 15px',
        cursor: 'pointer',
        '&:hover':{
            background: '#72a020',
            '&:span':{
            color: 'white !important',
            }
        },
        display: "flex",
        '& i':{
            display: "flex",
            width: '15px',
            height: '15px',
            backgroundImage: `url(${Arrow})`,
            backgroundPosition: '60.281858250815965% 60.23102310231023%',
            marginRight: '8px',
            // backgroundPositionY: '0.975437%',
        },
        '& span':{
            color: '#666',
            fontSize: 14,
            '&:hover':{
                // background: '#72a020',
                color: 'white !important',
            },
        }
    },

  }))

export default function Index() {
    const classes = styles();
    return (
        <div className={classes.container}>
            <div className = { classes.shopByCategry}>
                <span>Shop By CateGory</span>
                <i></i>
            </div>
            <div className = { classes.offer}>
                <i></i>
                <span>OFFERS</span>
            </div>
        </div>
    )
}
