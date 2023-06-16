import { css } from '@emotion/css';
import styled from '@emotion/styled';
import imag from './layered-waves.svg';
import { useEffect, useState } from 'react';

const Landing = () => {

    const Section = styled.section`
    position: relitive;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    padding: 100px 20vw;
  `;
  const Section1 = styled.section`
    position: relitive;
    display: flex;
    flex-direction: column;
    // align-items: center;
    min-height: 50px;
    padding: 100px 20vw;
  `;
  
  const Title = styled.h1`
  text-align: left;
  font-size: 40px;
  font-family: 'Space Mono', monospace;
  padding:0;

  `;

  const A = styled.a`
    color: white;
  `;

  // help form https://copy-paste-css.com
  const Button = styled.button`

  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 3px;
  color: #fff;
  background: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  padding: 12px 20px;
  text-align:center;
  transition-duration: .15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  flex-grow: 5;
  margin: 10px;
  :hover{
      color: #000;
      background: rgb(255, 218, 87);
  }
  `;

  const BigCard = styled.div`
    width: 30vmin;
    aspect-ratio: 5/7;
    background-color: rgba(0,0,0,0.3);
    border-radius: 1vmin;
    position: absolute;
    translate(-50%);
  `;
  const LittleCard = styled.div`
    width: 12vmin;
    aspect-ratio: 5/7;
    background-color: rgba(0,0,0,0.3);
    border-radius: 2vmin;
    position: absolute;
  `;

  const cardContain = styled.div`
  
  `;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


  let [nameText, setNameText] = useState("I'M MAX SCOTT");
  
  const hoverEffectName = (e) =>{
    const OGname = "I'M MAX SCOTT";
    
    let iters = 0;
    const inteval = setInterval(
        () =>{
          setNameText(nameText.split("").map( (letter, index) => {

                if(index < iters){
                    return OGname[index];
                }
                return letters[Math.floor(Math.random() * 26)] 
                
            }).join("")) ;
            if(iters >= 100){
                clearInterval(inteval);
            }
            iters += 1 /4; 
        }, 30
    )
  }

  useEffect( ()=>{
    hoverEffectName();
  }, []);

  let [softwareText, setSoftwareText] = useState("A SFTWARE ENGINEAR");
  const hoverEffectSoftware = () =>{
    const OGsoftware = "A SFTWARE ENGINEAR";
    
    let iters = 0;
    const inteval = setInterval(
        () =>{
          setSoftwareText(softwareText.split("").map( (letter, index) => {

                if(index < iters){
                    return OGsoftware[index];
                }
                return letters[Math.floor(Math.random() * 26)] 
                
            }).join("") );
            if(iters >= 100){
                clearInterval(inteval);
            }
            iters += 1 / 4; 
        }, 30
    )
  }

  useEffect( ()=>{
    hoverEffectSoftware();
  }, []);

  let [dataText, setDataText] = useState("AND DATA SCIANTIST");
  const hoverEffectData = () =>{
    const OGsoftware = "AND DATA SCIANTIST";
    
    let iters = 0;
    const inteval = setInterval(
        () =>{
          setDataText(dataText.split("").map( (letter, index) => {

                if(index < iters){
                    return OGsoftware[index];
                }
                return letters[Math.floor(Math.random() * 26)] 
                
            }).join("") );
            if(iters >= 100){
                clearInterval(inteval);
            }
            iters += 1 / 4; 
        }, 30
    )
  }

  useEffect( ()=>{
    hoverEffectData();
  }, []);


  const cloud  = <div> 
<h2> My GitHub</h2>
    <p>
      
    My GitHub: <A href='https://github.com/coderFeedForwardAlg'>https://github.com/coderFeedForwardAlg</A> <br/>
    
    
    </p>
  </div>

  const OS = <div>

<h2>My Most Resent Projects</h2>
                <p>
                Productivity Pangolin: <A href='https://productivitypangolin.com'>https://productivitypangolin.com/</A>

                </p>

                
  </div>

  const [text, setText] = useState(cloud); 

  const showOS = () =>{
    setText(OS); 
  }
  const showCloud = () =>{
    setText(cloud);
  }

    return ( 
        <div className = {css`
        font-family: 'Bruno Ace SC', cursive;
        margin: 0;

        color: white;
        background: black;
        
        `}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap" rel="stylesheet"/>
           
           <Section1 className={css`
            background: red;
            // max-hight: 40px;
           `}>
                <Title onLoad={hoverEffectName} onMouseOver={hoverEffectName}>{nameText}</Title>
                <Title onLoad={hoverEffectSoftware} onMouseOver={hoverEffectSoftware}>{softwareText}</Title>
                <Title onLoad={hoverEffectSoftware} onMouseOver={hoverEffectData}>{dataText}</Title>
                <h5> scroll down to learn more about my work</h5>

                
            </Section1>
            
            <div className={css`
                    aspect-ratio: 900/300;
                    width: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    background-image: url(${imag});
                `}>

                
                </div>
                

            <Section className={css`
            background: blue;
            text-align: center
           `}>

                {text}

                <div className='{css`
                    display: flex; 
                    align-items: stretch;
                '>
                <Button onClick={showOS}>Most Resent Projects</Button>
                <Button onClick={showCloud}>My GitHub </Button>

                </div>
                
                {/* cards  */}
                {/* <cardContain>
                    <LittleCard></LittleCard>
                    <BigCard></BigCard>
                    <LittleCard></LittleCard>
                    <BigCard></BigCard>
                    <LittleCard></LittleCard>
                    <BigCard></BigCard>
                    <LittleCard></LittleCard>
                    <BigCard></BigCard>
                </cardContain> */}

                
            </Section>

            <Section className={css`
            background: purple;
            position: relative;
           `}>
                
                <div className={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  overflow: hidden;
                  line-height: 0;
                  fill: blue;
                `}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className = {css`
                    position: relative;
                    display: block;
                    width: calc(100% + 1.3px);
                    height: 316px;
                    `}>
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>

              

            </Section>
            
        </div>
     );
}
 
export default Landing;