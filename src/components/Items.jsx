import {  useEffect, useState,  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import '../App.css';
// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';


function Items() {
    const [data, setData] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10');
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);
      
  




    return (
        <div>
             {data && (
        <div>


<>
<h2 className='mt-32 mb-6  text-black text-xl font-sans font-semibold'>Popular Items</h2>
      <Swiper
     navigation={true}
   
     mousewheel={true}
     keyboard={true}
     pagination={{
        clickable:true,
     }}
     modules={[Navigation, Pagination, ]}
        slidesPerView={4}
        spaceBetween={30}
    
        className="mySwiper px-24"
      >

<ul className='mt12'>
    
            {data.Items.filter((item) => item.IsPopular).map((item) => (
              <li key={item.Id}>
                 <SwiperSlide>
                <img src={item.ImageUrl} alt={item.Name} className='lg:h-84 lg:w-72 w-48 h-44 rounded-md' />
                <p className='text-center'> {item.Name}</p>
                </SwiperSlide>
              </li>
          ))}
          </ul>


   
      </Swiper>
    </>

<>
<h2 className=' mt-12 mb-6 text-black text-xl font-sans font-semibold'>Recommended Items</h2>
      <Swiper
     navigation={true}
   
     mousewheel={true}
     keyboard={true}
     pagination={{
        clickable:true,
     }}
     modules={[Navigation, Pagination, ]}
        slidesPerView={4}
        spaceBetween={30}
    
        className="mySwiper mb-12"
      >

<ul className=''>
    
            {data.Items.filter((item) => item.IsRecommended).map((item) => (
              <li key={item.Id}>
                 <SwiperSlide>
                <img src={item.ImageUrl} alt={item.Name} className='lg:h-72 lg:w-62 w-48 h-44 rounded-md' />
                <p className='text-center'> {item.Name}</p>
                </SwiperSlide>
              </li>
          ))}
          </ul>


   
      </Swiper>
    </>





   

        </div>
      )}




        {/*             Recommended items   end           */}
        </div>
    )
}

export default Items
