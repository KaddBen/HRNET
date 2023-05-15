import React, { useState } from 'react'
import { useEffect } from 'react';
const Fade = ({ visible, children ,fadeDuration,open }) => {
const [fade, setFade] = useState(false)
useEffect(() => {
// eslint-disable-next-line no-unused-expressions
if(fadeDuration != null) {
document.querySelector(".fade").setAttribute("transition",`visibility ${fadeDuration}`)
}
else {
    setFade(false)
    document.querySelector(".fade").style.transition = 'opacity 0s';
}
console.log("123")
},[fade, fadeDuration])

const className = `fade ${visible ? "" : "out"}`.trim();
return <div className={className}>{children}</div>;
      
}

export default Fade