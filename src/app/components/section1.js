import React from 'react'
import Image from "next/image"

export default function section1() {
  return (
    
        <div className="grid md:grid-cols-2">
            <div className="image">
            <Image src={"../app/images/img1.jpg"} alt="sample" width={100} height={100} />
            </div>
            <div className="info">

            </div>
        </div>

  )
}
