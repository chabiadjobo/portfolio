import React from 'react'
import { Link } from "react-router-dom"
import { DisclosureButton, DisclosurePanel } from '@headlessui/react'


const navigation = [
  { name: 'Accueil', title: 'Accueil', href: '/', current: false },
  { name: 'Profil Professionnel', title: 'Profil Professionnel', href: '/profil', current: false },
  { name: 'Projets et Publications', title: 'Projets et Publications', href: '/projetspublications', current: false },
  // { name: 'Publications', title: 'Publications', href: '#mm', current: false },
  { name: "Centres d'intérêt", title: "Centres d'intérêt", href: '/centredinterets', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const NavMobile = () => {
  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as={Link}
            to={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  )
}
