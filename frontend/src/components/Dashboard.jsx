import Header from "./Header"
import { useEffect, useState } from "react"
import axios from 'axios'
import exg from '../assets/roaddug.jpeg'


export default function Dashboard({ getapi }) {

    const [issue, setissue] = useState([])

    useEffect(() => {
        axios.get(getapi)
            .then(function (response) {
                setissue(response.data.data)
                console.log(response.data.data)
            })
    }, [])

    return <div>
        <Header />
        <div className="mt-14 mx-14 grid grid-cols-2 gap-10">
            <div >
                <div className="flex item-center justify-center">
                    <div className="border rounded-full flex justify-between px-5 w-[300px] py-2.5 items-center border-black border-opacity-40">
                        <input className="w-[200px]" type="text" placeholder="Start a discussion" />
                        <div className="rounded-full w-10 h-8 bg-[#EA6A12] flex justify-center items-center">
                            <div>
                                +
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="rounded-[21px] bg-[#262B30] min-h-screen text-white p-10"> 
            <div className="flex items-center justify-between pb-10">
                <div>
                    Complains
                </div>
                <div>View all</div>
            </div>
            <div>
                <div>
                <div className="grid grid-cols-3 pl-5 p-2 justify-around font-bold text-lg bg-[#777777] bg-opacity-50">
                                <div>Urgency</div>
                                <div>Title</div>
                                <div>Picture</div>
                            </div>
                </div>
            {
                    issue.map(function (data) {
                        return <div className="grid grid-cols-3 justify-between p-5 items-center bg-[#5D5D5D] bg-opacity-20">
                            <div>{data.issueLevel}</div>
                            <div>{data.issue}</div>
                            <div className="w-[100px]"><img src={exg} alt="" /></div>
                            <div></div>
                        </div>
                    })
                }
            </div>
              
            </div>
        </div>

    </div>
}