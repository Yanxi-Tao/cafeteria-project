"use client"

import { useEffect, useRef } from "react"

export const Topbar = () => {
    let content = "Tao bar"
    const divRef = useRef(null)
    useEffect

    return <div ref={divRef}>{content}</div>
}