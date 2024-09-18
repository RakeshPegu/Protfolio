import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import React, { useState } from "react";
import CloudinaryUploadWidget from "../../Components/widget/uploadWidget";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import './adminPage.scss';


function AdminPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [images, setImages] = useState([]); // Track uploaded image public IDs
  
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const description = formData.get('description');

        try {
            // Ensure `images` contains the uploaded public IDs
            await apiRequest.post('/project/create_post', {
                name,
                description,
                images  // Sending the uploaded image public IDs
            });
            navigate('/');
        } catch (submitError) {
            console.error('Error in handleSubmit:', submitError);
            setError(submitError.response?.data?.message || 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='adminPage'>
            <div className="wrapper">
                <h1>Welcome Admin</h1>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label>Name of the project</label>
                        <input name="name" type='text' placeholder='Name of the project' required />
                        <label>Description</label>
                        <textarea name="description" placeholder='Write description about the project' required />
                        <label>Images</label>

                        <button type="submit" disabled={isLoading}>Submit</button>
                        {error && <span>{error}</span>}
                    </form>

                    <CloudinaryUploadWidget
                        uwConfig={{
                            multiple: true,
                            cloudName: "rakeshcloud",
                            uploadPreset: "protfolio",
                            folder: "project",
                        }}
                        setState={setImages}
                        />
                    
                 
                 
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
