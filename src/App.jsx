
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  //create state to store data

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setrate] = useState(0)
  const [year, setYear] = useState(0)

  const[principleAmountValid,setPrincipleAmountValid] = useState(true)
  const[rateAmountValid,setRateAmountValid] = useState(true)
  const[yearAmountValid,setYearAmountValid] = useState(true)

  console.log(principle);

  const handleReset = () => {
    //reset all values
    setInterest(0)
    setPrinciple(0)
    setrate(0)
    setYear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)
  }

  const handleValidation = (tag) => {
    console.log("Inside handleValidation");
    const { value, name } = tag
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if ((!!value.match(/^\d*\.?\d+$/))) {
      //valid
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmountValid(true)
      } else if (name == "rate") {
        setrate(value)
        setRateAmountValid(true)

      } else {
        setYear(value)
        setYearAmountValid(true)
      }

    } else {
      //invalid

      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmountValid(false)
      } else if (name == "rate") {
        setrate(value)
        setRateAmountValid(false)

      } else {
        setYear(value)
        setYearAmountValid(false)
      }


    }

  }

  const handleCalculate = ()=>{
    if(principle && rate && year){
      setInterest(principle*interest*year/100)
    }else{
      alert("Form cant be empty")
    }
  }



  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center
    align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h3>Simple Interest App</h3>
        <p>Calculate Your Interest </p>
        <div className='d-flex justify-content-centre align-items-center bg-warning p-3 rounded shadow
     flex-column text-light'>
          <h1>₹ {0}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form action="" className='mt-5'>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-principle" label="Principle Amount" variant="outlined" value={principle || ""} name='principle' onChange={e => handleValidation(e.target)} />
          </div> 
          { !principleAmountValid && <div className='text-danger mb-3'>*invalid data</div>}
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-rate" label="Rate Of Interest" variant="outlined" value={rate || ""} name='rate' onChange={e => handleValidation(e.target)} />
          </div>
          { !rateAmountValid && <div className='text-danger mb-3'>*invalid data</div>}
          <div className='mb-3'>



            <TextField className='w-100' id="outlined-basic" label="Time Period" variant="outlined" value={year || ""} name='year' onChange={e => handleValidation(e.target)} />
          </div> {!yearAmountValid && <div className='text-danger mb-3'>*invalid data</div>}

          <Stack direction="row" spacing={2}>



            <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} style={{ width: '50%', height: "60px" }} className='bg-dark' variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: "60px" }} variant="outlined">RESET</Button>
          </Stack>



        </form>
      </div>
    </div>
  )
}

export default App
