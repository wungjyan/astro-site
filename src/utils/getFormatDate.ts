function formatDate(date: Date): string {
  const d = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [month, day, year] = d.split("/");
  return `${month}-${day}，${year}`;
}

export default formatDate;
