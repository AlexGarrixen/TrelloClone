import { useRef, useState } from 'react';
import axios from 'axios';

const useUploadAttachment = (url, method) => {
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState({
    error: null,
    data: null,
    isUploading: false,
  });
  const filename = useRef('');

  const handleProgress = ({ loaded, total }) => {
    const progressCurrent = Math.floor((loaded * 100) / total);
    setProgress(progressCurrent);
  };

  const requestUploadFile = async (files) => {
    filename.current = files.name;
    setState({ ...state, isUploading: true });

    const formData = new FormData();
    formData.append('attachment', files);

    try {
      const { data: attachment } = await axios({
        url,
        method,
        data: formData,
        onUploadProgress: handleProgress,
      });
      setState({ ...state, isUploading: false, data: attachment });
      setProgress(0);
    } catch (e) {
      setState({ ...state, error: true });
    }
  };

  return {
    requestUploadFile,
    filename: filename.current,
    progress,
    ...state,
  };
};

export default useUploadAttachment;
