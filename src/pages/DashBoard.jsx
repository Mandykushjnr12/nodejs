import {Link, useNavigation} from 'react-router-dom';
import Lottie from 'lottie-react';
import GIF from '.. '
import { useEffect } from 'react';
import axios from 'axios';



const DashBoard = () => {
    const [student, setstudent]= useState(null)
    const [loading, setloading]= useState(false)
     const history = useNavigation

    return ( 
        <main className="text-neutral-900 py-16 bg-sky-50 md:px-24 min-h-screen">
        
            <div className="flex justify-between items-center flex-col md:flex-row">

            <div className="space-y-5 md:w-1/2 text-center md:text-start px-4">
            <h1 className="text-3xl font-bold text-emerald-500 text-justify">
                Welcome to  Mandy-jnr, Where you find All School needs
            </h1>
            <p className="text-xl text-slate-800 text-center">
                Explore all basic needs about education with our features, within and outside the school premises
            </p>
            <button onClick={()=>history("/signup")} className="px-7 py-4 bg-emerald-700 border border-neutral-350 text-neutral-950 mt-12 shadow-xl rounded-full shadow-neutral-900 text-xl transition-all duration-50 hover:shadow-lg hover:font-bold hover:shadow-neutral-500">Register</button>
            </div>

            <div className='w-full md:w-1/2'>
            <Lottie 
                animationData={GIF} 
                loop={true} 
                autoplay={true} 
                style={{ width: '100%', height: '300px' }} 
            />

            </div>

            </div>

        </main>
     );
}
 
export default DashBoard;










