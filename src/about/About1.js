import React, { useState } from "react";

function About1(){
    const [info, setInfo] = useState(true)
    const [edu, setEdu] = useState(false)

    const gg = ["Tran Ngoc Phu", "Sinh ngay 28 thang 10", "hehehehe"]
    const gg2 = ["Can Tho University", "Sinh ngay 28 thang 10", "hehehehe"]

    const handleInfo = () => {
        setInfo(true)
        setEdu(false)
    }
    const handleEdu = () => {
        setInfo(false)
        setEdu(true)
    }
    return(
        <div>
            <div>
                <button onClick={handleInfo}>INFO</button>
                <button onClick={handleEdu}>EDUCATION</button>
            </div>
            { info && (
                <div>
                    {gg.map((g, index) => {
                        return(
                            <div>
                                <h2>{g}</h2>
                            </div>
                        )
                    })}
                </div>
            )}
            { edu && (
                <div>
                    <h2>Can Tho University</h2>
                    <h2>Computer Scientist</h2>
                </div>
            )}
        </div>
    )
}

export default About1