import { BiTaxi } from "react-icons/bi"

export default function Card (){
    return(
        <>
        <div className="max-w-[250px] min-w-[200px] h-fit w-full outline outline-1 shadow-sm flex flex-col outline-gray-400 rounded-sm">
            <span className="flex flex-col justify-center">
                <img src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=300" className=" w-full h-40 object-cover"/>
                <h3 className="my-1 font-semibold text-xl px-3">New Product</h3>
            </span>
            <span className="flex items-center space-x-2 px-3 text-sm my-1">
                <p className="text-red-400">-40%</p>
                <p>Rs.200</p>
                <p className="line-through font-extralight">Rs.300</p>
            </span>
            <span className="text-sm px-3">
                <p>Get it within 6 days of order</p>
            </span>
            <div className="my-3 flex items-center justify-between gap-5 px-3">
                <button className="outline outline-1 outline-gray-400 py-2 px-3 rounded-sm">
                    Buy now
                </button>
                <button className="outline outline-1 text-black outline-gray-400 py-2 bg-white px-3 rounded-sm">
                    Add to cart
                </button>
            </div>
        </div>  
        </>
    )
}


