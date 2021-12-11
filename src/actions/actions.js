export const getHadith = async () => {
  try {
    const resp = await fetch("https://masjid-server.herokuapp.com/");
    const data = await resp.json();
    console.log(JSON.stringify(data, null, 2), "<=0-0-0-0-data????");
    return data;
  } catch (e) {
    throw new Error(`Error fetching Hadiths - ${e}`);
  }
};
