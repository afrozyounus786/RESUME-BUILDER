//Outlet is used to render the child routes of a parent route. It acts as a placeholder for the child components that will be rendered based on the current route.
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      Layout
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
