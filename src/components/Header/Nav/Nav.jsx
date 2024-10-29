import { Link } from "react-router-dom"

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

export default function Nav() {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            title={item.title}
            to={item.href}
            // aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium',
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
