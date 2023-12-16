import React from "react";
import {FaRegFileAlt} from "react-icons/fa";
import {LuDownload} from "react-icons/lu";
import {IoClose} from "react-icons/io5";
import {motion} from "framer-motion";

function Card({datas,reference}){
    return (
    <motion.div drag dragConstraints = {reference} whileDrag={{scale:1.2}} dragElastic ={1} className=" relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white p-5 overflow-hidden">
            <FaRegFileAlt/>
            <p className="text-xs leading-tight mt-5">{datas.desc}</p>
            <div className="footer absolute left-0  py-0 w-full bottom-0 ">
                <div className="flex items-center justify-between mb-5 ml-5 mr-5">
                <h5>{datas.filesize}</h5>
                <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center">
                    {datas.close ? <IoClose/> : <LuDownload size=".8em" color="#fff"/>}
                </span>

                </div>
                { datas.tag.isOpen &&(
                <div className={`tag w-full py-4 ${ datas.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" }  flex items-center justify-center`}>
                    <h3 className="text-sm ">{datas.tag.tagTitle} </h3>
                </div>
                )
                }
            </div>

        </motion.div>
    )
}

export default Card