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

type PostsProps = {
  title: string;
  date: string;
  subtitle: string;
  category: string;
  slug: string;
}[];

export function sortPostsByDate(posts: PostsProps) {
  return posts.sort((a, b) => {
    const dateA: any = new Date(a.date);
    const dateB: any = new Date(b.date);
    return dateB - dateA;
  });
}

export function filterPostsByYear(posts: PostsProps) {
  const sortedPosts = sortPostsByDate(posts);

  const years = Array.from(
    new Set(sortedPosts.map((post) => new Date(post.date).getFullYear()))
  );

  return years.map((year) => {
    const filteredPosts = sortedPosts.filter(
      (post) => new Date(post.date).getFullYear() == year
    );

    return {
      year,
      contents: filteredPosts,
    };
  });
}
