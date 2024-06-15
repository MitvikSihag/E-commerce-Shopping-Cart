import React, {useState, useEffect} from "react";
import Card from "../components/Card";
import { Circles } from "react-loader-spinner";

function Home()
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getProductList()
    {
        setLoading(true);
        const temp = await fetch('https://fakestoreapi.com/products');
        const product = await temp.json();

        if(product)
        {
            setLoading(false);
            setData(product);
            console.log(product);
        }
    }

    useEffect(() =>
    {
        getProductList();
    }, [])


    return(
        <div>
            {loading ? 
            <div className="h-70vh w-full flex justify-center items-center">

                <Circles 
                height = {'120'}
                width = {'120'}
                color = {'#3B82F6'}
                />

            </div> : 
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                {data && data.length ? 
                data.map((currData) => <Card key={currData.id} image={currData.image} title={currData.title} price = {currData.price} item={currData}/>) : null
                }

            </div>
            }

        </div>
    )
}

export default Home;