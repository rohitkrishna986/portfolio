import React, { useState } from 'react'

function QrCodeGenerator() {

    const [img, setImg] = useState("")
    const [loading, setLoading] = useState(false)
    const [QrData, setQrData] = useState("")
    const [QrSize, setQrSize] = useState("")
    
    async function generateQR () {
        setLoading(true);
        try {
            const url =`https://api.qrserver.com/v1/create-qr-code/?size=${QrSize}x${QrSize}&data=${encodeURIComponent(QrData)}`;
            setImg(url);
        } catch (error) {
            console.log("Error" , error)
        } finally {
            setLoading(false);
        }
    }
    function downloadQR () {
        fetch(img) 
        .then((response) => response.blob())
        .then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
    }


  return (
    <>
    {/* // Desktop */}
    <div className='w-full bg-slate-500 h-[600px] hidden lg:flex items-center justify-center'>
        <div className='h-[80%] w-[50%] bg-slate-300 shadow-xl'>
            <div className='w-full flex justify-center pt-3 pb-[20px]'>
                <h1 className='font-bold text-gray-800'>QR CODE GENERATOR</h1>
            </div>
            <div className='w-full flex justify-center py-2'>
                <div className='bg-white'>
                    {loading && <p className='bg-slate-300'>Please wait...</p>}
                    {img && <img className='max-w-[150px]' src={img}/>}
                </div>
            </div>
            <div className='pb-4'>
                <div className='w-full flex flex-col px-6 py-4'>
                    <label className='text-[10px] font-bold pb-2' htmlFor='dataInput'>DATA FOR QR CODE</label>
                    <input type='text' value={QrData} onChange={(e)=>setQrData(e.target.value)} className='border bg-slate-100 shadow-inner p-1 border-gray-400' id="dataInput"/>
                </div>
                <div className='w-full flex flex-col px-6'>
                    <label className='text-[10px] font-bold pb-2' htmlFor='sizeInput'>IMAGE SIZE</label>
                    <input type='text' value={QrSize} onChange={(e)=>setQrSize(e.target.value)} className='border bg-slate-100 shadow-inner p-1 border-gray-400' id="sizeInput"/>
                </div>
            </div>
            <div className='w-full flex justify-center gap-4 px-6'>
                <button onClick={generateQR} className='bg-blue-500 px-5 py-2 text-[12px] font-bold hover:bg-white hover:text-blue-500 hover:shadow-lg text-white rounded-md'>Generate QR</button>
                <button onClick={downloadQR} className='bg-blue-500 px-5 py-2 text-[12px] font-bold hover:bg-white hover:text-blue-500 hover:shadow-lg text-white rounded-md'>Download QR</button>
            </div>
            <div className='pt-8 w-full flex justify-center'>
                <p className='text-[12px]'>Designed by <span className='text-blue-500'>Rohit</span></p>
            </div>
        </div>
    </div>
    {/* // Mobile */}
    <div className='w-full bg-slate-500 h-[600px] lg:hidden flex items-center justify-center'>
        <div className='h-[80%] w-[90%] bg-slate-300 shadow-xl'>
            <div className='w-full flex justify-center pt-3 pb-[10px]'>
                <h1 className='font-bold text-gray-800'>QR CODE GENERATOR</h1>
            </div>
            <div className='w-full flex justify-center py-2'>
                <div className='bg-white'>
                    {loading && <p className='bg-slate-300'>Please wait...</p>}
                    {img && <img className='max-w-[150px]' src={img}/>}
                </div>
            </div>
            <div className='pb-4'>
                <div className='w-full flex flex-col px-6 py-4'>
                    <label className='text-[10px] font-bold pb-2' htmlFor='dataInput'>DATA FOR QR CODE</label>
                    <input type='text' value={QrData} onChange={(e)=>setQrData(e.target.value)} className='border bg-slate-100 shadow-inner p-1 border-gray-400' id="dataInput"/>
                </div>
                <div className='w-full flex flex-col px-6'>
                    <label className='text-[10px] font-bold pb-2' htmlFor='sizeInput'>IMAGE SIZE</label>
                    <input type='text' value={QrSize} onChange={(e)=>setQrSize(e.target.value)} className='border bg-slate-100 shadow-inner p-1 border-gray-400' id="sizeInput"/>
                </div>
            </div>
            <div className='w-full flex justify-center gap-4 px-6'>
                <button onClick={generateQR} className='bg-blue-500 px-5 py-2 text-[12px] font-bold hover:bg-white hover:text-blue-500 hover:shadow-lg text-white rounded-md'>Generate QR</button>
                <button onClick={downloadQR} className='bg-blue-500 px-5 py-2 text-[12px] font-bold hover:bg-white hover:text-blue-500 hover:shadow-lg text-white rounded-md'>Download QR</button>
            </div>
            <div className='pt-8 w-full flex justify-center'>
                <p className='text-[12px]'>Designed by <span className='text-blue-500'>Rohit</span></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default QrCodeGenerator