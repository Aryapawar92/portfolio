function textSplitter(text: string) {
  const array = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(text)) !== null) {
    array.push(match[0]);
  }

  return array;
}

export default textSplitter;
