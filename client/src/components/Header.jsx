import threeDots from "../assets/icons/three-dots-vertical.png"
import logo from "../assets/icons/logo-small.png"
const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-20 border-b border-gray-[#D0D0D0] ">
    <img src={logo} alt="logo" className="h-[31px] w-[31px] mx-4"/>
      <h1 className="text-2xl text-[#716966] font-bold">EmptyCup</h1>
      <img src={threeDots} alt="three dots" className="size-8 mx-4" />
    </div>
  )
}

export default Header
