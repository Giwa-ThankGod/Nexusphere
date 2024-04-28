import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faClose } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome flag icon
// import { ReactCountryFlag } from 'react-country-flag';

import ReactFlagsSelect from "react-flags-select";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Mapping from "./IsoMapping";

import linkedinName from "../../assets/linkedinName.png";
import telegramName from "../../assets/telegramName.png";
import twitterName from "../../assets/twitterName.png";
import instaName from "../../assets/instaName.png";
import facebookName from "../../assets/facebookName.png";

import axios from 'axios';

const Content = ()=>{
    const [selected, setSelected] = useState("CA");
    const [countryCode, setcountryCode] = useState("+1");
    const [services, setServices] = useState([])
    const [formData, setFormData] = useState({
        'fullname': '',
        'email': '',
        'phone': '',
        'budget': '',
        'industry': '',
        'services': services,
        'website': '',
        'message': ''
    })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [btnClicked, setBtnClicked] = useState(false)
    const [msg, setMsg] = useState('')

    const handleCountryChange = (code) => {
        const phone_code = Mapping(code)
        setSelected(code)
        setcountryCode(phone_code)
    };

    const handleServices = (event) => {
        const {value, checked} = event.target
        if (checked){
            setServices([...services, value])
        }else {
            setServices(services.filter((service) => service !== value))
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                "services": services
            }
        })
        setIsFormSubmitted(true)
        setBtnClicked(true)
    }

    const handleCancleAlert = ()=>{
        setMsg('')
    }

    useEffect(() => {
        // Define an effect to fetch data after form submission
        const fetchData = async () => {
          try {
            const response = await axios.post('http://127.0.0.1:5000/submit_form', formData);
            alert('Data Submitted successfully')
            setBtnClicked(false) // Set button back to false
            // Optionally set the fetched data in component state or perform other actions
          } catch (error) {
            console.error('Error submitting data:', error);
            setMsg("An error occured while submitting form data!!!")
            setBtnClicked(false) // Set button back to false
            // Handle error state or show error message to user
          }
        };
    
        if (isFormSubmitted){
            fetchData(); // Call fetchData function
        }
        setIsFormSubmitted(false); // Reset the form submission flag

      }, [isFormSubmitted]); // Run the effect whenever isFormSubmitted changes

    const Button = styled.button`
        background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);
    `;

    return (
        <>
        <div className="contact-bg">
            <Navbar />
            <div className="container mx-auto mt-12 px-6">
                <div className="flex flex-wrap justify-around">
                    <div className="w-full md:w-1/3 pt-20 text-white">
                        <h2 className="text-4xl text-center leading-tight">Supercharge Your Growth <br/> Now!</h2>
                        <p className="my-3">Team up with Nexusphere for a strategic partnership that propelis you ahead of your competition.</p>
                        <span className="mb-3">Here's what we'll do:</span>
                        <ul className="pl-4">
                            <li className="my-3 flex gap-4">
                                Dive into your business and goals. 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.00016 19.1689L4.83016 14.9989L3.41016 16.4089L9.00016 21.9989L21.0002 9.99887L19.5902 8.58887L9.00016 19.1689Z" fill="#04F339"/>
                                </svg>
                            </li>
                            <li className="my-3 flex gap-4">
                                Develop customized strategies to drive your success.
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.00016 19.1689L4.83016 14.9989L3.41016 16.4089L9.00016 21.9989L21.0002 9.99887L19.5902 8.58887L9.00016 19.1689Z" fill="#04F339"/>
                                </svg>
                            </li>
                            <li className="my-3 flex gap-4">
                                Define expectaions, deliverables and budgets.
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9.00016 19.1689L4.83016 14.9989L3.41016 16.4089L9.00016 21.9989L21.0002 9.99887L19.5902 8.58887L9.00016 19.1689Z" fill="#04F339"/>
                                </svg>
                            </li>
                        </ul>

                        <div className="pt-96">
                            <h3 className="text-2xl my-2 font-normal text-center">Join our Community</h3>
                            <div className="grid grid-cols-5 px-12 gap-3">
                                <img src={facebookName} alt="" className="social-img" />
                                <img src={instaName} alt="" className="social-img" />
                                <img src={linkedinName} alt="" className="social-img" />
                                <img src={telegramName} alt="" className="social-img" />
                                <img src={twitterName} alt="" className="social-img" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-white border rounded-lg shadow-md py-6 px-3 my-5">
                            <h4 className="text-center font-medium">We would love to hear from you and discuss how we can assist you.</h4>
                            <form method="post" className="px-6 py-4" onSubmit={handleSubmitForm}>
                                <label htmlFor="">Fullname</label>
                                <input type="text" value={formData.fullname} onChange={handleChange} name="fullname" className="w-full px-3 pl-5 py-2 mt-1 mb-3 border rounded shadow-sm focus:outline-none focus:border-blue-500" placeholder="Ade Tiger" required/>
                            
                                <label htmlFor="">Email address</label>
                                <input type="text" value={formData.email} onChange={handleChange} name="email" className="w-full px-3 pl-5 py-2 mt-1 mb-3 border rounded shadow-sm focus:outline-none focus:border-blue-500" placeholder="yourname@email.com" required/>
                            
                                <label htmlFor="">Phone number</label>
                                <div className="relative flex items-center mt-1 mb-3">
                                {/* Country Flag Dropdown */}
                                    <div className="absolute flex flex-grow items-center">
                                        <ReactFlagsSelect
                                            className="text-2xl mt-1"
                                            selectButtonClassName="border-0 rounded-none p-1 text-2xl"
                                            selected={selected}
                                            onSelect={handleCountryChange}
                                            showSelectedLabel={false}
                                            fullWidth={false}
                                            searchable
                                        />

                                        <p className="border-l-2 pl-3">{countryCode}</p>
                                    </div>

                                    {/* Phone Number Input */}
                                    <input type="text" value={formData.phone} onChange={handleChange} name="phone" className="w-full m-0 p-2 pl-32 border rounded shadow-sm focus:outline-none focus:border-blue-500" placeholder="80027389700" required/>
                                </div>

                                <label htmlFor="">Budget</label>
                                <input type="text" value={formData.budget} onChange={handleChange} name="budget" className="w-full px-3 pl-5 py-2 mt-1 mb-3 border rounded shadow-sm focus:outline-none focus:border-blue-500" placeholder="$1 - $1,000,000" required/>
                            
                                <label htmlFor="">Your industry</label>
                                <input type="text" value={formData.industry} onChange={handleChange} name="industry" className="w-full px-3 pl-5 py-2 mt-1 mb-3 border rounded shadow-sm focus:outline-none focus:border-blue-500" placeholder="Fintech, Web3, NFT , Blockchain" required/>

                                <p className="mb-3">What services do you need? (multiple options allowed)</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="flex align-item">  
                                        <input type="checkbox" value="Africa online services" checked={services.opt1} onChange={handleServices} name="opt1" className="checkbox mr-1" /> 
                                        <span className="font-medium">Africa online services</span>
                                    </div>
                                    <div className="flex align-item">  
                                        <input type="checkbox" value="Marketing" checked={services.opt2} onChange={handleServices} name="opt2" className="checkbox mr-1" /> 
                                        <span className="font-medium">Marketing</span>
                                    </div>
                                    <div className="flex align-item">  
                                        <input type="checkbox" value="Branding" checked={services.opt3} onChange={handleServices} name="opt3" className="checkbox mr-1" /> 
                                        <span className="font-medium">Branding</span>
                                    </div>
                                    <div className="flex align-item">  
                                        <input type="checkbox" value="Management service" checked={services.opt4} onChange={handleServices} name="opt4" className="checkbox mr-1" /> 
                                        <span className="font-medium">Management service</span>
                                    </div>
                                    <div className="flex align-item">  
                                        <input type="checkbox" value="Consultation" checked={services.opt5} onChange={handleServices} name="opt5" className="checkbox mr-1" /> 
                                        <span className="font-medium">Consultation</span>
                                    </div>
                                    <div className="flex align-item">  
                                        <input type="checkbox" value="Funding" checked={services.opt6} onChange={handleServices} name="opt6" className="checkbox mr-1 mb-3" /> 
                                        <span className="font-medium">Funding</span>
                                    </div>
                                </div>

                                <label htmlFor="">Website URL (optional)</label>
                                <input type="text" value={formData.website} onChange={handleChange} name="website" className="w-full px-3 pl-5 py-2 mt-1 mb-3 border rounded shadow-sm focus:outline-none focus:border-blue-500" placeholder="www.nexusphere.io" />

                                <label htmlFor="">Message (optional)</label>
                                <textarea value={formData.message} onChange={handleChange} name="message" className="w-full px-3 pl-5 py-2 mt-1 mb-3 border rounded shadow-sm focus:outline-none focus:border-blue-500" cols="30" rows="4" placeholder="message"></textarea>

                                {msg ? <div className="flex justify-between items-center cursor-pointer bg-purple-200 text-purple-900 px-5 py-2 my-2 rounded">{msg} <FontAwesomeIcon onClick={handleCancleAlert} icon={faClose} /></div> : ''}

                                <p className="text-center">
                                    <Button className="rounded-md py-2 px-7 text-white font-500">
                                        {btnClicked ? <FontAwesomeIcon icon={faSpinner} className='fa-spin mr-3' /> : <FontAwesomeIcon icon={faPaperPlane} className='mr-3'/>}
                                        {btnClicked ? "Sending" : "Send Message"}
                                    </Button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Content;