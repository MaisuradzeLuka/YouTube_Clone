const base_url = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(base_url + url, options);

    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
};
