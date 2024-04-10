import Header from "../components/Header"
import Card from "../components/Card"
import { useState, useEffect } from "react";
import axios from 'axios'
import AddData from "../components/AddData";

export default function Clean() {

    const [isModalOpen, setIsModalOpen] = useState(false)


    const [issue, setIssue] = useState([]);
    const [isopen, setIsopen] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3000/cleanissue")
            .then(function (response) {
                setIssue(response.data.data);
                console.log(response.data.data)
            });
    }, []);
    return <div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff,transparent)]">
        </div></div>
        <Header />
        <div>
            <div className="flex justify-center p-5">
                <button onClick={() => setIsModalOpen(true)} className="px-10 p-2 rounded-[50px] border-2 border-black hover:bg-black hover:text-white text-black">Raise an Issue</button>
                {isModalOpen && (
                    <div className='fixed inset-0 flex items-center justify-center'>
                        <div className=' bg-slate-300 p-3 rounded-lg text-black'>
                        <AddData postapi={"http://localhost:3000/cleanissuecreate"} />

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

                        return <div>
                            <Card issue={data.issue} issueDesc={data.issueDesc} issueLevel={data.issueLevel} />
                        </div>

                    })
                }
            </div>


            {/* <AddData postapi={"http://localhost:3000/cleanissuecreate"} /> */}

        </div>
    </div>

}