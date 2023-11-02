import CardContainer from "@/app/products/components/cardContainer"
import { Tabs,TabsContent,TabsList, TabsTrigger } from "../ui/tabs"

export default function TabsContainer(){
    return(
        <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex w-full overflow-x-auto justify-start sm:justify-center mb-10">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="clothings">Clothings</TabsTrigger>
                <TabsTrigger value="smartphones">Smartphones</TabsTrigger>
                <TabsTrigger value="electronics">Electronics</TabsTrigger>
                <TabsTrigger value="grocery">Groceries</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
                <CardContainer/>
            </TabsContent>
            <TabsContent value="clothings">
                
            </TabsContent>
        </Tabs>
    )
}