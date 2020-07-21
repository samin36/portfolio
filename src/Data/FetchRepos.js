const url =
  "https://api.github.com/users/samin36/starred?sort=updated&direction=desc";

const parseLanguages = async (language_url) => {
  const resp = await fetch(language_url);
  const data = await resp.json();
  let sum = 0;
  let normalizedData = Object.keys(data);
  normalizedData.forEach((language) => (sum += data[language]));
  normalizedData = normalizedData.map((language) => {
    return {
      [language]: ((data[language] / sum) * 100).toFixed(2),
    };
  });
  return normalizedData;
};

const getRepos = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  const filteredData = await Promise.all(
    data.map(async (repo) => {
      const languages = await parseLanguages(repo.languages_url);
      const date = new Date(repo.created_at);
      return {
        name: repo.name,
        created_at: `${date.getDate()} ${date.toLocaleString("default", {
          month: "long",
        })} ${date.getFullYear()}`,
        description: repo.description,
        homepage: repo.homepage,
        languages,
        html_url: repo.html_url,
      };
    })
  );
  return filteredData;
};

export default getRepos;
