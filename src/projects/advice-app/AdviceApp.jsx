import React, { useState } from 'react'

const AdviceApp = () => {

    const [advice, setAdvice] = useState('Please Click Button to Get Advice')
    const [count, setCount] = useState(0)

    async function getAdvice () {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        console.log(data)
        setAdvice(data.slip.advice);
        setCount((c) => c+1);
    }

  return (

    <>
    {/* // Desktop */}
    <div className='bg-slate-200 w-[100vw] h-[100vh] hidden lg:flex items-center justify-center'>
        <div className=''>
            <div className='flex justify-center text-[20px] mb-5'>
                <p className=''>{advice}</p>
            </div>
            <div className='flex justify-center'>
                <button onClick={getAdvice} className='bg-slate-500 px-5 py-2 cursor-pointer hover:bg-slate-100 hover:text-slate-500 rounded-full text-slate-100 text-[10px] font-bold'>ADVICE</button>
            </div>
            <div className='flex justify-center mt-5'>
                <p>You have read <span className='bg-slate-500 text-white p-1 rounded-full'>{count}</span> pieces of advice</p>
            </div>
        </div>
    </div>
    {/* // Mobile */}
    <div className='bg-slate-200 w-[100vw] h-[600px] lg:hidden flex items-center justify-center'>
        <div className=''>
            <div className='flex justify-center text-center px-5 text-[20px] mb-5'>
                <p className=''>{advice}</p>
            </div>
            <div className='flex justify-center'>
                <button onClick={getAdvice} className='bg-slate-500 text-sm px-5 py-2 cursor-pointer hover:bg-slate-100 hover:text-slate-500 rounded-full text-slate-100 text-[10px] font-bold'>ADVICE</button>
            </div>
            <div className='flex justify-center mt-5'>
                <p>You have read <span className='bg-slate-500 text-white p-1 rounded-full'>{count}</span> pieces of advice</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdviceApp