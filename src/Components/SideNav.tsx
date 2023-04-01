type Props = {}

function SideNav({}: Props) {
  
  return (
    <div className="bg-[#333233] w-1/6 flex">
      <div className="h-8 w-full flex items-center">
        <button
        className="h-3/6 w-8 bg-[#ffffff22] rounded-xl flex items-center justify-center"
        >+</button>
      </div>
    </div>
  )
}

export default SideNav