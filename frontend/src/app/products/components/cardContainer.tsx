import Card from "./card"
export default function CardContainer() {
    return (
        <div className="w-full my-2 h-full flex items-center justify-center">

           <div className="w-full flex gap-10 items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div> 
            </div>
        </div>
    )
}