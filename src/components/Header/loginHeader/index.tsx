import React from 'react'
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import callLogo from "../../../assets/header.css.svg"

const styles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
        display: "flex",
        color: '#666',
        justifyContent: 'flex-end',
        lineHeight: 2,
        padding: '5px 0px'
    },
    helpLine:{
        listStyle: "none",
        display: "flex",
        alignItems:"center",
        marginRight: 15,
        '&:hover':{
            // color: '#84c225',
            '& li':{
                color: '#84c225'
            },
        },
        '& li':{
            cursor: 'pointer',
            font: '13px ProximaNovaA-Regular',
            '&:nth-child(1)':{
                width: "15px",
                height: "15px",
                backgroundImage: `url(${callLogo})`,
                backgroundPositionX: '21.9718%',
                backgroundPositionY: '19.802%',
                marginRight: 5,
                '& svg':{
                '&:hover':{
                    color: '#84c225'
                }
                }
            },
        }
    },
    location:{
        listStyle: "none",
        display: "flex",
        alignItems:"center",
        marginRight: 15,
        '&:hover':{
            // color: '#84c225',
            '& li':{
                color: '#84c225'
            },
        },
        '& li':{
            cursor: 'pointer',
            font: '13px ProximaNovaA-Regular',
            '&:nth-child(1)':{
                width: "15px",
                height: "15px",
                backgroundImage: `url(${callLogo})`,
                backgroundPositionX: '21.9718%',
                backgroundPositionY: '19.802%',
                marginRight: 7,
            },
        }
    },
    login:{
        listStyle: "none",
        display: "flex",
        alignItems:"center",
        '& li':{
            cursor: 'pointer',
            '&:hover':{
                color: '#84c225',
                
            },
            font: '13px ProximaNovaA-Regular',
            marginRight: 7,
            '&:nth-child(1)':{
                width: "15px",
                height: "15px",
                backgroundImage: `url(${callLogo})`,
                backgroundPositionX: '21.9718%',
                backgroundPositionY: '19.802%',
                marginRight: 5,
            },
        }
    },
  }))

export default function Index() {
    const classes = styles()
    return (
        <div className = {classes.container}>
            <ul className = {classes.helpLine}>
                <li></li>
                <li>18601231000</li>
            </ul>
            <ul className = {classes.location}>
                <li></li>
                <li>560004 Noida Sec 58</li>
            </ul>
            <ul className = {classes.login}>
                <li></li>
                <li>Login</li>
                <li>|</li>
                <li>Sign Up</li>
            </ul>
        </div>
    )
}
