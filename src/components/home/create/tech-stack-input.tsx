"use client";
import React, { useState, useEffect } from 'react';

interface TagInputProps {
  suggestions: string[];
  onTagsChange: (stack : string[])=> void
}

const TechStack: React.FC<TagInputProps> = ({ suggestions, onTagsChange }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const maxTags = 7;

  useEffect(() => {
    if (input) {
      setFilteredSuggestions(suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(input.toLowerCase()) &&
        !tags.includes(suggestion)
      ));
    } else {
      setFilteredSuggestions([]);
    }
  }, [input, suggestions, tags]);

  const addTag = (tag: string) => {
    if (!tags.includes(tag) && tags.length < maxTags) {
      const newTags = [...tags, tag];
      setTags(newTags);
      setInput('');
      onTagsChange(newTags); 
    }
  };

  const removeTag = (tag: string) => {
    const newTags = tags.filter(t => t !== tag);
    setTags(newTags);
    onTagsChange(newTags); 
  };

  return (
    <div className="w-full">
      <div className="border border-gray-300 dark:border-neutral-700 rounded p-2.5 bg-gray-50 dark:bg-[#0A0E15] shadow-input">
        <div className="flex flex-wrap mb-2">
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 dark:text-white rounded px-2 py-1 m-1">
              {tag}
              <button
                type="button"
                className="ml-2"
                onClick={() => removeTag(tag)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`w-full bg-gray-50 dark:bg-[#0A0E15] text-black dark:text-white placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-[#A855F7] disabled:cursor-not-allowed disabled:opacity-50`}
          placeholder="Add a stack"
          disabled={tags.length >= maxTags}
        />
      </div>
      {filteredSuggestions.length > 0 && (
        <div className="border border-gray-300 dark:border-neutral-700 rounded mt-1 bg-gray-50 dark:bg-[#0A0E15] shadow-input max-h-40 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => addTag(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800 text-white"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
      {tags.length >= maxTags && (
        <div className="text-red-500 mt-2">Maximum of {maxTags} stacks allowed</div>
      )}
    </div>
  );
};

export default TechStack;
