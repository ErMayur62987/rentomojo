
const Details = () => {
  const details=[
    {
        image:'/images/details1.png',
        heading:'Finest-quality products',
        paragraph:'Quality matters to you, and us! That\'s why we do a strict quality-check for every product.'

   },
    {
        image:'/images/details2.png',
        heading:'Free relocation',
        paragraph:'Changing your house or even your city? We\'ll relocate your rented products for free.'

   },
    {
        image:'/images/details3.png',
        heading:'Free maintainance',
        paragraph:'Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.'

   },
    {
        image:'/images/details4.png',
        heading:'Cancel anytime',
        paragraph:'Pay only for the time you use the product and close your subscription without any hassle.'

   },
    {
        image:'/images/details5.png',
        heading:'Easy return on delivery',
        paragraph:"If you don't like the product on delivery, you can return it right away—no questions asked."

   },
    {
        image:'/images/details6.png',
        heading:'Keep upgrading',
        paragraph:'Bored of the same product? Upgrade to try another, newer design and enjoy the change!'

   },
]

  return (
    <div>
       <div className="h-[130vh] flex flex-col justify-evenly  mt-7">
         <div className="flex flex-col ">
                <span className="text-2xl font-sans ">Thair's more</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-sans">to renting</span>
                    <hr className="w-11 bg-red-600 h-[3px]"/>
                  </div>
         </div>
         <div className=" grid grid-cols-3 gap-16 font-sans text-sm ">
           {
               details.map((detail,index)=>(
                   <div  key={index} className="flex flex-col gap-5 justify-center ">
                        <img src={detail.image} alt='icons' className="w-[4.5rem]"/>
                        <h1 className="font-semibold ">{detail.heading}</h1>
                        <p className=" text-gray-500">{detail.paragraph}</p>
                    </div>
              ))  
             }
             </div>
      <span className="text-[1rem]">KNOW MORE</span>
       </div>
    </div>
  )
}

export default Details
