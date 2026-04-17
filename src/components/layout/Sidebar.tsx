import { LayoutDashboard, Package } from "lucide-react";
import Link from "next/link";


export default function Sidebar() {
    return (
        <aside className='flex flex-col justify-start items-center gap-10 bg-[#f0f4f9] fixed left-0 right-0 z-50 p-3 min-h-screen w-fit text-foreground'>
            <header className="font-bold text-sm text-center">
                <h1>Inventory <br/> Management</h1>
            </header>

            <div className="flex flex-col justify-center items-center gap-6">
                <Link href={"/dashboard"}>
                    <LayoutDashboard/>
                </Link>
                <Link href={"/inventory"}>
                    <Package/>
                </Link>
            </div>
        </aside>
    )
}