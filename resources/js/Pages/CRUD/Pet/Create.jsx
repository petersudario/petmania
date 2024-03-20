import Navbar from '../../Navbar.jsx';
import Chorro from '../../../../../public/images/chorro.jpg';


export default function Cadpet({auth, laravelVersion, phpVersion}) {

    return (
        <>
        <div class="relative w-100% max-w-[100%] h-100vh text-white md:text-lg bg-black">
                <div class="absolute z-20 w-[765px] md:w-[100%] items-center">
                    <img class="opacity-50 w-[100%] h-[100vh] max-h-[100%]" src={Chorro}/>
                </div>
                <div className="relative z-50 text-white h-[100vh] w-auto flex flex-col justify-center items-center ">
                    
                </div>
            </div>
        </>
    );

}