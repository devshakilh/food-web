import BannerImg from '../assets/Image1.png'


function HomeBanner() {
    return (
        <div className="lg:flex gap-8  lg:bg-yellow-500 items-center justify-between lg:px-12 rounded-xl mt-12 ">
           <div className='pl-12' >
           <h1 className="text-4xl font-semibold text-black lg:text-white lg:mt-12 mb-6 ">Deliver Food To Your <br /> Door Stepl</h1>
       <p className="text-md text-black lg:text-gray-300 mb-32">Authentic Food Quick Servical Fast Delivary</p>
           </div>


{/* this is image 
 */}
 <div  className='bg-orange-400 lg:bg-yellow-500 lg:w-ful w-76 lg:rounded-md rounded-lg'>
    <img src={BannerImg} className='lg:max-w-l'  alt="BannerImg" />
 </div>

        </div>
    )
}

export default HomeBanner
