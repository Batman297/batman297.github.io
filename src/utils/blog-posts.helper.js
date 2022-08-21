export const getPostsByCategory = (posts, category) => {
  const postsFilteredByCategory = posts.filter((post) => {
    if (category === "All") return post;

    return post.categories.includes(category);
  });

  const years = Array.from([
    ...new Set(
      postsFilteredByCategory.map((category) =>
        new Date(category.createdAt).getFullYear()
      )
    ),
  ]);

  const transformedPosts = years.map((year) => {
    const posts = postsFilteredByCategory.filter((post) => {
      return post.createdAt.getFullYear() === year;
    });
    const reversedPosts = posts.reverse();

    return { year, posts: reversedPosts };
  });

  return transformedPosts.reverse();
};

export const getCategories = (posts) => {
  const transformedCategories = posts
    .reduce((acc, post) => {
      return acc.concat(post.categories);
    }, [])
    .filter((value, index, array) => {
      return array.indexOf(value) === index;
    })
    .map((categoryName) => {
      const categoryLength = posts.reduce((acc, post) => {
        return post.categories.includes(categoryName) ? (acc += 1) : acc;
      }, 0);

      return {
        categoryName,
        categoryLength,
      };
    });

  transformedCategories.push({
    categoryName: "All",
    categoryLength: posts.length,
  });

  return transformedCategories.reverse();
};

export const getCustomDate = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "Mei",
    "Juni",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};
