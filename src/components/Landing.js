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
    align-items: center;
    min-height: 50px;
    padding: 100px 20vw;
  `;
  
  const Title = styled.h1`
  font-size: 40px;
  font-family: 'Space Mono', monospace;

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
  
  
  
  `

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const words = "CLOUD OPERATING SYSTEMS";
  const hoverEffect = (e) =>{
    let iters = 0;
    const inteval = setInterval(
        () =>{
            e.target.innerText = e.target.innerText.split("").map( (letter, index) => {

                if(index < iters){
                    return words[index];
                }
                return letters[Math.floor(Math.random() * 26)] 
                
            }).join("");
            if(iters >= 23){
                clearInterval(inteval);
            }
            iters += 1 / 2; 
        }, 30
    )

    
  }

  const cloud  = <div> 

<h1>Cloud Computing</h1>
                <h3>Essential Characteristics</h3>
                <p>
                The essential characteristics of Cloud Operating Systems are broad network access, rapid elasticity, measured service, on-demand self-service, and resource pooling.
                <br/>
                <br/>
                Broad network access means that users of cloud operating systems can access the cloud resources from their own devices such as laptops. 
                <br/>
                <br/>
                Rapid elasticity means the ability to scale quickly. Cloud computing lets you scale up or down the resources that you are using. If a business knows its web application gets lots of traffic around holidays but not as much traffic at other times of the year, it may want to consider deploying its web app in the cloud so that it can scale up and down to match the fluctuations in traffic.
                <br/>
                <br/>
                Cloud computing provides Measured service. This means that cloud systems automatically control and optimize resource use by metering capabilities such as storage, processing, bandwidth, or active user accounts. This provides transparency for the provider and consumer of the cloud service. 

                On-demand self-service means that a user of cloud computing can provision computing capabilities such as server time as they need automatically. Because the service is on-demand, resources are not permanent parts of a business's IT infrastructure which can save costs. 
                <br/>
                <br/>
                Resource pooling simply means that providers of cloud services have many resources that they pool together to serve multiple consumers or users of the cloud resources. Different physical and virtual resources are dynamically assigned and reassigned according to consumer demand.
                </p>
                <h3>Service Models</h3>
                <p>
                There are three main service models that cloud computing provides.  Software as a service or SaaS, platform as a service or PaaS, and infrastructure as a service or IaaS. 
                <br/>
                <br/>
                    SaaS provides services to customers in the form of application software that runs on the cloud. The software is often accessed through a web browser. This removes the need for software installation, maintenance, upgrades, and patches. Examples of SaaS products are Gmail and Microsoft 365. 
                <br/>
                <br/>
                    PaaS provides customers with a platform on which their software can run. In this model, the customer must create or obtain the software but the cloud provider will take care of running and scaling it. Often an organization using a PaaS will be able to run their software while only paying for the computing resources they need for as long as they need.
                <br/>
                <br/>
                    IaaS is like a PaaS that lets customers have more control. Customers do not control the resources of the underlying cloud infrastructure but do control operating systems, and deployed applications, and have limited control over networking components. 

                </p>
  </div>

  const OS = <div>

<h1>Cloud Operating Systems</h1>
                <p>
                Cloud operating systems are distributed operating systems that are designed to run in the cloud service provider's data centers. They are used to manage high-performance servers, networks, and storage resources and provide those services to users. Cloud operating systems manage the provision of services to users and may provide some tools to the users but it is mostly hidden from the cloud service user. 

                </p>

                <h3>Virtualization </h3>
                <p>
                Virtual machine technology lets cloud providers divide their large resources into many virtual machines that can be given to cloud users. Users can request more or less virtual machines much easier than they could buy and configure physical machines themselves.
                </p>
                <h3>Virtual storage</h3>
                <p>
                The virtual storage of a cloud operating system provides data storage for the cloud infrastructure. It stores cloud management information such as virtual machines and virtual network definitions. It also provides space for applications running in the cloud environment and provides storage-related mechanisms such as workload migration, automated backups, and integrated version control.
                </p>
                <h3>Virtual Networks</h3>
                <p>
                Virtual networks provide networking services for the cloud infrastructure and enables connectivity outside the cloud. A virtual network may also include a bandwidth allocation process that includes priority and quality of service features, load balancing, and firewalls. 

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
            max-hight: 400px;
           `}>
                <Title onLoad={hoverEffect} onMouseOver={hoverEffect} >CLOUD OPERATING SYSTEMS</Title>
                <h5> scroll down to learn more abour cloud operating systems </h5>

                
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
                <Button onClick={showOS}>learn about cloud operating systems</Button>
                <Button onClick={showCloud}>learn about cloud computing </Button>

                </div>
                
                {/* cards  */}

                

                
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

                <h1>citations</h1>
                <h5>Operating Systems Internals and Design Principles by William Stallings.</h5>
                <h5> Site created by Max Scott.</h5>


            </Section>
            
        </div>
     );
}
 
export default Landing;