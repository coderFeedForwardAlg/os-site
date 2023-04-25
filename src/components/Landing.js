import { css } from '@emotion/css';
import styled from '@emotion/styled';
import imag from './layered-waves.svg';

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
                <h1>Cloud Operating Systems</h1>

                
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
                There are three main service models that cloud computing provides.  Software as a service or SaaS, platform as a service of PaaS, and infrastructure as a service of IaaS. 
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