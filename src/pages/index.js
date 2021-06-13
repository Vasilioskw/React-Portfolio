import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Home = () => {
    const [isOpen, seIsOpen] = useState(false)

    return (
        <>
           <Sidebar />
           <Navbar /> 
        </>
    )
}

export default Home;
