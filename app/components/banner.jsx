import Image from 'next/image'
import React, {useState,useEffect} from 'react'
import { fetchCategories } from '../utils/fetchCategories';
import bannerImage from '@/app/assets/images/IN_iPhone11_Desktop_01._CB437087859_.jpg'
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import Link from 'next/link';

function Banner() {
    const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
      }
    }

    getCategories();
  }, []);

  console.log(categories)


  return (
    <main className="lg:grid grid-cols-12 hidden  px-10 gap-5 py-5 w-full h-[100vh] bg-slate-200">
        <section className="col-span-2 overflow-y-scroll px-10  bg-white h-[80%]">

            {
                categories.map((category, index)=><div key={index}>

                    <p className="text-xs my-2 py-2">{category}</p>
                </div>)
            }


        </section>
        <section className="col-span-8">
            <Image alt="banner_Image" src={bannerImage} />
            
        </section>
        <section className="col-span-2 flex flex-col gap-4 ">

            <div className="bg-slate-100 h-[30%] rounded-md w-full">
                <section className="flex gap-4 p-3 items-center">

                <FiPhoneCall size={25} />
                <div>
                    <p>Call to order</p>
                    <p className="text-xs">09015648441</p>
                </div>
                </section>
                <section className="flex gap-4 p-3 items-center">

<FiPhoneCall size={25} />
<div>
    <p>Call to order</p>
    <p className="text-xs">09015648441</p>
</div>
</section> <Link href={"/"} className="flex gap-4 p-3 items-center">

<FiShoppingBag size={25} />
<div>
    <p>Best deals </p>
    <p className="text-xs">09015648441</p>
</div>
</Link>

            </div>
            <div className="bg-slate-100 rounded-md bg-red-300 h-[30%]">

            </div>
        </section>

        
    </main>
  )
}

export default Banner
