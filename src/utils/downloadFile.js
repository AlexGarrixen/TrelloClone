import axios from 'axios';

const downloadFile = async (url, nameDownload) => {
  try {
    const { data } = await axios.get(url, {
      responseType: 'blob',
    });

    const urlSrc = URL.createObjectURL(new Blob([data]));
    const tagLink = document.createElement('a');

    tagLink.href = urlSrc;
    tagLink.setAttribute('download', nameDownload);
    document.body.appendChild(tagLink);
    tagLink.click();
    tagLink.remove();
  } catch (e) {}
};

export default downloadFile;
