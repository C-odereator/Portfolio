import React from 'react'
import './services.css'
import { useState } from 'react'
const Services = () => {
    const [toggleState,setToggleState]=useState(0);

    const toggleTab = (index)=>
    {
        setToggleState(index);
    }
  return (
     <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i Offer</span>
        <div className="services_container container grid">
            
        <div className="services_content">
                <i className="uil uil-web-grid services_icon"></i>
                <h3 className="services_title">
                    Product <br/>Designer</h3>
           
            <span className="services_button" onClick={()=>
            {toggleTab(1)}}>
                View More <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState ===1 ?"services_modal active-modal" :"services_modal" }>
                <div className="services_modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">Product Designer</h3>
                    <p className="services_modal-description">Services with more than 3 years of experience Providing quality work of clients and comapanies</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Develope the user interface</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Web page Development</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Develope the user interface</p>
                        </li>   

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">I Position your company brand</p>
                        </li>  

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Design and mockups of productd for companies</p>
                        </li>   
                    </ul>
                </div>
            </div>
        </div>

        <div className="services_content">
                <i className="uil uil-arrow services_icon"></i>
                <h3 className="services_title">UI/UX <br />
                Designer</h3>
           
            <span className="services_button" onClick={()=>
            {toggleTab(2)}}>
                View More <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState ===2 ?"services_modal active-modal" :"services_modal" }>
                <div className="services_modal-content">
                    <i onClick={()=>toggleTab(0)}  className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">
                    UI/UX Designer
                    </h3>
                    <p className="services_modal-description">Services with more than 3 years of experience Providing quality work of clients and comapanies</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Develope the user interface</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Web page Development</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Develope the user interface</p>
                        </li>   

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">I Position your company brand</p>
                        </li>  

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Design and mockups of productd for companies</p>
                        </li>   
                    </ul>
                </div>
            </div>
        </div>

        <div className="services_content">
                <i className="uil uil-edit services_icon"></i>
                <h3 className="services_title">Visual <br />Designer</h3>
           
            <span className="services_button" onClick={()=>toggleTab(3)}>
                View More <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState ===3 ?"services_modal active-modal" :"services_modal" }>
                <div className="services_modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">
                        Visual Designer
                    </h3>
                    <p className="services_modal-description">Services with more than 3 years of experience Providing quality work of clients and comapanies</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Develope the user interface</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Web page Development</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Develope the user interface</p>
                        </li>   

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">I Position your company brand</p>
                        </li>  

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Design and mockups of productd for companies</p>
                        </li>   
                    </ul>
                </div>
            </div>
        </div>
        </div>
     </section>
  )
}

export default Services
