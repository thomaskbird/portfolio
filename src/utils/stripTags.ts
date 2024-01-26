const stripTags = (str: string) => {
  if(!str) return;
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}

export default stripTags;