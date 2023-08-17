import React, { useState } from 'react'
import './DarkMode.css'
const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark")
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme === "dark"){
        setDarkMode()
    }
    const [theme ,setTheme]=useState(selectedTheme)
    console.log(theme)
    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode();
            setTheme("dark")
        }
        else {
             setLightMode();
             setTheme("light")
            }
    }
    return (
        <div className='theme-mobe'>
            <input type='checkbox'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label >
                <i className="sun fa-regular fa-sun"></i>
                <i className="moon fa-solid fa-moon"></i>
                <i className='layout' style={{right:theme === "dark" && '2px' ,left:theme === "light" && '2px'}}  ></i>
            </label>
        </div>
    )
}

export default DarkMode