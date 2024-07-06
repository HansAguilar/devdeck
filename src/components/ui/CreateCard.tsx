import React from 'react';
import FormHeader from '../home/create/form-header';
import FormContainer from '../home/create/form-container';

interface CreateCardProps {
    setBorderColor: (color: string) => void;
    setTheme: (theme: React.ReactNode) => void;
    setName: (name: string) => void;
    setTitle: (title: string) => void;
    setBio: (bio: string) => void;
    setProfilePic: (profilePic: string) => void;
    setLogo: (logo: string) => void;
    onTagsChange: (stack : string[])=> void
}

const CreateCard: React.FC<CreateCardProps> = ({ setBorderColor, setTheme, setName, setTitle, setBio, setProfilePic, setLogo, onTagsChange }) => {
    return (
        <form className="overflow-y-auto h-screen">
            <FormHeader />
            <FormContainer
                setName={setName}
                setBorderColor={setBorderColor}
                setTheme={setTheme}
                setTitle={setTitle}
                setBio={setBio}
                setProfilePic={setProfilePic}
                setLogo={setLogo}
                onTagsChange={onTagsChange}

            />
        </form>
    );
};

export default CreateCard;
