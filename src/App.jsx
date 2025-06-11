import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    experience: "",
    skills: "",
  });

  return (
    <div className="container">
      <h1>React Resume Builder</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  );
}

export default App;
