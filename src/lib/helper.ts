// Format string to date
export function dateFormatter(dateStr: string) {
  const date = new Date(dateStr);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return {
    day: dayNames[date.getDay()],
    date: date.getDate(),
    month: monthNames[date.getMonth()],
    year: date.getFullYear(),
  };
}

// Concate tailwindcss classess
export function clsx(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ");
}
