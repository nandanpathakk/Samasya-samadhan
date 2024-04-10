import Header from "../components/Header"
import Card from "../components/Card"
import { useState, useEffect } from "react";
import axios from 'axios'
import AddData from "../components/AddData";

export default function Food() {
    const [issue, setIssue] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)


    useEffect(() => {
        axios.get("http://localhost:3000/fssaiissue")
            .then(function (response) {
                setIssue(response.data?.data);
                console.log(response.data.data)
            });
    }, []);
    return <div>
        <Header /><div className="flex justify-center p-5">
                <button onClick={() => setIsModalOpen(true)} className="px-10 p-2 rounded-[50px] border-2 border-black hover:bg-black hover:text-white text-black">Raise an Issue</button>
                {isModalOpen && (
                    <div className='fixed inset-0 flex items-center justify-center'>
                        <div className=' bg-slate-300 p-3 rounded-lg text-black'>
                        <AddData postapi={"http://localhost:3000/fssaiissuecreate"} />

                            <div className='flex'>
                                <button onClick={() => setIsModalOpen(false)}> Close </button>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        <div className="m-10 grid grid-cols-2 gap-5">
        {
            issue.map((data) => {
                return <div >
                    <Card issue={data.issue} issueDesc={data.issueDesc} issueLevel={data.issueLevel} />
                </div>
            })
        }
        </div>

    </div>
}