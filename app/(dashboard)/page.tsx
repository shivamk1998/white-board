"use client"

import {EmptyOrg}  from "./_components/empty-org"
import { useOrganization } from "@clerk/clerk-react"

const DashboardPage=()=> {
const {organization}= useOrganization()

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization?( <EmptyOrg/>):(<p>Hello</p>

      )}
     
    </div>
  )
}

export default DashboardPage