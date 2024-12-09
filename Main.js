import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import RegistartionForm from "./RegistartionForm";
import StudentForm from "./StudentForm";
import StudentEDit from "./StudentEdit";
import StudentTable from "./StudentTable";
import Login from "./Login";
import AddInformation from "./AddtoInformation";
function Main(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<RegistartionForm></RegistartionForm>}></Route>
                    <Route path="/StudentForm" element={<StudentForm></StudentForm>}></Route>
                    <Route path="/StudentEDit/:Studentid" element={<StudentEDit></StudentEDit>}></Route>
                    <Route path="/StudentTable" element={<StudentTable></StudentTable>}></Route>
                    <Route path="/Login" element={<Login></Login>}></Route>
                    <Route path="/AddInformation" element={<AddInformation></AddInformation>}></Route>
                </Routes>
            </Router>

        </div>
    )
}
export default Main;