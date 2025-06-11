export default function ResumeForm({ resumeData, setResumeData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setResumeData({ ...resumeData, [name]: value });
    };

    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...resumeData.education];
        updatedEducation[index][field] = value;
        setResumeData({ ...resumeData, education: updatedEducation });
    };

    const addEducation = () => {
        setResumeData({
            ...resumeData,
            education: [...resumeData.education, { school: "", title: "", date: "" }],
        });
    };

    return (
        <form style={{ flex: 1 }}>
            {/* Basic Info Fields */}
            {["name", "email", "phone", "summary", "experience", "skills"].map((key) => (
                <div key={key}>
                    <label style={{ textTransform: "capitalize" }}>{key}:</label>
                    <textarea
                        name={key}
                        value={resumeData[key]}
                        onChange={handleChange}
                        rows={key === "summary" || key === "experience" ? 4 : 2}
                        style={{ width: "100%", marginBottom: "1rem" }}
                    />
                </div>
            ))}

            {/* Education Section */}
            <h3>Education</h3>
            {resumeData.education.map((edu, index) => (
                <div key={index} style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "0.5rem" }}>
                    <input
                        type="text"
                        placeholder="School Name"
                        value={edu.school}
                        onChange={(e) => handleEducationChange(index, "school", e.target.value)}
                        style={{ width: "100%", marginBottom: "0.5rem" }}
                    />
                    <input
                        type="text"
                        placeholder="Title of Study"
                        value={edu.title}
                        onChange={(e) => handleEducationChange(index, "title", e.target.value)}
                        style={{ width: "100%", marginBottom: "0.5rem" }}
                    />
                    <input
                        type="text"
                        placeholder="Date of Study"
                        value={edu.date}
                        onChange={(e) => handleEducationChange(index, "date", e.target.value)}
                        style={{ width: "100%" }}
                    />
                </div>
            ))}
            <button type="button" onClick={addEducation} style={{ marginTop: "1rem" }}>
                ➕ Add Education
            </button>
        </form>
    );
}
