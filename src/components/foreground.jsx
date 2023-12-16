import React, {useRef} from "react";
import Card from "./Card.jsx";


function Foreground(){
    const  ref = useRef(null)
    const data = [
        {
            desc : "Cricket is a bat-and-ball game played on a cricket field (see image of cricket pitch and creases) between two teams of eleven players each",
            filesize : ".9mb",
            close : true,
            tag:{
                isOpen: true,
                tagTitle : "Download Now",
                tagColor : "blue"
            }
        },
        {
            desc : "Cricket is a bat-and-ball game played on a cricket field (see image of cricket pitch and creases) between two teams of eleven players each",
            filesize : ".9mb",
            close : true,
            tag:{
                isOpen: true,
                tagTitle : "Download Now",
                tagColor : "blue"
            }
        },
        {
            desc : "Forms of cricket range from Twenty20 (also known as T20), with each team batting for a single innings of 20 overs (each \"over\" being a set of 6 fair opportunities for the batting team to score) and the game generally lasting three to four hours, to Test matches played over five days",
            filesize : ".9mb",
            close : true,
            tag:{
                isOpen: true,
                tagTitle : "Download Now",
                tagColor : "green"
            }
        },
        {
            desc : "Cricket is a bat-and-ball game played on a cricket field (see image of cricket pitch and creases) between two teams of eleven players each",
            filesize : ".9mb",
            close : true,
            tag:{
                isOpen: true,
                tagTitle : "Download Now",
                tagColor : "blue"
            }
        },
        {
            desc : "The most successful side playing international cricket is Australia, which has won eight One Day International trophies, including six World Cups, more than any other country and has been the top-rated Test side more than any other country",
            filesize : ".9mb",
            close : true,
            tag:{
                isOpen: true,
                tagTitle : "Upload Now",
                tagColor : "green"
            }
        },
        {
            desc : "Cricket is a bat-and-ball game played on a cricket field (see image of cricket pitch and creases) between two teams of eleven players each",
            filesize : ".9mb",
            close : true,
            tag:{
                isOpen: true,
                tagTitle : "Download Now",
                tagColor : "blue"
            }
        },
    ];
    return(
        <div ref={ref} className="fixed flex gap-7 ml-3 mt-3 top -0 left-0 z-[3] w-full h-full text-white">
            {
                data.map((item) =>  <Card datas={item} reference ={ref}/>)
            }
        </div>
    )
}

export default Foreground