import { useEffect, useState } from 'react'
import icon from './assets/icon.jpg'
import axios from 'axios'

const CurrencyConvertor = () => {

  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("INR")
  const [converted, setConverted] = useState(null)
  const [exchangeRate , setExchangeRate] = useState(null)

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`

        const response = await axios.get(url)
        setExchangeRate(response.data.rates[toCurrency])
      } catch (error) {
        console.log(error)
      }
    }
    getExchangeRate();
  }, [fromCurrency, toCurrency])

  useEffect(()=> {
    if(exchangeRate !==null) {
      setConverted((amount * exchangeRate).toFixed(2))
    }
  }, [amount, exchangeRate])

  return (
    <>
      <div className='bg-slate-500 w-[100vw] h-[600px] flex justify-center items-center'>
        <div className='bg-slate-100 w-[90%] h-[80%] lg:w-[60%] lg:h-[80%] shadow-lg'>
          <div className='flex gap-5 px-2 justify-center items-center shadow-md'>
            <div><img className='mb-5 mt-5 border shadow-sm' width={100} src={icon}/></div>
            <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
              <h2 className='font-bold text-[20px]'>CURRENCY</h2>
              <h2 className='font-bold text-[20px]'>CONVERTER</h2>
            </div>
          </div>
          <div className='w-full'>
            <div className='w-full flex flex-col gap-1 px-5 mt-4'>
              <label htmlFor='amount' className='font-semibold text-gray-500'>Amount</label>
              <input className='p-1 rounded-md border border-gray-400 shadow-inner' onChange={(e) => setAmount(e.target.value)} type='number' value={amount} id='amount'/>
            </div>
            <div className='w-full flex flex-col gap-1 px-5 mt-4'>
              <label htmlFor='fromCurrency' className='font-semibold text-gray-500'>From</label>
              <select className='p-1 rounded-md border border-gray-400 shadow-inner' value={fromCurrency} onChange={(e)=> setFromCurrency(e.target.value)} id='fromCurrency'>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>
            <div className='w-full flex flex-col gap-1 px-5 mt-4'>
              <label htmlFor='toCurrency' className='font-semibold text-gray-500'>To</label>
              <select className='p-1 rounded-md border border-gray-400 shadow-inner' value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} id='toCurrency'>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>
          </div>
          <div className='w-full h-1/4 flex justify-center items-center'>
            <div className='font-bold text-[20px] text-gray-700'>{amount} {fromCurrency} = {converted} {toCurrency}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrencyConvertor
