
import { Link } from 'react-router-dom'

const Leyout = ({children}) => {
    const menus = [
        {
            path:"/",
            label:"homepage"
        },
        {
            path:"/about",
            label:"about us"
        },
        {
            path:"/culture",
            label:"culture"
        },
        {
            path:"/investors",
            label:"investors"
        },
        {
            path:"/carriers",
            label:"carriers"
        },
        {
            path:"/contact",
            label:"contact"
        },
        {
            path:"/benifits",
            label:"our-benifits"
        },
        {
            path:"/sitemap",
            label:"sitemap"
        },
        {
            path:"/landlords",
            label:"landlords"
        },
      
 ]


    const socials = [
        {
            icon:"fa fa-facebook px-[3px] ",
            link:"https://facebook.com/"
        },

        {
            icon:"fa fa-instagram ",
            link:"https://instagram.com"
        },

         {
            icon:"fa fa-twitter ",
            link:"https://twitter.com"
        },
         {
            icon:"fa fa-youtube ",
            link:"https://youtube.com"
        },
        {
            icon:"fa fa-linkedin ",
            link:"https://linkedin.com"
        },
    ]

    const informations = [
        {
            path:"/blog",
            label:"blog"

        },
        {
            path:"/support",
            label:"support home"

        },
        {
            path:"/documents",
            label:"documents required"

        },
        {
            path:"/annual",
            label:"annual returns"

        },
    ]
    const policies = [
        {
            path:"/shipping",
            label:"shipping"

        },
        {
            path:"/return",
            label:"cancellation & return"

        },
        {
            path:"/privacy",
            label:"Privacy Policy"

        },
        {
            path:"/terms",
            label:"rental tearms & conditions"

        },
        {
            path:"/referral",
            label:"referral terms & conditions"

        },
    ]


  return (
   <div  >
          <div className='flex justify-center flex-col font-sans'>
          <div className='flex justify-center items-center '>
              <nav className='flex justify-center items-center gap-6 h-16'>
                    <div className='flex gap-8 justify-center items-center h-16'>
                            <div className='flex gap-3 justify-center items-center h-16'>
                                <img src="/images/logo_rentmojo.svg" alt="rentmojo_logo" className='h-[50%]' />
                                <h1 className='font-semibold text-2xl text-gray-500'>rentomojo</h1>
                            </div>
                            <span>Banglore</span>
                    </div>
                       <div >
                          <input type="text" placeholder="search for products" className='w-[36rem] py-2 px-4 outline-none border border-slate-400 bg-slate-100 rounded-lg relative'/>
                          <i class="fa fa-search" aria-hidden="true" style={{position:'absolute',right:'26%',top:'22px'}} ></i>
                       </div>
                     <div className='flex gap-6 justify-center items-center'>
                            <span className='flex gap-1 items-center'> <i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart</span>
                            <button className='bg-rose-600 rounded-lg px-7 py-2 text-white font-sans text-sm hover:bg-white hover:text-rose-600 hover: border border-rose-600'>Login/signup</button>
                     </div>
                     
              </nav>
          </div>
              <section className="px-[10%]">
                {children}
              </section>
          
                <footer  className='bg-[#F5F7FA] w-screen '>
                  <div className='grid-cols-4 flex gap-48 text-xs justify-center'>
                  <div className='flex flex-col gap-2'>
                       <h1 className=' text-sm font-semibold text-black'>RENTOMOJO</h1>
                       {/* <div className='flex flex-col gap-2'>                  */}
                       <ul className='flex flex-col gap-2'>
                   {
                     menus.map((menu, index)=> (
                     <li key={index} className="capitalize text-xs text-slate-600 hover:underline decoration-[0.5px]"><Link to={menu.path}>{menu.label}</Link></li>
                       ))
                   }
                      </ul>
                       {/* </div> */}
                  </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className=' text-sm font-semibold text-black'>INFORMATION</h1>
                        {/* <div className='flex flex-col gap-2'> */}
                        <ul className="flex flex-col gap-2">
                    {
                       informations.map((information,index)=>( 
                             <li key={index} >
                                <Link to={information.path} className="capitalize text-gray-600 hover:underline decoration-[0.5px]">{information.label} </Link>
                            </li>

                       ))
                    }

                  </ul>
                        {/* </div> */}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className=' text-sm font-semibold text-black'>POLICIES</h1>
                        {/* <div className='flex flex-col gap-2'> */}
                        <ul className="flex flex-col gap-2">
                    {
                       policies.map((policy,index)=>( 
                             <li key={index} >
                                <Link to={policy.path} className="capitalize text-gray-600 hover:underline decoration-[0.5px]">{policy.label} </Link>
                            </li>

                       ))
                    }

                  </ul>

                        {/* </div> */}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className=' text-sm font-semibold text-black'>NEED HELP ?</h1>
                        <div className='flex gap-2 items-center'>
                        <i class="fa fa-telegram" aria-hidden="true" style={{fontSize:"large"}} ></i>
                            <span>jo@rentomojo.com</span>
                        </div>
              <div className='flex flex-col gap-2'>
                       <div>
                            <h1 className=' text-sm font-semibold text-black'>Download App</h1>
                        </div>
                        <div className='flex gap-2 w-24'>
                            <img src="/images/playstore.png" alt="playstore" />
                            <img src="/images/appstore.png" alt="appstore" />
                          
                        </div>
                       </div>
                
                 
                 </div>
                  </div>
                         <div className='pt-12 flex justify-center'>
                             <hr className='bg-slate-600 w-[90%] '/>
                         </div>
                         <div className='flex justify-around text-xs items-center py-10'>
                           <span> © 2024. Edunetwork Pvt. Ltd.</span>
                           <div className="flex gap-4">
                 { 
                 socials.map((social,index) =>(
                   <button key={index} className="bg-white text-gray-500 rounded-[50%] px-[10px] py-[8px] border-[1px] border-gray-500 text-[14px]">
                       <i className={social.icon}  ></i>
                   </button>
                ))
             }
                
                 </div>
                            
                 <span className='text-xs'>Go Up</span>


                         </div>

                </footer>
          </div>
    </div>
  
  )
}

export default Leyout
