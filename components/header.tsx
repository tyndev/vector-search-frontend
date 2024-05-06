import Logo from '@/components/ui/logo'
import Navlinks from '@/components/ui/navlinks'

export default function Header() {
  return (
    <div className='sticky top-0 bg-black z-40 transition-all duration-150 h-16 md:h-20'>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">            
            <div className="flex items-center flex-1">
                <Logo />
            </div>
            <div className="flex justify-end space-x-8">
                <Navlinks />
            </div>
        </div>
      </div>
    </div>
  );
}
