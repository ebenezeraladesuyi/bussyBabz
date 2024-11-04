import React from "react";
// import wait from "../..";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url2 } from "../../utils/Api";
import { iWait } from "../../types/interface";
import doc from "../../assets/doc.jpg";



const WaitlistForm = () => {

    const [formData, setFormData] = React.useState<iWait>({
        fullName: "",
        email: "",
        phoneNumber: "",
    })

    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState<string | null>()
    const navigate = useNavigate();

    // register Forex
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const forexData = await axios.post(`${url2}/unizik/registerunizik`, formData)

            console.log("registration successful", forexData.data)

            // reset formData
            setFormData({
                fullName: "", 
                email: "", 
                phoneNumber: "",
            })
            setError(null)

            toast.success("Registration successfull")
            navigate("/thanks");
            
        } catch (error) {
            console.error("Error with registration. Please, try again.")

            toast.error("Error while registering. Please, try again")
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }
    
    return (
        <div className="w-full min-h-screen bg-[#150E28] flex flex-col justify-center items-center pt-[100px] md:pt-[70px] pb-[30px] font-pop">
            <div className="w-[90%] flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 md:gap-0">
                <div className="w-full md:w-[45%]">
                    <img className="w-full rounded-lg" src={doc} alt="" />
                </div>

                <div className="w-full md:w-[48%] lg:w-[40%]">
                    <form onSubmit={handleSubmit} className="w-full border-white border-[1px] p-4 rounded-md text-white flex flex-col gap-6" action="">
                        <span className="font-bold text-center animate-bounce">Register</span>

                        <input type="text"  placeholder="FullName" className="w-full h-[45px] p-2 pl-3 border-white border-[1px] rounded-md  bg-transparent text-white text-[14px] md:text-[16px] outline-none" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        />

                        <input type="email"  placeholder="Email" className="w-full h-[45px] p-2 pl-3 border-white border-[1px] rounded-md  bg-transparent text-white text-[14px] md:text-[16px] outline-none"  
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />

                        <input type="text"  placeholder="Phone Number" className="w-full h-[45px] p-2 pl-3 border-white border-[1px] rounded-md  bg-transparent text-white text-[14px] md:text-[16px] outline-none"  
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        />

                        
                        {/* <div className="w-full"> */}
                            {/* <h5 className="text-white text-[12px]">Select Skill</h5> */}
                            {/* <select className="bg-transparent border-white border-[1px] pl-[7px] pr-[5px] w-full h-[50px] rounded text-[14px] md:text-[16px] text-blue-400 mb-[15px outline-none"
                            // {...register('skill')}
                                name="skill"
                                value={formData.skill}
                                onChange={handleChange}
                            >
                                <option value="">Select Skill</option>
                                <option value="Coding">Coding</option>
                                <option value="UI-UX-Design">UI/UX Design</option>
                                <option value="Graphics-Design">Graphics Design</option>
                                <option value="Data-Analysis">Data Analysis</option>
                            </select> */}
                            {/* <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.skill && errors.skill.message}</p> */}
                        {/* </div> */}

                        { loading? (
                            <div className="flex justify-center items-center">
                                <DatasIsaLoading />
                            </div>
                         ) : (
                            <button type="submit" className="w-full text-[#150E28] hover:text-white hover:bg-transparent hover:border-white hover:border-[1px]  transition-all duration-300 ease-in-out font-bold bg-white">Register</button>
                        )}

                        {error && <p className="text-[7px]">{error}</p>}
                    </form>
                </div>
            </div>

            {/* <div className="w-[90%] mt-[40px]">
                <ImageUpload />
            </div> */}
        </div>
    )
}

export default WaitlistForm;