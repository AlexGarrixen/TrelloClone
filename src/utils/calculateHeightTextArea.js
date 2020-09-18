const calculeHeightTextArea = (target) => {
  const { value } = target;
  const lines = value.split(/\n/).length;

  target.rows = lines;
};

export default calculeHeightTextArea;
