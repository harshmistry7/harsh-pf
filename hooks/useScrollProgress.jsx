import {useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion , setCompletion] = useState(0);

    useEffect(()=>{
        const updatescrollCompletion = () =>{
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
            }
        };
        //event
        window.addEventListener('scroll' , updatescrollCompletion);
        //clear event
        return () => window.removeEventListener('scroll' , updatescrollCompletion)  
    },[]);

  return completion;
}

export default useScrollProgress
