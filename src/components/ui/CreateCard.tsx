import React, { useState } from 'react';
import FormHeader from '../home/create/form-header';

const inputStyle = `flex h-10 w-full border-none bg-gray-50 dark:bg-[#0A0E15] text-black dark:text-white shadow-input rounded-md p-3 text-sm file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-[#A855F7]
          disabled:cursor-not-allowed disabled:opacity-50
          dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
          group-hover/input:shadow-none transition duration-400`;

const fileInputStyle = `file:mr-4 file:rounded-md file:border file:border-gray-300
					 file:text-sm file:font-semibold
					 file:bg-white file:text-black
					 hover:file:bg-gray-100
					 dark:file:bg-gray-700 dark:file:text-white dark:file:border-gray-600
					 dark:hover:file:bg-gray-600`;

const cardThemes : {[key: string]: React.ReactNode} = {
  theme1: <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>,
  theme2: <div className="absolute inset-0 -z-10 h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>,
  theme3: <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>,
  theme4: <div className="absolute inset-0 -z-20 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> 
  //dagdag nalang dito
}

interface CreateCardProps {
    setBorderColor: (color: string) => void;
    setTheme: (theme : React.ReactNode ) => void;
}

const CreateCard: React.FC<CreateCardProps> = ({ setBorderColor, setTheme }) => {
    const [skills, setSkills] = useState<string[]>([]);
 
    const handleBorderColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBorderColor(event.target.value);
    };

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

      const selectedTheme = event.target.value;
      setTheme(cardThemes[selectedTheme]);
    };

    return (
        <form className="p-8 dark overflow-y-auto h-screen">
            <FormHeader />
            <div>
                <label className="mb-3 mt-5 block text-xs font-medium text-slate-200" htmlFor="username">Username</label>
                <input
                    className={inputStyle}
                    id="username"
                    type="text"
                    name="username"
                    placeholder="ex. @green_dev"
                    required
                />
            </div>

            <div>
                <label className="mb-3 mt-5 block text-xs font-medium text-slate-200" htmlFor="title">Title</label>
                <input
                    className={inputStyle}
                    id="title"
                    type="text"
                    name="title"
                    placeholder="ex. frontend developer"
                    required
                />
            </div>

            <div>
                <label className="mb-3 mt-5 block text-xs font-medium text-slate-200" htmlFor="bio">Bio</label>
                <input
                    className={inputStyle}
                    id="bio"
                    type="text"
                    name="bio"
                    placeholder="ex. An empty search history reveals more than a full one"
                    maxLength={30}
                    required
                />
            </div>

            <div>
                <label className="mb-3 mt-5 block text-xs font-medium text-slate-200" htmlFor="skills">Tech Stack</label>
                <input
                    className={inputStyle}
                    id="skills"
                    type="text"
                    name="skills"
                    required
                />
            </div>

            <hr className="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4`}>
                <div>
                    <label className="mb-3 block text-xs font-medium text-slate-200" htmlFor="profilePicture">Profile Picture</label>
                    <input
                        className={`${inputStyle} ${fileInputStyle}`}
                        id="profilePicture"
                        type="file"
                        name="profilePicture"
                        accept="image/*"
                        required
                    />
                </div>
                
                <div>
                    <label className="mb-3 block text-xs font-medium text-slate-200" htmlFor="borderColor">Border Color</label>
                    <input
                        className={`${inputStyle}`}
                        id="borderColor"
                        type="color"
                        name="borderColor"
                        onChange={handleBorderColorChange}
                        required
                    />
                </div>

                <div>
                    <label className="mb-3 block text-xs font-medium text-slate-200" htmlFor="logo">Logo</label>
                    <input
                        className={`${inputStyle} ${fileInputStyle}`}
                        id="logo"
                        type="file"
                        name="logo"
                        accept="image/*"
                        required
                    />
                </div>

                <div>
                    <label className="mb-3 block text-xs font-medium text-slate-200" htmlFor="theme">Card Theme</label>
                    <select className={`${inputStyle}`} id="theme" name="theme" onChange={handleThemeChange} required >
                    {Object.keys(cardThemes).map((themeKey) => (
                      <option key={themeKey} value={themeKey}>
                        Theme {themeKey.substring(5)} {/* Assuming keys are in format 'themeX' */}
                      </option>
                    ))}
                    </select>
                </div>
            </div>
        </form>
    );
};

export default CreateCard;
