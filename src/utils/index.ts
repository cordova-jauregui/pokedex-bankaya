const capitalize = (text = "") => {
  if (text.length < 3) text = text.toUpperCase();
  else text = text.charAt(0).toUpperCase() + text.substring(1);
  return text.replace(/-/g, " ");
};

export { capitalize };
