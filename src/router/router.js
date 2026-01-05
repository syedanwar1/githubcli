import {Route,Routes,Navigate} from "react-router-dom";
import Education from "../profile/education";
import Experience from "../profile/experience";
import Skills from "../profile/skills";
import About from "../profile/about";
import Login from "../login/login";
import ProtectedRoute from "../login/topPage";
import ResumeCli from "../profile/resume";

export default function Pagination (){
    return(
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
      <Route path="/about" element={<About />}>
        <Route index element={<Experience />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="cli" element={<ResumeCli />} />
        </Route>
      </Route>
    </Routes>
    </>
    );

}