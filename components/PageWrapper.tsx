import React from 'react'
import Header from './Header'

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
            <main className="overflow-y-auto h-[100vh] w-[calc(100vw-18rem)]">
                {/* <SidebarTrigger className="absolute top-5 left-44 z-10"/> */}
                {children}
            </main>
        </div>
  )
}

export default PageWrapper