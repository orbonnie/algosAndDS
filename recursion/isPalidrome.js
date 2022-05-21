function isPalindrome(str) {
  if (str.length === 1) return true;
  const reverse = (str) => {
      if (str.length === 1) return str;
      return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
  }

  let reversed = reverse(str);
  return (reversed === str);
}