import React, { useContext, useEffect, useState } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        document.documentElement.className = isDarkMode ? 'dark-mode' : 'light-mode';
      }, [isDarkMode]);
    
      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Normie</p>
            <div className='nav_right'>
            <label className="ui-switch">
      <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
            <img src={assets.user_icon} alt="" />
            </div>
        </div>

        <div className="main-container">
            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you today?</p>
            </div>
             <div className="cards">
                <div className="card">
                    <p>Roaming in a Randow place will fell like a Hell</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm a list of team bonding activities for our summer work retreat</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Give me some ideas to surprise my concert-loving friend on their birthday.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Recommend 3-5 different types of water sports that might be a good fit for me. </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>:<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ?<div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
                : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
               
            </div>
            </div>}
            
           

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className='bottom-info'>
                Normie may display inaccurate info, including about people, so double-check its responses.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main