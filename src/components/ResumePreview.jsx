export default function ResumePreview({ resumeData }) {
    return (
        <div style={{ flex: 1, border: "1px solid #ccc", padding: "1rem" }}>
            <h2>{resumeData.name}</h2>
            <p><strong>Email:</strong> {resumeData.email}</p>
            <p><strong>Phone:</strong> {resumeData.phone}</p>
            <p><strong>Summary:</strong><br />{resumeData.summary}</p>
            <p><strong>Education:</strong><br />{resumeData.education}</p>
            <p><strong>Experience:</strong><br />{resumeData.experience}</p>
            <p><strong>Skills:</strong><br />{resumeData.skills}</p>
        </div>
    );
}
