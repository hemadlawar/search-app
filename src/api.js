import axios from "axios";

export async function searchImages(searchTermm) {
  const accessKey = "zSZhiwnlLNjtT2gXtfuvGqrCThSjZjZFGJ2MQMHYevw";
  const apiUrl = `https://api.unsplash.com/search/photos`;
  const searchTerm = searchTermm;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      params: {
        query: searchTerm,
      },
    });

    // Handle the response data here
    return response.data.results;
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
}
