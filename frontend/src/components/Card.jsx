import roaddug from "../assets/roaddug.jpeg"


export default function Card({ issue, issueDesc, issueLevel }) {



    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff,transparent)]">
            </div></div>

            <div className="border-2 bg-[#c4ffc2] text-white flex rounded-[16px] p-3 bg-opacity-40">
                <div >
                    <img className="rounded-[16px]" src={roaddug} alt="image" />

                </div>
                <div className="pl-5 w-full text-black">
                    <div className="flex justify-between pr-5 ">
                        <div className="pb-5 font-bold">{issue}</div>
                        <div>
                        <div className="bg-red-500 h-6 w-12 text-sm bg-opacity-90 rounded">{issueLevel}</div>
                        </div>
                    </div>
                    <div>{issueDesc}</div>
                </div>

            </div>
        </div>
    )
}