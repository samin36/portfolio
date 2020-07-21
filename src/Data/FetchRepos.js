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
      return {
        name: repo.name,
        created_at: repo.created_at,
        description: repo.description,
        homepage: repo.homepage,
        languages,
        html_url: repo.html_url,
      };
    })
  );
  console.log(filteredData);
};

export default getRepos;
