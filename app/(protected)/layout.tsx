import { Navbar } from "./_components/navbar"

interface ProtectedLayoutProps {
    children:React.ReactNode
}

const ProtectedLayout = ({children}:ProtectedLayoutProps) => {
  return (
    <div className="w-full flex flex-col gap-y-[1.5rem] items-center justify-center py-6">
        <Navbar/>
        {children}
    </div>
  )
}

export default ProtectedLayout;