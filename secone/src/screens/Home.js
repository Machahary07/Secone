import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Corousal from '../components/Corousal'
import Card from '../components/Card'

export default function Home() {
    return (
        <div>
            <div><Navbar /></div>
            <div><Corousal /></div>
            <div><Card/></div>
            <div><Footer/></div>
        </div>
    )
}
