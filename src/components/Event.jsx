import React, {useState} from 'react'
import styles from '../style'
import {Navbar, Clients, Footer} from './'
import { contacts } from '../constants'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Event = () => {
  const [form, setForm] = useState({});
  const [isSubmitted, setSubmit] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [state, setState] = useState(0);

  const togglSuccess=(e)=>{
    setSuccess(e)
    if(e){
      toast('Response Submitted!');
    }
    else{
      setSubmit(false);
      toast('ID already exists!');
    }
  
  }

  const toggleSubmit=()=>{
    setSubmit(true)
  };

  const formHandle=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    toggleSubmit();
    if(!isSubmitted)
    {  const response = await fetch('https://api.codingclubiitjmu.in/api/submitID',{
        method:'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      console.log(data);
      togglSuccess(data);

    }
    
    // handle form submission here
  }
  
  const setStateZero=()=>{
    setState(0);
  }
  const setStateOne=()=>{
    setState(1);
  }


  const Questions = [
    {
      title:'Ice breaker',
      link:'https://www.hackerrank.com/ice-breaker-1707476474',
      note:'Precision bug fixed',
      status:'Submission Closed'
    },
    {
      title:"Yamuna's Odyssey: A Dream to Conquer IIT Jammu",
      link:'https://www.kaggle.com/t/149289a54e31b80111740353bc04795d',
      note:'',
      status:'Submission Closed'
    },
    {
      title:"The Treasure Hunt",
      link:'https://www.hackerrank.com/the-treasure-hunt',
      note:'',
      status:'Submission Closed'
    },
    {
      title:"Subhasis's SmartBox: Revolutionizing Cataloging",
      link:'https://www.kaggle.com/t/3f34ab563bef46c9a55ac7acea4f95a8',
      note:'',
      status:'Submission Closed'
    },
    {
      title:"The NP_HARD Problem",
      link:'https://www.hackerrank.com/the-np-hard-problem',
      note:'',
      status:'Submission Closed'
    },
    {
      title:"Sumit's Numeric Quest: A Genius from Bihar",
      link:'https://www.kaggle.com/t/a29bc05069ed4caf99028f96e7d4f8bb',
      note:'',
      status:'Submission Closed'
    },
   
  ]

  const important = [
    "Please make sure to read and understand the problem statement before starting.",
    "Use hackerrank username of the account used for submitting competetive programming questions as the team name in Kaggle.",
    "Submit your id details in the Submit ID section befor the end of the event, failing to do so may lead disqualification.",
    "On Kaggle only 20 submissions are allowed per question. So submit wisely.",
    "First a CP question will be launched at 11AM IST followed by a ML question an hour later. The time for the submission of CP question will end after 4 hours of its release. ML questions will be open for submission till end of the contest.",
    "Questions will be released after every 4 hours. The time of release of ML questions will be at 1 hour offset to that of the CP questions.",
    "Plagiarism checks will be performed at random , so don’t copy code from anywhere else. It may lead to disqualification.",
    "You may be asked to submit the ML code used to train the model."
  ]



  return (
    <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <ToastContainer/>
        <div className="flex-1 font-poppins font-semibold ss:text-[102px] text-[64px] text-white ss:leading-[100.8px] leading-[75px] text-center">
          <p>Fill The</p>
          <p className="text-gradient">Void()</p>
        </div>

        <div className='flex text-white justify-center font-poppins mt-16'>
          <button className={state==0?`bg-gray-600 w-[200px] h-[50px]`:`w-[200px] h-[50px]`} onClick={setStateZero}>Submit ID</button>
          <button className={state==1?`bg-gray-600 w-[200px] h-[50px]`:`w-[200px] h-[50px]`} onClick={setStateOne}>Questions</button>
        </div>

        {state==0&&!isSubmitted&&(<div className='flex  flex-col text-white font-poppins mt-16'>
            <p className='text-[32px]  text-center'>Submit ID</p>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <p className='text-[16px]  text-center'>The following information is needed for the evaluation in the contest. Kindly, submit accurate information:</p>
              <p className='text-[12px] text-gray-400  text-center'>For any issue contact
                <a href={`tel:${contacts[0].phone}`} className='ml-8 text-blue-400'>Coordinator</a>
                <a href={`tel:${contacts[1].phone}`} className='ml-8 text-blue-400'>Head</a>
              </p>

              <div className='flex justify-center mt-4'>
                <div>
                  <p className='mt-4 mx-4'>Team  Name: </p>
                  <p className='mt-4 mx-4'>Email:</p>
                  <p className='mt-4 mx-4'>Hackerrank Username:</p>
                  <p className='mt-4 mx-4'>Kaggle Username:</p>
                </div>
                <div className='flex flex-col text-black'>
                  <input name='team_name' className='ss:w-[400px] mt-4 mx-4 w-[200px] ' required type='text' onChange={formHandle} placeholder='Team Name..'></input>
                  <input name='unique_id' className='mt-4 mx-4 ss:w-[400px] w-[200px]' required type='email' onChange={formHandle} placeholder="Team Leader's Email.."></input>
                  <input name='hackerrank_id' className='mt-4 mx-4 ss:w-[400px] w-[200px]' required type='text' onChange={formHandle} placeholder='Hackerrank Username to be used..'></input>
                  <input name='kaggle_id' className='mt-4 mx-4 ss:w-[400px] w-[200px]' required type='text' onChange={formHandle} placeholder='Kaggle Username to be used..'></input>
                  <div  className='mt-4 mx-4'>
                        <input name='confirm' type='checkbox' required></input>
                        <label className='ml-4 text-white'>I confirm the above details are correct..</label>
                  </div>
                  
                  <button type='submit' className='button my-8'>Submit</button>
                </div>
              </div>
              
            </form>
        </div>)}
        {
          state==1&&(
            <div className='flex  flex-col text-white font-poppins mt-16'>
              <p className='text-[32px]  text-center'>Questions</p>
              <p className='text-[16px]  text-center'>Links to the qustions will displayed below on the appropiate time.</p>
              <p className='text-[12px] text-gray-400  text-center'>For any issue contact
                <a href={`tel:${contacts[0].phone}`} className='ml-8 text-blue-400'>Coordinator</a>
                <a href={`tel:${contacts[1].phone}`} className='ml-8 text-blue-400'>Head</a>
              </p>
              <ol className='text-[18px]  text-center mt-16'>
                {
                  Questions.map((question,index)=>{
                    return (
                      <li key={index}>
                        <a target="_blank" href={question.link}>{index+1}{".\t"+question.title+"\t"}
                          <p className='text-[12px] text-gray-400'>{question.link}</p>
                          <p className='text-[12px] text-red-500'>{question.note}</p>
                          <p className='mb-6 text-[12px] text-green-500'>{question.status}</p>
                        </a>
                      </li>
                    )
                  })
                }
              </ol>
              {
                Questions.length==0&&(
                  <p className='text-center text-[24px] text-gray-400'>No question added yet.</p>
                )
              }

              <ul className='mx-8 mt-8'>
              <p className='text-center text-[24px] mb-4'>Important</p>
              {
                important.map((note,index)=>(
                  <div>
                      <hr/>
                      <li key={index} className='mt-4'>{note}</li>
                  </div>
                    
                ))
              }
              <hr/>
              </ul>
            </div>
          )
        }



      {
        isSuccess&&(
          <div  className='flex  flex-col text-white font-poppins my-16'>
            <p className='text-[32px]  text-center'>Thank You</p>
            <p className='text-[16px]  text-center'>Your ID is recorded. Kindly use same id during the contest.</p>
          </div>
        )
      }

      <Clients/>
      <Footer/>
    </div>
  )
}

export default Event
