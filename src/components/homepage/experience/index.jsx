

const Experience = () => {
     
    const experiences = [
        {
            image:'/images/details1.png',
            heading:'Finest-quality products',
            paragraph:'Quality matters to you, and us! That\'s why we do a strict quality-check for every product.',
            rating:'4.8',
            star:'/images/star.svg'
            
         },
       
        {
            image:'/images/details1.png',
            heading:'Finest-quality products',
            paragraph:'Quality matters to you, and us! That\'s why we do a strict quality-check for every product.',
            rating:'4.8'
            
         },
       
        {
            image:'/images/details1.png',
            heading:'Finest-quality products',
            paragraph:'Quality matters to you, and us! That\'s why we do a strict quality-check for every product.',
            rating:'4.8'
            
         },
       
    ]


  return (
    <div>
         <div className="bg-[#F5F7FA] h-full flex flex-col gap-10 w-full ">
               <div className="flex flex-col ">
                <span className="text-2xl font-sans ">Rentomojo</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-sans">Experience Store</span>
                    <hr className="w-11 bg-red-600 h-[3px]"/>
                  </div>
                 </div>

                 <div className="flex  w-[80vw] h-[90vh] border border-rose-600 justify-around gap-20">
                     <div className=" w-full h-full flex gap-10 justify-between border border-blue-600 ">
                      {
                        experiences.map((exp,index)=>(
                            <div key={index}>
                                <img src={exp.image} alt='img'/>
                                <h1>{exp.heading}</h1>
                                <p>{exp.paragraph}</p>

                                <div className="flex  gap-4">
                                    <span>Rating</span>
                                    <span>{exp.rating}</span>
                               </div>
                                    <span className="text-red-600 font-semibold">View more</span>

                            </div>
                        ))
                      }
                 </div>
                </div>
         </div>
    </div>
  )
}

export default Experience
