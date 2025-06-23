"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import Dice1 from '@/app/assets/dice_1.png'
import Dice2 from '../../assets/dice_2.png'
import Dice3 from '../../assets/dice_3.png'
import Dice4 from '../../assets/dice_4.png'
import Dice5 from '../../assets/dice_5.png'
import Dice6 from '../../assets/dice_6.png'
const Dice = () => {
    const [ruleShow, setruleShow] = useState(false)
    const [errormsge, seterrormsg] = useState('')
    const [checknum, setchecknum] = useState(false)
    const [slectNUm, setslectNUm] = useState()
    const [dic,setDic]=useState(Dice1)
    const [UpdateNUmber, setUpdateNUmber] = useState(0)

    const numberSlect=(value)=>{
        setslectNUm(value)
        setchecknum(true)
    }
    function errormsg(){
        seterrormsg('**Please Select a Number')
        
    }
    function reset(){
        setUpdateNUmber(0);
        setslectNUm(-1)
    }
    function updatescore(num){
        setUpdateNUmber(UpdateNUmber+num)
        
    }
    function Showrule(){
        if(ruleShow===true){setruleShow(false)}
        else setruleShow(true)
    }
    

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      }
      const ArrayOfDiceImg=[Dice1,Dice2,Dice3,Dice4,Dice5,Dice6];
      const arr=[1,2,3,4,5,6];
      const getdice=()=>{
        let num= getRandomInt(1,6)
        if(slectNUm==num){
            updatescore(num);
            setslectNUm(-1)
            setchecknum(false)
        }
        ArrayOfDiceImg.filter((value,i)=>{
           console.log(num);
           i++
            if(i==num){
                setDic(value)
               
            }
          })
          
      }
      
    return (
        <div className='mt-4 relative'>
            <div className='flex items-center justify-between w-[90%] m-auto'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-9xl font-black' >{UpdateNUmber}</div>
                    <div><h1 className='text-2xl font-bold'>Total Score</h1></div>
                </div>
                <div className='flex flex-col gap-2'>
                <div>{checknum?'':
                        <p className='text-2xl font-bold text-pink-500 '>{errormsge}</p>
                        }</div>
                    <div>
                        
                        <ul className='flex justify-between items-center gap-4 '>
                            {
                                arr.map((value,i)=>(
                                    <li onClick={()=>numberSlect(value)} className={`p-4 px-5 border-2 border-black font-bold text-2xl ${slectNUm===value?'bg-black text-white':''}`} key={i} >{value}</li>
                                ))
                            }
                            
                        </ul>
                    </div>
                    <div className='flex justify-end items-center'> <h1 className='text-xl font-bold text-black' >Select Number</h1></div>
                </div>
            </div>
            <div className='w-full flex mt-6  items-center justify-center '>
                <div className='flex gap-4 flex-col w-fit border-2 p-4 rounded-xl items-center' >
                    <Image className='cursor-pointer' src={dic} alt="game image" width={100} onClick={checknum?getdice:errormsg} />
                    <h1 className='text-xl font-bold'>Click on Dice to Roll</h1>
                    <button className='text-xl font-bold border-2 border-black p-2  rounded-2xl' onClick={reset}>Reset Score</button>
                    <button className='text-xl font-bold border-2 border-black p-2 px-4 rounded-2xl bg-black text-white' onClick={Showrule} >Show Rules</button>
                </div>
                {ruleShow && <div className='w-fit p-4 bg-[#FBF1F1] rounded-xl font-semibold absolute top-4 left-[20%] -z-10'>
                    <h1 className='font-extrabold text-2xl mb-4'>How to play dice game</h1>
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                    <p>if you get wrong guess then  2 point will be dedcuted </p>
                </div>}
            </div>
        </div>
    )
}

export default Dice
