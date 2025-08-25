
"use client"

import React from "react"

interface MeshBgProps {
  className?: string
  children?: React.ReactNode
}

export const MeshBg: React.FC<MeshBgProps> = ({ className, children }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: "url('/images/mesh-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  )
}
