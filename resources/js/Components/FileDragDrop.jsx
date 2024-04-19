import { forwardRef, useEffect, useRef, useState } from 'react';

export default forwardRef(function FileDragoDrop({ type = 'file', className = '', isFocused = false, onFileChange, ...props }, ref) {
  const input = ref ? ref : useRef();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const newFile = e.dataTransfer.files[0];
    if (newFile) {
      onFileChange(newFile);
    }
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      onFileChange(newFile);
    }
  };

  const containerStyle = {
    border: `2px dashed ${isDragging ? '#3182ce' : '#e2e8f0'}`,
    borderRadius: '0.5rem',
    padding: '1rem',
  };

  return (
    <div
      className={className}
      style={containerStyle}
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        {...props}
        type={type}
        style={{ display: 'none' }}
        ref={input}
      />
      <label
        htmlFor="fileInput"
        style={{ cursor: 'pointer', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}
      >
        {isDragging ? 'Drop file here' : 'Drag & Drop or Click to Upload'}
      </label>
    </div>
  );
});


