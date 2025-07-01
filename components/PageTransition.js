"use client"

import { useEffect } from "react"

export default function PageTransition({ children }) {
  useEffect(() => {
    // Add page transition class
    document.body.classList.add("page-enter")

    const timer = setTimeout(() => {
      document.body.classList.add("page-enter-active")
      document.body.classList.remove("page-enter")
    }, 50)

    return () => {
      clearTimeout(timer)
      document.body.classList.remove("page-enter", "page-enter-active")
    }
  }, [])

  return <>{children}</>
}
