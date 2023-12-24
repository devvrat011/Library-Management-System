import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

function Admin() {
  const [list,setList] = useState([
    {
      id:"1",
      colors:"#ffa799",
    },
    {
      id:"2",
      colors:"#cface8",
    },
    {
      id:"3",
      colors:"#fed687",
    },
    {
      id:"4",
      colors:"#aae5bd",
    }
  ]);
  
  return (
    <div className='h-screen flex'>
        <div className='w-[7%] p-[2%] border-r-2 border-black flex flex-col text-center gap-10  '>
            <DashboardIcon style={{fontSize: "2rem",cursor:"pointer"}}/>
            <LogoutIcon style={{fontSize: "2rem",cursor:"pointer"}}/>
        </div>
        <div className='flex p-4 gap-8 w-[100%] bg-[#f1f0f0]'>
            {list.map((item,id) => (
              <div className={`flex shadow-xl justify-between h-28 w-[25%] text-xl bg-[${item.colors}] p-4 px-6 rounded-lg`}>
                  <div className='flex flex-col justify-center font-semibold '>
                    <div className='font-bold'>2843</div>
                    <div>Library Visitors</div>
                  </div>
                  <div className=' my-auto w-12 h-12 rounded-full shadow-2xl hover:scale-110 transition-all ease-in-out cursor-pointer  bg-white p-2 '><DashboardIcon  style={{fontSize: "2rem",color:"black",textAlign:"center"}}/></div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Admin