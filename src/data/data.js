export const currentServices = [
  {
    img: "https://www.islamicfinder.org/news/preview-thumbnail/post646_thumb_20211124_072050.png/646",
    type: "5x Daily Prayers",
  },
  {
    img: "https://cdn.dentonmosque.com/wp-content/uploads/2018/01/maxresdefault-1024x576.jpg",
    type: "Friday Khutbah + Prayer",
  },
  {
    img: "https://cdn.siasat.com/wp-content/uploads/2019/05/1-4-1-1.jpg",
    type: "Taraweeh Prayer with Complete",
  },
  {
    img: "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=600&h=337&q=100",
    type: "Quran Completion",
  },
  {
    img: "https://images.jazelc.com/uploads/unitedaccessllc/fundraising.png",
    type: "Fundraising",
  },
  {
    img: "https://media.premiumtimesng.com/wp-content/files/2015/12/mosque-prayer.jpg",
    type: "Eid Salat",
  },
];

export const charityQuotes = [
  {
    quote:
      "The Prophet Muhammad(SAW) said: 'The believer's shade on the Day of Resurrection will be his charity' - Al-Tirmidhi, Hadith 604",
  },
  {
    quote:
      "The Prophet(SAW) said: 'Give charity without delay, for it stands in the way of calamity.' (Al-Tirmidhi)",
  },
  {
    quote:
      "Allah, the Exalted, says, 'Spend, O son of Adam, and I shall spend on you.' – Prophet Muhammad, upon him be peace (Al-Bukhari and Muslim).",
  },
];

export const getRandomCharityQuote = () =>
  charityQuotes[Math.floor(Math.random() * charityQuotes.length)].quote;
