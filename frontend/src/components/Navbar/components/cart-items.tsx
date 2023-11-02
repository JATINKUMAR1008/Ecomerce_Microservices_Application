import { BiTrashAlt } from 'react-icons/bi'
export default function CartItems() {
    return (
        <>
            <div className="flex w-full flex-col my-5">
                {/* items for the cart */}
                <div className="flex items-center w-full gap-4 ">
                    <img src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=300" className="w-18 h-16 object-cover" />
                    <div className="flex items-center w-full justify-between">
                        <span className="flex flex-col items-start">
                            <p>New Product</p>
                            <p className="text-sm font-extralight italic">qty: 2</p>
                        </span>
                        <button>
                            <BiTrashAlt size={25} className="text-red-500"/>
                        </button>
                        
                    </div>
                </div>
                {/* Until here */}
                <hr className='w-full h-[1px] mt-4 bg-black'/>
                <span className='w-full'>
                    <button className='py-3 px-5 bg-black w-full text-white capitalize rounded-sm'>
                        checkout
                    </button>
                </span>
            </div>
        </>
    )
}