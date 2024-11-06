import { Navigate, Route, Routes } from "react-router-dom"
import FirstStep from "../components/form/FirstStep"
import SecondStep from "../components/form/SecondStep"
import ThirdStep from "../components/form/ThirdStep"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<FirstStep />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/second-page' element={<SecondStep />} />
            <Route path="/third-page" element={<ThirdStep />} />
        </Routes>

    )
}

export default AppRouter