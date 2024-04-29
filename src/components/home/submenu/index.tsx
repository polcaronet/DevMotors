"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

import { X, Menu} from "lucide-react"
import { MenuProps } from '@/utils/actions/menu.type'

interface SubMenuProp{
  menu: MenuProps
}

export function Submenu({ menu }: SubMenuProp){
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 768){
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

  }, [])

  function toggleMenu(){
    setIsOpen(!isOpen);
  }

  return(
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Serviços
      </div>

      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>

        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}


        {menu.objects.map( item =>  (
          <li key={item.slug}>
            <Link href={`/post/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}