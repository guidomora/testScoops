import { Navigate, Route, Routes } from "react-router-dom"
import FirstStep from "../components/form/FirstStep"
import SecondStep from "../components/form/SecondStep"
import ThirdStep from "../components/form/ThirdStep"
import FourthStep from "../components/form/FourthStep"
import FifthStep from "../components/form/FifthStep"
import SixthStep from "../components/form/SixthStep"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<FirstStep />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/second-page' element={<SecondStep />} />
            <Route path="/third-page" element={<ThirdStep />} />
            <Route path="/fourth-page" element={<FourthStep />} />
            <Route path='/fifth-page' element={<FifthStep />} />
            <Route path="/sixth-page" element={<SixthStep />} />
        </Routes>

    )
}

export default AppRouter