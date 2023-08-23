
function Home_Header() {
 

    return (
        <div className="flex justify-between items-center w-full h-[60px] bg-black ">
            <p className="ml-10 text-white">LEARNHUB</p>
            <div>
            <button className="mr-8 bg-white hover:bg-gray-300 text-gray-800  py-1 px-2 border border-gray-400 rounded shadow">
                เข้าสู่ระบบ</button>
            <button className="mr-10 bg-[#BAE8E8]  text-gray-800  py-1 px-2 border border-gray-400 rounded shadow">
                สร้างบัญชี</button>
            </div>
        </div>
    )
  }
  
  export default Home_Header
  