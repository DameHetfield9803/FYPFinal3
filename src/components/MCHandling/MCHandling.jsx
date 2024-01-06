import React, { useState } from 'react';
import Navbar from "../NavBar/NavBar"; // importing the navigation bar with the home page incase want to go back to home page


export default function MCHandling() {
    const [selectedFile, setSelectedFile] = useState(null); // File option 
    const [additionalInfo, setAdditionalInfo] = useState(''); // Reasoning 
    const [submitting, setSubmitting] = useState(false); // Submit Function (button function)
    const [error, setError] = useState(null); // Error handling 

    // i have use 4 types of function in this MC handling page (daniel)

    // Selecting File function 
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]); 
        setError(null); // Clear any type of previous errors when a new file is selected
    };

    // Additional information 
    const handleAdditionalInfoChange = (event) => {
        setAdditionalInfo(event.target.value);
    };

    // Submit button function with error handling function 
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (selectedFile) {
            setSubmitting(true);

            try {
                // Simulate file upload delay (replace this with your actual upload logic)
                await new Promise(resolve => setTimeout(resolve, 1500));

                console.log('File submitted:', selectedFile);
                console.log('Additional Information:', additionalInfo);
                // Add your logic to handle the file submission and additional information

                // Reset form state after submission
                setSelectedFile(null);
                setAdditionalInfo('');
                setSubmitting(false);
            } catch (error) {
                console.error('File submission error:', error);
                setError('An error occurred during file submission. Please try again.');
                setSubmitting(false);
            }
        } else {
            setError('Please select a file before submitting.'); // function when submit empty file
        }
    };

    return (
        <div>
            <Navbar /> 
            <div>
                <h1>Medical Certificate Page For TSH company</h1> 
            
                <div>
                    <form onSubmit={handleSubmit}>
                    <p></p>
                      <b><h2>Upload Your Medical Certificate Here</h2></b>  
                    <p></p>
                        <label htmlFor="mcUpload">Choose Medical Certificate File (Only accepts PDF):</label>
                        <input
                            type="file"
                            id="mcUpload"
                            onChange={handleFileChange}
                            accept=".pdf, .doc, .docx"
                        />

                        <div>
                    <p></p>
                            <label htmlFor="additionalInfo">Additional Information(e.g : How many days of Medical Leave etc):</label>
                            <textarea
                                id="additionalInfo"
                                value={additionalInfo}
                                onChange={handleAdditionalInfoChange}
                            />
                        </div>
                    <p></p>
                        <button type="submit" disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Submit Here'}
                        </button>

                        {error && <div style={{ color: 'red' }}>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}
