import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// This component automatically scrolls to the top of the page
// whenever the route/location changes
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: 'auto' // Using 'auto' instead of 'smooth' for immediate scrolling
    })
  }, [pathname]) // Re-run this effect when the path changes

  return null // This component doesn't render anything
}

export default ScrollToTop 