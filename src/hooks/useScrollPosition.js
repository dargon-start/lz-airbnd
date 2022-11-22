import { useEffect, useState } from "react";

export function useScrollPosition(){
    const [windowX,setwindowX] = useState(0);
    const [windowY,setwindowY] = useState(0);

    useEffect(()=>{

        function scrollFn(){
            setwindowX(window.scrollX);
            setwindowY(window.scrollY);
        }

        window.addEventListener('scroll',scrollFn)

        return ()=>{
            window.removeEventListener('scroll',scrollFn)
        }
    },[])
    return {windowX,windowY}
}