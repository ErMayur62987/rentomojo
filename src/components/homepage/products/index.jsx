

const Products = () => {
  return (
    <div className="w-[100%]">
        <div className="bg-[#F5F7FA] w-full h-screen  pt-[10%] flex  flex-col gap-10  ">
            <div className="text-xl ">
                <h1 className="font-bold text-gray-600">You'll love to</h1>
                <h1 className="font-semibold  text-gray-500">take these home</h1>
            </div>
            <div className="p-2 " >
               <div className="w-[23%] h-80 border float-left  ml-4 bg-white">
                        <div className="w-[80%] h-40 border flex justify-center items-center ml-5 mt-5  overflow-hidden bg-black">
                            <img src="/images/table.jpg" alt="table" />
                        </div>
                        
                        <div className="flex flex-col gap-14 ml-2" >
                        <h1 className="text-xl mt-3 ">Minian Beside Table</h1>
                           <div className="flex gap-12">
                           <div className="flex flex-col ">
                                <span  className="text-sm">Rent</span>
                                <span className="text-sm">₹ 99/mo</span>
                            </div>
                            <button className="border border-orange-500 w-[6rem] h-7 text-sm text-red-500 hover:bg-red-500 hover:text-white rounded">See more</button>
                           </div>
                      
                        </div>
               </div>

               

               <div className="w-[23%] h-80 border float-left  ml-4 bg-white">
                        <div className="w-[80%] h-40 border flex justify-center items-center ml-5 mt-5  overflow-hidden bg-black">
                        <img src="/images/dresser.jpg" alt="table" />
                        </div>
                        
                        <div className="flex flex-col gap-14 ml-2" >
                        <h1 className="text-xl mt-3 ">Betty Dresser with stool</h1>
                           <div className="flex gap-12">
                           <div className="flex flex-col ">
                                <span  className="text-sm">Rent</span>
                                <span className="text-sm">₹ 199/mo</span>
                            </div>
                            <button className="border border-orange-500 w-[6rem] h-7 text-sm text-red-500 hover:bg-red-500 hover:text-white rounded">See more</button>
                           </div>
                      
                        </div>
               </div>

               <div className="w-[23%] h-80 border float-left  ml-4 bg-white">
                        <div className="w-[80%] h-40 border flex justify-center items-center ml-5 mt-5  overflow-hidden bg-black">
                        <img src="/images/wardrobe.jpg" alt="table" />
                        </div>
                        
                        <div className="flex flex-col gap-14 ml-2" >
                        <h1 className="text-xl  mt-3">Stowy 2-Door Wardrobe</h1>
                           <div className="flex gap-12">
                           <div className="flex flex-col ">
                                <span  className="text-sm">Rent</span>
                                <span className="text-sm">₹ 439/mo</span>
                            </div>
                            <button className="border border-orange-500 w-[6rem] h-7 text-sm text-red-500 hover:bg-red-500 hover:text-white rounded">See more</button>
                           </div>
                      
                        </div>
               </div>
             
               <div className="w-[23%] h-80 border float-left  ml-4 bg-white">
                        <div className="w-[80%] h-40 border flex justify-center items-center ml-5 mt-5  overflow-hidden bg-black">
                        <img src="/images/sofa.jpg" alt="table" />
                        </div>
                        
                        <div className="flex flex-col gap-14 ml-2" >
                        <h1 className="text-xl mt-3">3 Seater Leather Sofa</h1>
                           <div className="flex gap-12">
                           <div className="flex flex-col ">
                                <span  className="text-sm">Rent</span>
                                <span className="text-sm">₹ 689/mo</span>
                            </div>
                            <button className="border border-orange-500 w-[6rem] h-7 text-sm text-red-500 hover:bg-red-500 hover:text-white rounded">See more</button>
                           </div>
                      
                        </div>
               </div>

              

               
                        
                      



             </div>
        </div>
    </div>
  )
}

export default Products
