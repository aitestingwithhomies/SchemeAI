'use client'

import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import Container from '@component/Container'
import BrandLogo from '@component/BrandLogo'
import HeaderMenu from '@component/HeaderMenu'
import HeaderMenuLinks from '@component/HeaderMenuLinks'
import HeaderSearch from '@component/HeaderSearch'
import IconGithub from '@component/IconGithub'
import IconTwitter from '@component/IconTwitter'
import ButtonGithubStars from './ButtonGithubStars'

export default function Header() {
  const routerPathname = usePathname()

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => setShowMenu(false), [routerPathname])

  const menuLinks = [
    {
      title: 'Components',
      href: '/components/',
      external: false,
    },
  ]
  const socialLinks = [
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/10 backdrop-blur">
      <Container classNames="relative max-w-screen-xl px-4 flex h-16 items-center justify-between gap-4 sm:gap-8 max-w-7xl xl:px-6">
        <div className="flex items-center gap-2 sm:gap-6">
          <BrandLogo fontSize="text-xl" />

          <HeaderMenuLinks
            menuLinks={menuLinks}
            navClass="hidden sm:block lg:flex-1"
            ulClass="gap-4 flex"
          />
        </div>

        <div className="flex items-center justify-end gap-4 sm:gap-8">
          <HeaderSearch />
          <HeaderMenu
            showMenu={showMenu}
            handleSetShowMenu={setShowMenu}
            menuLinks={[...menuLinks, ...socialLinks]}
          />
        </div>
      </Container>
    </header>
  )
}

