import { HeaderBurgerMenuBtn } from './HeaderBurgerMenuBtn'
import { HeaderThemeSelect } from './HeaderThemeSelect'
import { HeaderUserInfo } from './HeaderUserInfo'

export const Header = () => (
  <header className='flex justify-between bg-white-primary px-5 py-[14px] dark:bg-black'>
    <HeaderBurgerMenuBtn />
    <div className='flex items-center gap-[14px]'>
      <HeaderThemeSelect />
      <HeaderUserInfo />
    </div>
  </header>
)
