function formatDate(date: Date | undefined | null) {
  if (!date) {
    return "";
  }
  const str = new Date(date).toDateString();
  const need = str.split(" ").slice(1);
  return `${need[0]} ${parseInt(need[1])},${need[2]}`;
}

export default formatDate;
