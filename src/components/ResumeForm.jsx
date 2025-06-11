export default function ResumeForm({ resumeData, setResumeData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setResumeData({ ...resumeData, [name]: value });
    };

    return (
        <form style={{ flex: 1 }}>
            {Object.entries(resumeData).map(([key, value]) => (
                <div key={key}>
                    <label style={{ textTransform: "capitalize" }}>{key}:</label>
                    <textarea
                        name={key}
                        value={value}
                        onChange={handleChange}
                        rows={key === "summary" || key === "experience" ? 4 : 2}
                        style={{ width: "100%", marginBottom: "1rem" }}
                    />
                </div>
            ))}
        </form>
    );
}
