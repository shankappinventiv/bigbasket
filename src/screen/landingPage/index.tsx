import React from 'react'
import LoginHeader from '../../components/Header/loginHeader'
import MainHeader from '../../components/Header/mainHeader'
import CategoryBar from '../../components/categoryBar'
import  Stepper  from '../../components/stepper'
import ImgDescription from '../../components/itemsDescriptin'
export default function index() {
    return (
        <div>
            <LoginHeader />
            <MainHeader />
            <CategoryBar />
            <Stepper />
            <ImgDescription />
        </div>
    )
}
