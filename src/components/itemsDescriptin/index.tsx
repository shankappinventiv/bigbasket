import React from 'react'
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import mango from "../../assets/All_Mangoes_DT_2_190x60_11thJune.jpg"
import precautionary from "../../assets/All_PrecautionaryMeasures_DT_1_190x60_11thJune.jpg"
import returnPolicy from "../../assets/All_ReturnPolicy_DT_3_190x60_11thJune.jpg"
import egg  from "../../assets/All_EggsMeatFish_DT_4_190x60_11thJune.jpg"
import star  from "../../assets/All_bbStar_DT_5_190x60_11thJune.jpg"
const styles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
        display: "flex",
        justifyContent: 'space-between',
    },
  }))
export default function Index() {
    const classes = styles();
    return (
        <div className = {classes.container}>
            <figure>
                <img src = {precautionary} alt = {""} />
            </figure>
            <figure>
                <img src = {mango} alt = {""} />
            </figure>
            <figure>
                <img src = {returnPolicy} alt = {""} />
            </figure>
            <figure>
                <img src = {egg} alt = {""} />
            </figure>
            <figure>
                <img src = {star} alt = {""} />
            </figure>
            <figure>
                <img src = {mango} alt = {""} />
            </figure>
        </div>
    )
}
