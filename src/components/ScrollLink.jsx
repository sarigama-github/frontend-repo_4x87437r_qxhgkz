import { useEffect } from 'react'

function ScrollLink({ href, children, className = '', onClick }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [])

  const handleClick = (e) => {
    const targetId = href?.startsWith('#') ? href.slice(1) : null
    const el = targetId ? document.getElementById(targetId) : null
    if (el) {
      e.preventDefault()
      const y = el.getBoundingClientRect().top + window.pageYOffset - 96
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    onClick?.(e)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

export default ScrollLink
