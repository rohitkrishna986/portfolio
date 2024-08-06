import { useState } from 'react'
import icon from './assests/icon.jpg'

function BmiCalculator() {

  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [bmiStatus, setBmiStatus] = useState("")
  const [showError, setShowError] = useState("")

  const changeValue = () => {

    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    
    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100 ;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2))
      if (bmiValue < 18.5) {
        setBmiStatus("Under Weight")
      } else if(bmiValue>=18.5 && bmiValue<24.59) {
        setBmiStatus("Normal Weight")
      } else if(bmiValue>=25 && bmiValue<29.9) {
        setBmiStatus("Over Weight")
      } else {
        setBmiStatus("Obese")
      }
    } else {
      setBmi(null);
      setBmiStatus("")
      setShowError("Please enter valid Height & Weight")
    }
  }

  const clearValue = () => {
    setBmi(null)
    setBmiStatus("")
    setHeight("")
    setWeight("")
    setShowError("")
  }


  return (
    <>
    {/* // Desktop */}
      <div className='bg-slate-500 w-[100vw] h-[600px] hidden lg:flex justify-center items-center'>
        <div className='bg-slate-200 w-[60%] h-[90%] shadow-lg flex'>
          <div className='w-[40%] bg-[#b5a5d5] flex items-center'>
            <img src={icon}/>
          </div>
          <div className='w-[60%]'>
              <div className='flex justify-center mt-4 font-bold text-[#9080b0] text-[20px]'>
                <h2>BMI CALCULATOR</h2>
              </div>
              {showError && <div className='flex justify-center mt-4 text-red-600 text-[12px]'>{showError}</div>}
              <div className='h-[220px]'>
                <div className='h-[50%] flex flex-col justify-center gap-2 mx-4'>
                  <label className='text-[14px] text-gray-500 font-semibold' htmlFor='height'>Height (cm)</label>
                  <input onChange={(e) => setHeight(e.target.value)} value={height} className='py-2 rounded-lg border border-gray-400 shadow-inner text-[14px] px-2' placeholder='Enter height' type='text' id='height'/>
                </div>
                <div className='flex flex-col justify-center gap-2 mx-4'>
                  <label className='text-[14px] text-gray-500 font-semibold' htmlFor='weight'>Weight (cm)</label>
                  <input onChange={(e) => setWeight(e.target.value)} value={weight} className='py-2 rounded-lg border border-gray-400 shadow-inner text-[14px] px-2' placeholder='Enter weight' type='text' id='weight'/>
                </div>
              </div>
              <div className='my-2 flex justify-center gap-6'>
                <button onClick={changeValue} className='bg-slate-500 text-[12px] text-white py-2 hover:bg-white hover:text-slate-500 px-4 rounded-full font-semibold'>CALCULATE</button>
                <button onClick={clearValue} className='bg-red-500 text-[12px] text-white py-2 hover:bg-white hover:text-red-500 px-6 rounded-full font-semibold'>CLEAR</button>
              </div>
              {bmi !== null && (
                <div className='w-full h-[30%] flex justify-center items-center'>
                  <div className='bg-slate-100 flex shadow-inner justify-center w-[80%] h-[80%] rounded-md border-2 border-slate-400'>
                    <div className='h-full flex flex-col justify-center items-center w-[80%] gap-4'>
                      <div className='font-semibold text-gray-500'><p>Your BMI : {bmi}</p></div>
                      <div className='font-semibold pl-5 text-gray-500'><p>Status : {bmiStatus}</p></div>
                    </div>
                  </div>
                </div>
              )}
              <div className='w-full flex justify-center text-[12px] mt-4'>
                <p>Designed by <span className='text-blue-500'>Rohit</span></p>
              </div>
          </div>

        </div>
      </div>
    {/* // Mobile */}
    <div className='bg-slate-500 w-[100vw] h-[600px] lg:hidden  flex justify-center items-center'>
        <div className='bg-slate-200 w-[90%] h-[90%] shadow-lg flex flex-col items-center'>
          <div className='w-full bg-[#b5a5d5] flex justify-center items-center'>
            <img src={icon} width={150}/>
          </div>
          <div className='w-full'>
              <div className='flex justify-center mt-4 font-bold text-[#9080b0] text-[20px]'>
                <h2>BMI CALCULATOR</h2>
              </div>
              {showError && <div className='flex justify-center mt-4 text-red-600 text-[12px]'>{showError}</div>}
              <div className='h-fit flex flex-col gap-4 mt-4 mb-6'>
                <div className='h-[50%] flex flex-col justify-center gap-2 mx-4'>
                  <label className='text-[14px] text-gray-500 font-semibold' htmlFor='height'>Height (cm)</label>
                  <input onChange={(e) => setHeight(e.target.value)} value={height} className='py-2 rounded-lg border border-gray-400 shadow-inner text-[14px] px-2' placeholder='Enter height' type='text' id='height'/>
                </div>
                <div className='flex flex-col justify-center gap-2 mx-4'>
                  <label className='text-[14px] text-gray-500 font-semibold' htmlFor='weight'>Weight (cm)</label>
                  <input onChange={(e) => setWeight(e.target.value)} value={weight} className='py-2 rounded-lg border border-gray-400 shadow-inner text-[14px] px-2' placeholder='Enter weight' type='text' id='weight'/>
                </div>
              </div>
              <div className='flex justify-center gap-6'>
                <button onClick={changeValue} className='bg-slate-500 text-[12px] text-white py-2 hover:bg-white hover:text-slate-500 px-4 rounded-full font-semibold'>CALCULATE</button>
                <button onClick={clearValue} className='bg-red-500 text-[12px] text-white py-2 hover:bg-white hover:text-red-500 px-6 rounded-full font-semibold'>CLEAR</button>
              </div>
              {bmi !== null && (
                <div className='w-full mt-4 flex justify-center items-center'>
                  <div className='bg-slate-100 flex shadow-inner justify-center w-[95%] p-2 rounded-md border-2 border-slate-400'>
                    <div className='h-full flex flex-col justify-center items-center w-[90%] gap-4'>
                      <div className='font-semibold text-gray-500'><p>Your BMI : {bmi}</p></div>
                      <div className='font-semibold pl-5 text-gray-500'><p>Status : {bmiStatus}</p></div>
                    </div>
                  </div>
                </div>
              )}
              
          </div>

        </div>
      </div>
    </>
  )
}

export default BmiCalculator
