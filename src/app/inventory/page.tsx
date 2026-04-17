'use client'
import { PackengeType } from "@/lib/types"
import axios from "axios"
import { useEffect, useState } from "react"

export default function InventoryPage() {
    const [packages, setPackages] = useState<PackengeType[]>({
        name: "",
        image: "",
        stock: 0
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}barang`)
                setPackages(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [])

    return (
        <section className="ml-32 p-5">
            <div className="mb-10">
                <h1 className="font-bold text-lg">Inventory Page</h1>
            </div>

            <div className="grid grid-cols-4 gap-3">
                {packages.map((data) => (
                    <div key = { data.id } className = "flex flex-col justify-between gap-12 bg-[#f0f4f9] min-h-70 rounded-xl p-3" >
                        <div className="w-full h-full">
                            <div className="bg-white w-full h-full rounded-md">
                            </div>
                            <div className="flex justify-between items-center mt-1.5">
                                <h3>{data.name}</h3>
                                <h3>Stock: {data.stock}</h3>
                            </div>
                        </div>
                        <button className="w-full bg-amber-300 rounded py-1 font-semibold">Loan</button>
                    </div>
                ))}
        </div>
        </section >
    )
}