import React from 'react';
import FormHeader from '../home/create/form-header';
import FormContainer from '../home/create/form-container';

interface CreateCardProps {
    setBorderColor: (color: string) => void;
    setTheme: (theme: React.ReactNode) => void;
    setName: (name: string) => void;
}

const CreateCard: React.FC<CreateCardProps> = ({ setBorderColor, setTheme, setName }) => {
    return (
        <form className="overflow-y-auto h-screen">
            <FormHeader />
            <FormContainer
                setName={setName}
                setBorderColor={setBorderColor}
                setTheme={setTheme}
            />
        </form>
    );
};

export default CreateCard;
