import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CartHover } from './components/cart-hover'
export default function Navbar () {
    return(
        <div className="h-15 w-full">
            <div className="w-full flex items-center py-2 justify-between px-10">
                <h1 className="text-2xl font-bold">
                    <Link href="/">Ecom</Link>
                   
                </h1>
                
                <ul className="md:flex items-center space-x-5 hidden px-3">
                    <li className="cursor-pointer font-extralight"><Link href="/">Home</Link></li>
                    <li className="cursor-pointer font-extralight"><Link href="/products">Products</Link></li>
                </ul>
                <span className=" flex items-center space-x-5">
                    <div className="bg-black py-2 rounded-sm text-white px-5 font-semibold hover:bg-white hover:text-black ease-in-out duration-75">
                        <Link href="/login">
                        Login
                        </Link>
                    </div>
                    <button>
                        <CartHover children={<Link href="/cart"><AiOutlineShoppingCart size={25}/></Link>}/>
                        
                    </button>
                </span>
            </div>
            <hr className='w-full h-1 font-extralight'/>
        </div>
    )
}