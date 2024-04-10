import Header from "../components/Header";
import group from "../assets/group.svg"
import hand from "../assets/hand.svg"
import { Link } from "react-router-dom";

export default function Home() {
    return <div className="min-h-screen relative w-full">
        <Header />
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"> </div></div>
            <div className="flex flex-col ml-[203px] gap-9">
                <div className="text-[60px]/[110px] font-bold font-red-hat mt-28 text-[#1F1D2B]">
                    <p>Navigating Issues</p>
                    <p className="text-[#41403C]">Facilitating Solutions</p>

                </div>

                <div className="flex justify-between w-[400px] font-['Raleway'] font-medium">
                    <div>
                        <button className="border border-black rounded-full w-[180px] py-[10px]">Vote</button>
                    </div>
                    <Link  to={"/adddata"}>
                        <div>
                            <button className="border border-black bg-black text-white rounded-full w-[180px] py-[10px]">Raise Issue</button>
                        </div>
                    </Link>
                </div>
            </div>
            <img className="absolute top-[417px] h-[230px] left-[30px]" src={hand} />
            <img className="absolute top-[140px] h-[502px] left-[1040px] " src={group} />
    </div >
}