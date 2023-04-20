import { css } from '@emotion/css';
import styled from '@emotion/styled';
import './layered-waves.svg';

const Landing = () => {

    const Section = styled.section`
    position: relitive;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    padding: 100px 20vw;

  `

    return ( 
        <div className = {css`
        font-family: 'Sedgwick Ave Display', cursive;
        margin: 0;
        color: white;
        background: black;
        
        `}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet"></link>
           
           <Section className={css`
            background: red;
           `}>
                <h1>Cool OS stuff</h1>
                
            </Section>
            <div className={css`
                    aspect-ratio: 900/300;
                    width: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    background-image: url('./layered-waves.svg');
                `} >
                    hi
                    

                </div>
            <Section className={css`
            background: blue;
            
           `}>

                

                <h1>Cool OS stuff</h1>

                
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

                <h1>Cool OS stuff</h1>


            </Section>
            
        </div>
     );
}
 
export default Landing;