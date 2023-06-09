import ProgramCard from "./programCard";
import {Program} from "@/lib/program";

export default function ProgramList(){

    return(
        <section className="flex flex-col items-center w-full mt-2 font-outfit m-auto">
            <h1 className="text-center md:text-5xl text-3xl mb-2">Nos programmes</h1>
            <p className="text-center text-gray-500 mb-10"></p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:px-28 px-10">
                {Program.items.map(function(program){
                    return (
                        <ProgramCard key={program.key} title={program.title} text={program.text} image_path={program.image_path} color={program.color} group={program.group} />
                    )
                })}
            </div>
        </section>
    )
}
