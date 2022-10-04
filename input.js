const courseId = require("./config/courseid");
const videoLinks = [
  {
    youtubeLink: "https://youtu.be/tFzELtAE7m8",
    vimeoLink: "https://vimeo.com/503658661",
  },
  {
    youtubeLink: "https://youtu.be/NKP9DbLedgQ",
    vimeoLink: "https://vimeo.com/503658880",
  },
  {
    youtubeLink: "https://youtu.be/XK_yGcLzvn4",
    vimeoLink: "https://vimeo.com/503659033",
  },
  {
    youtubeLink: "https://youtu.be/lbStAuPHmyo",
    vimeoLink: "https://vimeo.com/503659239",
  },
  {
    youtubeLink: "https://youtu.be/IxfsM5ZU7k4",
    vimeoLink: "https://vimeo.com/503659531",
  },
  {
    youtubeLink: "https://youtu.be/aWYmUjPrUts",
    vimeoLink: "https://vimeo.com/503659801",
  },
  {
    youtubeLink: "https://youtu.be/IY8eOqC-Z1I",
    vimeoLink: "https://vimeo.com/503660007",
  },
  {
    youtubeLink: "https://youtu.be/GtCXlS84Gms",
    vimeoLink: "https://vimeo.com/503660208",
  },
  {
    youtubeLink: "https://youtu.be/zLdaLIKXuHc",
    vimeoLink: "https://vimeo.com/503660450",
  },
  {
    youtubeLink: "https://youtu.be/LB371ZscIJM",
    vimeoLink: "https://vimeo.com/503660641",
  },
  {
    youtubeLink: "https://youtu.be/AEQD4jFekNE",
    vimeoLink: "https://vimeo.com/503660871",
  },
  {
    youtubeLink: "https://youtu.be/ffIkbUacEHI",
    vimeoLink: "https://vimeo.com/503661286",
  },
  {
    youtubeLink: "https://youtu.be/P0FKrb3_SFg",
    vimeoLink: "https://vimeo.com/503661518",
  },
  {
    youtubeLink: "https://youtu.be/hN1OECwcHzE",
    vimeoLink: "https://vimeo.com/503661762",
  },
  {
    youtubeLink: "https://youtu.be/NbEGirGxXWk",
    vimeoLink: "https://vimeo.com/503661976",
  },
  {
    youtubeLink: "https://youtu.be/aCt967HYtsg",
    vimeoLink: "https://vimeo.com/503662199",
  },
  {
    youtubeLink: "https://youtu.be/3Ktjc9gfYJs",
    vimeoLink: "https://vimeo.com/503662366",
  },
  {
    youtubeLink: "https://youtu.be/5j-msUH65ZE",
    vimeoLink: "https://vimeo.com/503662580",
  },
  {
    youtubeLink: "https://youtu.be/XpO2SJQ8QZA",
    vimeoLink: "https://vimeo.com/503662800",
  },
  {
    youtubeLink: "https://youtu.be/iMPBfH8f5wk",
    vimeoLink: "https://vimeo.com/503662974",
  },
  {
    youtubeLink: "https://youtu.be/hpT1owovJ7M",
    vimeoLink: "https://vimeo.com/503663042",
  },
  {
    youtubeLink: "https://youtu.be/9YIZskF84_o",
    vimeoLink: "https://vimeo.com/503663233",
  },
  {
    youtubeLink: "https://youtu.be/Esk88_9fpkk",
    vimeoLink: "https://vimeo.com/503663424",
  },
  {
    youtubeLink: "https://youtu.be/D4xOIOTNbw0",
    vimeoLink: "https://vimeo.com/503663613",
  },
  {
    youtubeLink: "https://youtu.be/IZZfEcOR7LU",
    vimeoLink: "https://vimeo.com/503663807",
  },
  {
    youtubeLink: "https://youtu.be/15YffAG27IQ",
    vimeoLink: "https://vimeo.com/503664006",
  },
  {
    youtubeLink: "https://youtu.be/2McS-_NnGBY",
    vimeoLink: "https://vimeo.com/503664171",
  },
  {
    youtubeLink: "https://youtu.be/-vK6jYwKeMY",
    vimeoLink: "https://vimeo.com/503664355",
  },
  {
    youtubeLink: "https://youtu.be/s5G2CL4L8mI",
    vimeoLink: "https://vimeo.com/503664544",
  },
  {
    youtubeLink: "https://youtu.be/XW1AGafuig4",
    vimeoLink: "https://vimeo.com/503664757",
  },
];



const course1 = {
  course: courseId[0].courseName,
  courseId: courseId[0].courseId,
  contents: videoLinks.map((videoLink, index) => {
    return {
      list: [{
        index: index + 1,
      }],
      week: 1 + index,
    };
  }),
};

const videoLinks2 = [
  {
    youtubeLink: "https://youtu.be/hJknHvDQG30",
    vimeoLink: "https://vimeo.com/504649954",
  },
  {
    youtubeLink: "https://youtu.be/wcEeN3Ntp1c",
    vimeoLink: "https://vimeo.com/504650059",
  },
  {
    youtubeLink: "https://youtu.be/jYLVEJ3VKC8",
    vimeoLink: "https://vimeo.com/504650059",
  },
  {
    youtubeLink: "https://youtu.be/gB5s9_egaX0",
    vimeoLink: "https://vimeo.com/504650213",
  },
  {
    youtubeLink: "https://youtu.be/UoUan2n_4Tc",
    vimeoLink: "https://vimeo.com/504650298",
  },
  {
    youtubeLink: "https://youtu.be/5ddkGYKOR5k",
    vimeoLink: "https://vimeo.com/504650390",
  },
  {
    youtubeLink: "https://youtu.be/vDjFrxxPFLk",
    vimeoLink: "https://vimeo.com/504650472",
  },
  {
    youtubeLink: "https://youtu.be/apRQgXXJu1Y",
    vimeoLink: "https://vimeo.com/504650550",
  },
  {
    youtubeLink: "https://youtu.be/NNutqmzh74c",
    vimeoLink: "https://vimeo.com/504650621",
  },
  {
    youtubeLink: "https://youtu.be/MmkmFXAt2yQ",
    vimeoLink: "https://vimeo.com/504650706",
  },
  {
    youtubeLink: "https://youtu.be/tBNMg21NULg",
    vimeoLink: "https://vimeo.com/504650757",
  },
  {
    youtubeLink: "https://youtu.be/pXEX6j6DuNc",
    vimeoLink: "https://vimeo.com/504650845",
  },
  {
    youtubeLink: "https://youtu.be/3hzYcI0CaA0",
    vimeoLink: "https://vimeo.com/504650939",
  },
  {
    youtubeLink: "https://youtu.be/savVAtNjLOM",
    vimeoLink: "https://vimeo.com/504651035",
  },
  {
    youtubeLink: "https://youtu.be/Lc296v5yEsQ",
    vimeoLink: "https://vimeo.com/504651093",
  },
  {
    youtubeLink: "https://youtu.be/sn8w0il8_bM",
    vimeoLink: "https://vimeo.com/504651164",
  },
  {
    youtubeLink: "https://youtu.be/z9ZvyGSp4uA",
    vimeoLink: "https://vimeo.com/504651214",
  },
  {
    youtubeLink: "https://youtu.be/0hsdf3r1wZk",
    vimeoLink: "https://vimeo.com/504651285",
  },
  {
    youtubeLink: "https://youtu.be/N9MZeBJfUOI",
    vimeoLink: "https://vimeo.com/504651353",
  },
  {
    youtubeLink: "https://youtu.be/mpVTvSvXW00",
    vimeoLink: "https://vimeo.com/504651425",
  },
  {
    youtubeLink: "https://youtu.be/SntPEiHFXDk",
    vimeoLink: "https://vimeo.com/504651517",
  },
  {
    youtubeLink: "https://youtu.be/2QCh3r0ddkE",
    vimeoLink: "https://vimeo.com/504651586",
  },
  {
    youtubeLink: "https://youtu.be/cZvjqCAT_UM",
    vimeoLink: "https://vimeo.com/504651666",
  },
  {
    youtubeLink: "https://youtu.be/9LwOkchZMrM",
    vimeoLink: "https://vimeo.com/504651745",
  },
  {
    youtubeLink: "https://youtu.be/94sUj4umJaQ",
    vimeoLink: "https://vimeo.com/504651805",
  },
  {
    youtubeLink: "https://youtu.be/nu5cdvFygR0",
    vimeoLink: "https://vimeo.com/504651864",
  },
  {
    youtubeLink: "https://youtu.be/8KT_GlfQ_28",
    vimeoLink: "https://vimeo.com/504651949",
  },
  {
    youtubeLink: "https://youtu.be/CY75CowDNXU",
    vimeoLink: "https://vimeo.com/504652006",
  },
  {
    youtubeLink: "https://youtu.be/KUL1jpXdMqU",
    vimeoLink: "https://vimeo.com/504757655",
  },
  {
    youtubeLink: "https://youtu.be/vLioOJ7Pg9Q",
    vimeoLink: "https://vimeo.com/504757759",
  },
];
const course2 = {
  course: courseId[1].courseName,
  courseId: courseId[1].courseId,
  videoLinks: videoLinks2.map((videoLink, index) => {
    return {
      videos: [videoLink],
      week: 1 + index,
    };
  }),
};

const videoLinks3 = [
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN1 Combined	": {
      youtubeLink: "https://youtu.be/82CzYF0xU_w",
      vimeoLink: "https://vimeo.com/502154343",
    },
  },
  {
    1.1: {
      youtubeLink: "https://youtu.be/0tR3kQiUB3E",
      vimeoLink: "https://vimeo.com/502165076",
    },
  },
  {
    1.2: {
      youtubeLink: "https://youtu.be/uT9r_tUzq3U",
      vimeoLink: "https://vimeo.com/502166676",
    },
  },
  {
    1.3: {
      youtubeLink: "https://youtu.be/Ewr-4uy1uGY",
      vimeoLink: "https://vimeo.com/502168467",
    },
  },
  {
    1.4: {
      youtubeLink: "https://youtu.be/TmPRd3JnuYo",
      vimeoLink: "https://vimeo.com/502169011",
    },
  },
  {
    1.5: {
      youtubeLink: "https://youtu.be/d39v96r8bTk",
      vimeoLink: "https://vimeo.com/502170306",
    },
  },
  {
    1.6: {
      youtubeLink: "https://youtu.be/QqFnJ9Nl4pM",
      vimeoLink: "https://vimeo.com/502171299",
    },
  },
  {
    1.7: {
      youtubeLink: "https://youtu.be/_h3hMmz0xuA",
      vimeoLink: "https://vimeo.com/502172475",
    },
  },
  {
    1.8: {
      youtubeLink: "https://youtu.be/VhBVihLJ824",
      vimeoLink: "https://vimeo.com/502173951",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 2 Combined": {
      youtubeLink: "https://youtu.be/LoHZg1cFQnI",
      vimeoLink: "https://vimeo.com/502306357",
    },
  },
  {
    2.1: {
      youtubeLink: "https://youtu.be/yMfdjCYyfsk",
      vimeoLink: "https://vimeo.com/502257899",
    },
  },
  {
    2.2: {
      youtubeLink: "https://youtu.be/FXr6pRMiKEs",
      vimeoLink: "https://vimeo.com/502260286",
    },
  },
  {
    2.3: {
      youtubeLink: "https://youtu.be/mHc_NEm_3G4",
      vimeoLink: "https://vimeo.com/502262279",
    },
  },
  {
    2.4: {
      youtubeLink: "https://youtu.be/zQJo2WQ_e8E",
      vimeoLink: "https://vimeo.com/502264823",
    },
  },
  {
    2.5: {
      youtubeLink: "https://youtu.be/dlDM6jNvOqM",
      vimeoLink: "https://vimeo.com/502267032",
    },
  },
  {
    2.6: {
      youtubeLink: "https://youtu.be/lF_2IZvT31o",
      vimeoLink: "https://vimeo.com/502268969",
    },
  },
  {
    2.7: {
      youtubeLink: "https://youtu.be/H_speOhJoXQ",
      vimeoLink: "https://vimeo.com/502271582",
    },
  },
  {
    2.8: {
      youtubeLink: "https://youtu.be/l1ze6_Xoykk",
      vimeoLink: "https://vimeo.com/502272265",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 3 Combined": {
      youtubeLink: "https://youtu.be/M5WdqRIQXa0",
      vimeoLink: "https://vimeo.com/502331843",
    },
  },
  {
    3.1: {
      youtubeLink: "https://youtu.be/ODIPRudRDGg",
      vimeoLink: "https://vimeo.com/502323498",
    },
  },
  {
    3.2: {
      youtubeLink: "https://youtu.be/LgB1LZ4GoKw",
      vimeoLink: "https://vimeo.com/502324462",
    },
  },
  {
    3.3: {
      youtubeLink: "https://youtu.be/goiyXHLUfCw",
      vimeoLink: "https://vimeo.com/502326066",
    },
  },
  {
    3.4: {
      youtubeLink: "https://youtu.be/siTVfdV6Cjs",
      vimeoLink: "https://vimeo.com/502327729",
    },
  },
  {
    3.5: {
      youtubeLink: "https://youtu.be/HIg1245AuaM",
      vimeoLink: "https://vimeo.com/502329108",
    },
  },
  {
    3.6: {
      youtubeLink: "https://youtu.be/2OF0RdlaCYc",
      vimeoLink: "https://vimeo.com/502330176",
    },
  },
  {
    3.7: {
      youtubeLink: "https://youtu.be/3jCwAJQUO2I",
      vimeoLink: "https://vimeo.com/503485247",
    },
  },
  {
    3.8: {
      youtubeLink: "https://youtu.be/8F9LtJhrWWc",
      vimeoLink: "https://vimeo.com/502330654",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN4 Combined": {
      youtubeLink: "https://youtu.be/bKexoTEooXc",
      vimeoLink: "https://vimeo.com/502368771",
    },
  },
  {
    4.1: {
      youtubeLink: "https://youtu.be/eoDEX4ESUCs",
      vimeoLink: "https://vimeo.com/503485372",
    },
  },
  {
    4.2: {
      youtubeLink: "https://youtu.be/moQ5KWMODTc",
      vimeoLink: "https://vimeo.com/503485483",
    },
  },
  {
    4.3: {
      youtubeLink: "https://youtu.be/V0Ykph9haUM",
      vimeoLink: "https://vimeo.com/503485564",
    },
  },
  {
    4.4: {
      youtubeLink: "https://youtu.be/wGLFzCMVizk",
      vimeoLink: "https://vimeo.com/503485664",
    },
  },
  {
    4.5: {
      youtubeLink: "https://youtu.be/4MlIr6PGZOA",
      vimeoLink: "https://vimeo.com/503485745",
    },
  },
  {
    4.6: {
      youtubeLink: "https://youtu.be/41TtVXbrKek",
      vimeoLink: "https://vimeo.com/503485898",
    },
  },
  {
    4.7: {
      youtubeLink: "https://youtu.be/78h__SCE6Yo",
      vimeoLink: "https://vimeo.com/502364670",
    },
  },
  {
    4.8: {
      youtubeLink: "https://youtu.be/YYYBoP-qGqg",
      vimeoLink: "https://vimeo.com/503485984",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN5 Combined": {
      youtubeLink: "https://youtu.be/TWKLSaGHvdc",
      vimeoLink: "https://vimeo.com/502398834",
    },
  },
  {
    5.1: {
      youtubeLink: "https://youtu.be/zjMdlL73444",
      vimeoLink: "https://vimeo.com/502387084",
    },
  },
  {
    5.2: {
      youtubeLink: "https://youtu.be/i1DIY49uApY",
      vimeoLink: "https://vimeo.com/502389983",
    },
  },
  {
    5.3: {
      youtubeLink: "https://youtu.be/7W8iai6F81Y",
      vimeoLink: "https://vimeo.com/502392069",
    },
  },
  {
    5.4: {
      youtubeLink: "https://youtu.be/_h6UWVdH8EQ",
      vimeoLink: "https://vimeo.com/502393604",
    },
  },
  {
    5.5: {
      youtubeLink: "https://youtu.be/LrjzxlTbxTA",
      vimeoLink: "https://vimeo.com/502394767",
    },
  },
  {
    5.6: {
      youtubeLink: "https://youtu.be/tF26jF88iMk",
      vimeoLink: "https://vimeo.com/502395694",
    },
  },
  {
    5.7: {
      youtubeLink: "https://youtu.be/qSBkHwgHy_c",
      vimeoLink: "https://vimeo.com/502396337",
    },
  },
  {
    5.8: {
      youtubeLink: "https://youtu.be/2WrpnNDTXj0",
      vimeoLink: "https://vimeo.com/502397553",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN6 Combined": {
      youtubeLink: "https://youtu.be/lk0Axd76pBE",
      vimeoLink: "https://vimeo.com/502422543",
    },
  },
  {
    6.1: {
      youtubeLink: "https://youtu.be/-tW9_NktuMQ",
      vimeoLink: "https://vimeo.com/502416293",
    },
  },
  {
    6.2: {
      youtubeLink: "https://youtu.be/_JxgEON12Hg",
      vimeoLink: "https://vimeo.com/502417023",
    },
  },
  {
    6.3: {
      youtubeLink: "https://youtu.be/zdQcGv6uycQ",
      vimeoLink: "https://vimeo.com/502417399",
    },
  },
  {
    6.4: {
      youtubeLink: "https://youtu.be/Q3ImLTDIY0s",
      vimeoLink: "https://vimeo.com/502418120",
    },
  },
  {
    6.5: {
      youtubeLink: "https://youtu.be/_Hhr2yh4Rx0",
      vimeoLink: "https://vimeo.com/502419174",
    },
  },
  {
    6.6: {
      youtubeLink: "https://youtu.be/uBNZfu9SEq0",
      vimeoLink: "https://vimeo.com/502419952",
    },
  },
  {
    6.7: {
      youtubeLink: "https://youtu.be/bCTrI-IvtxM",
      vimeoLink: "https://vimeo.com/502420558",
    },
  },
  {
    6.8: {
      youtubeLink: "https://youtu.be/a9tsaFRC6xs",
      vimeoLink: "https://vimeo.com/502421959",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 7 Combined": {
      youtubeLink: "https://youtu.be/ZGI7tPsfWa4",
      vimeoLink: "https://vimeo.com/502442356",
    },
  },
  {
    7.1: {
      youtubeLink: "https://youtu.be/witv97coRnQ",
      vimeoLink: "https://vimeo.com/502437988",
    },
  },
  {
    7.2: {
      youtubeLink: "https://youtu.be/_GB150l-QzQ",
      vimeoLink: "https://vimeo.com/502438665",
    },
  },
  {
    7.3: {
      youtubeLink: "https://youtu.be/oRTEYCyj8_w",
      vimeoLink: "https://vimeo.com/502439203",
    },
  },
  {
    7.4: {
      youtubeLink: "https://youtu.be/cO7JV048rxk",
      vimeoLink: "https://vimeo.com/502439614",
    },
  },
  {
    7.5: {
      youtubeLink: "https://youtu.be/gWaEmvyCpmM",
      vimeoLink: "https://vimeo.com/502440062",
    },
  },
  {
    7.6: {
      youtubeLink: "https://youtu.be/DdZdy4pgaao",
      vimeoLink: "https://vimeo.com/502440559",
    },
  },
  {
    7.7: {
      youtubeLink: "https://youtu.be/IAH96bQAxjk",
      vimeoLink: "https://vimeo.com/502441516",
    },
  },
  {
    7.8: {
      youtubeLink: "https://youtu.be/uiR1o_0mDNw",
      vimeoLink: "https://vimeo.com/502441831",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 8 Combined": {
      youtubeLink: "https://youtu.be/EN3sNncwnvM",
      vimeoLink: "https://vimeo.com/502620954",
    },
  },
  {
    8.1: {
      youtubeLink: "https://youtu.be/75g8DMXxWB0",
      vimeoLink: "https://vimeo.com/502611595",
    },
  },
  {
    8.2: {
      youtubeLink: "https://youtu.be/aFj3ZrwJGaI",
      vimeoLink: "https://vimeo.com/502612434",
    },
  },
  {
    8.3: {
      youtubeLink: "https://youtu.be/tgU5IiDrJGk",
      vimeoLink: "https://vimeo.com/502614163",
    },
  },
  {
    8.4: {
      youtubeLink: "https://youtu.be/yyLHASuVTzM",
      vimeoLink: "https://vimeo.com/502614798",
    },
  },
  {
    8.5: {
      youtubeLink: "https://youtu.be/EDmv26hLNHQ",
      vimeoLink: "https://vimeo.com/502615633",
    },
  },
  {
    8.6: {
      youtubeLink: "https://youtu.be/l0pXtqAu98k",
      vimeoLink: "https://vimeo.com/502617174",
    },
  },
  {
    8.7: {
      youtubeLink: "https://youtu.be/8g87cER_zPs",
      vimeoLink: "https://vimeo.com/502619139",
    },
  },
  {
    8.8: {
      youtubeLink: "https://youtu.be/CnxH9p_Fjzc",
      vimeoLink: "https://vimeo.com/502620316",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 9 Combined": {
      youtubeLink: "https://youtu.be/ARam63k3uUw",
      vimeoLink: "https://vimeo.com/502676233",
    },
  },
  {
    9.1: {
      youtubeLink: "https://youtu.be/EpC6JWtnJmg",
      vimeoLink: "https://vimeo.com/502660889",
    },
  },
  {
    9.2: {
      youtubeLink: "https://youtu.be/DMgryK6I2FQ",
      vimeoLink: "https://vimeo.com/502662103",
    },
  },
  {
    9.3: {
      youtubeLink: "https://youtu.be/nSc45S9VNtw",
      vimeoLink: "https://vimeo.com/502664770",
    },
  },
  {
    9.4: {
      youtubeLink: "https://youtu.be/Be091R-PRNk",
      vimeoLink: "https://vimeo.com/502667535",
    },
  },
  {
    9.5: {
      youtubeLink: "https://youtu.be/MPxpNrAVSgU",
      vimeoLink: "https://vimeo.com/502668767",
    },
  },
  {
    9.6: {
      youtubeLink: "https://youtu.be/EtBpxgFpGPM",
      vimeoLink: "https://vimeo.com/502672481",
    },
  },
  {
    9.7: {
      youtubeLink: "https://youtu.be/CRUEjoIDiyg",
      vimeoLink: "https://vimeo.com/502674535",
    },
  },
  {
    9.8: {
      youtubeLink: "https://youtu.be/fqus7BExMLw",
      vimeoLink: "https://vimeo.com/502675364",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 10 Combined": {
      youtubeLink: "https://youtu.be/afgtnEBiJJ0",
      vimeoLink: "https://vimeo.com/502771176",
    },
  },
  {
    10.1: {
      youtubeLink: "https://youtu.be/u3rurHxF_xQ",
      vimeoLink: "https://vimeo.com/502725948",
    },
  },
  {
    10.2: {
      youtubeLink: "https://youtu.be/eNeFgETzIRw",
      vimeoLink: "https://vimeo.com/502728120",
    },
  },
  {
    10.3: {
      youtubeLink: "https://youtu.be/IuFlY3NeX7s",
      vimeoLink: "https://vimeo.com/502734517",
    },
  },
  {
    10.4: {
      youtubeLink: "https://youtu.be/7N2a30TMAFM",
      vimeoLink: "https://vimeo.com/502746899",
    },
  },
  {
    10.5: {
      youtubeLink: "https://youtu.be/d6ldWKgpoJQ",
      vimeoLink: "https://vimeo.com/502752252",
    },
  },
  {
    10.6: {
      youtubeLink: "https://youtu.be/-oXHx8O8S30",
      vimeoLink: "https://vimeo.com/502758741",
    },
  },
  {
    10.7: {
      youtubeLink: "https://youtu.be/HmJ5WRVJc0Q",
      vimeoLink: "https://vimeo.com/502763662",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 11 Combined": {
      youtubeLink: "https://youtu.be/2qsD0-D_gVQ",
      vimeoLink: "https://vimeo.com/497679833",
    },
  },
  {
    11.1: {
      youtubeLink: "https://youtu.be/z2AcaUfjDzU",
      vimeoLink: "https://vimeo.com/502813971",
    },
  },
  {
    11.2: {
      youtubeLink: "https://youtu.be/qMttF2xjsC0",
      vimeoLink: "https://vimeo.com/502815712",
    },
  },
  {
    11.3: {
      youtubeLink: "https://youtu.be/zYNP-JKRsbE",
      vimeoLink: "https://vimeo.com/502819800",
    },
  },
  {
    11.4: {
      youtubeLink: "https://youtu.be/6wetqxmmrDI",
      vimeoLink: "https://vimeo.com/502825981",
    },
  },
  {
    11.5: {
      youtubeLink: "https://youtu.be/uDKQMeWoR5c",
      vimeoLink: "https://vimeo.com/502831877",
    },
  },
  {
    11.6: {
      youtubeLink: "https://youtu.be/8AVxRuaO3cM",
      vimeoLink: "https://vimeo.com/502834079",
    },
  },
  {
    11.7: {
      youtubeLink: "https://youtu.be/ftIrE9oQJzc",
      vimeoLink: "https://vimeo.com/502838048",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 12 Combined": {
      youtubeLink: "https://youtu.be/lYVqsHlEuFo",
      vimeoLink: "https://vimeo.com/503228052",
    },
  },
  {
    12.1: {
      youtubeLink: "https://youtu.be/VysOn0s9ALs",
      vimeoLink: "https://vimeo.com/503227752",
    },
  },
  {
    12.2: {
      youtubeLink: "https://youtu.be/lKY6zpGbQ_4",
      vimeoLink: "https://vimeo.com/503227817",
    },
  },
  {
    12.3: {
      youtubeLink: "https://youtu.be/TDPREDJcMmA",
      vimeoLink: "https://vimeo.com/503227869",
    },
  },
  {
    12.4: {
      youtubeLink: "https://youtu.be/lpcpfI3EwCk",
      vimeoLink: "https://vimeo.com/503227919",
    },
  },
  {
    12.5: {
      youtubeLink: "https://youtu.be/HMYJD4PnQCg",
      vimeoLink: "https://vimeo.com/503227969",
    },
  },
  {
    12.6: {
      youtubeLink: "https://youtu.be/Gnh421owNHM",
      vimeoLink: "https://vimeo.com/503228018",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 13 Combined": {
      youtubeLink: "https://youtu.be/lOt6bXdD3Tk",
      vimeoLink: "https://vimeo.com/503228582",
    },
  },
  {
    13.1: {
      youtubeLink: "https://youtu.be/TCDX1t_u_5I",
      vimeoLink: "https://vimeo.com/503228251",
    },
  },
  {
    13.2: {
      youtubeLink: "https://youtu.be/nfJ-X5Ulijk",
      vimeoLink: "https://vimeo.com/503228288",
    },
  },
  {
    13.3: {
      youtubeLink: "https://youtu.be/KPLapZ5wUnE",
      vimeoLink: "https://vimeo.com/503228322",
    },
  },
  {
    13.4: {
      youtubeLink: "https://youtu.be/oVJJU6jOHpE",
      vimeoLink: "https://vimeo.com/503228363",
    },
  },
  {
    13.5: {
      youtubeLink: "https://youtu.be/X0xD9wBTUjY",
      vimeoLink: "https://vimeo.com/503228418",
    },
  },
  {
    13.6: {
      youtubeLink: "https://youtu.be/VpdqkfA7Uqw",
      vimeoLink: "https://vimeo.com/503228456",
    },
  },
  {
    13.7: {
      youtubeLink: "https://youtu.be/A6vcRZG1gP4",
      vimeoLink: "https://vimeo.com/503228503",
    },
  },
  {
    13.8: {
      youtubeLink: "https://youtu.be/i8Nn5_cqmo4",
      vimeoLink: "https://vimeo.com/503228556",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 14 Combined": {
      youtubeLink: "https://youtu.be/JgrCdMDNFIY",
      vimeoLink: "https://vimeo.com/503233675",
    },
  },
  {
    14.1: {
      youtubeLink: "https://youtu.be/knX5fONsIf8",
      vimeoLink: "https://vimeo.com/503233055",
    },
  },
  {
    14.2: {
      youtubeLink: "https://youtu.be/hPIJwLECqjE",
      vimeoLink: "https://vimeo.com/503233135",
    },
  },
  {
    14.3: {
      youtubeLink: "https://youtu.be/kTER2Ywuh1c",
      vimeoLink: "https://vimeo.com/503233207",
    },
  },
  {
    14.4: {
      youtubeLink: "https://youtu.be/Uh4ulJc5Rs0",
      vimeoLink: "https://vimeo.com/503233293",
    },
  },
  {
    14.5: {
      youtubeLink: "https://youtu.be/yG27t6vnAiw",
      vimeoLink: "https://vimeo.com/503233379",
    },
  },
  {
    14.6: {
      youtubeLink: "https://youtu.be/e83a7_jVGps",
      vimeoLink: "https://vimeo.com/503233452",
    },
  },
  {
    14.7: {
      youtubeLink: "https://youtu.be/yRaorywpeV0",
      vimeoLink: "https://vimeo.com/503233544",
    },
  },
  {
    14.8: {
      youtubeLink: "https://youtu.be/sKn40tm7bH8",
      vimeoLink: "https://vimeo.com/503233610",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 15 Combined": {
      youtubeLink: "https://youtu.be/Km8Ct5WsYdo",
      vimeoLink: "https://vimeo.com/503234578",
    },
  },
  {
    15.1: {
      youtubeLink: "https://youtu.be/VP6-e9dSg4o",
      vimeoLink: "https://vimeo.com/503233928",
    },
  },
  {
    15.2: {
      youtubeLink: "https://youtu.be/RiTtXcwUmSI",
      vimeoLink: "https://vimeo.com/503234014",
    },
  },
  {
    15.3: {
      youtubeLink: "https://youtu.be/PGIcZYZsO94",
      vimeoLink: "https://vimeo.com/503234097",
    },
  },
  {
    15.4: {
      youtubeLink: "https://youtu.be/ym9tj2hYYhQ",
      vimeoLink: "https://vimeo.com/503234220",
    },
  },
  {
    15.5: {
      youtubeLink: "https://youtu.be/9x8ucRp8tNg",
      vimeoLink: "https://vimeo.com/503234294",
    },
  },
  {
    15.6: {
      youtubeLink: "https://youtu.be/mvsyBXws9tc",
      vimeoLink: "https://vimeo.com/503234373",
    },
  },
  {
    15.7: {
      youtubeLink: "https://youtu.be/3uANvBlQGqw",
      vimeoLink: "https://vimeo.com/503234446",
    },
  },
  {
    15.8: {
      youtubeLink: "https://youtu.be/cNS_5Vhv81A",
      vimeoLink: "https://vimeo.com/503234496",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 16 Combined": {
      youtubeLink: "https://youtu.be/zoGkxe7vt-Y",
      vimeoLink: "https://vimeo.com/503235715",
    },
  },
  {
    16.1: {
      youtubeLink: "https://youtu.be/SccQoLItCNM",
      vimeoLink: "https://vimeo.com/503235403",
    },
  },
  {
    16.2: {
      youtubeLink: "https://youtu.be/Nupp6-XOcRI",
      vimeoLink: "https://vimeo.com/503235484",
    },
  },
  {
    16.2: {
      youtubeLink: "https://youtu.be/ahcZyffgTso",
      vimeoLink: "https://vimeo.com/503235484",
    },
  },
  {
    16.3: {
      youtubeLink: "https://youtu.be/mRf44_zB894",
      vimeoLink: "https://vimeo.com/503235525",
    },
  },
  {
    16.4: {
      youtubeLink: "https://youtu.be/eqW0rmfGKlc",
      vimeoLink: "https://vimeo.com/503235593",
    },
  },
  {
    16.5: {
      youtubeLink: "https://youtu.be/e6sZaXg937M",
      vimeoLink: "https://vimeo.com/503235628",
    },
  },
  {
    16.6: {
      youtubeLink: "https://youtu.be/E6IzSRFGZfc",
      vimeoLink: "https://vimeo.com/503235669",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 17 Combined": {
      youtubeLink: "https://youtu.be/8GBMiMZenHQ",
      vimeoLink: "https://vimeo.com/503236371",
    },
  },
  {
    17.1: {
      youtubeLink: "https://youtu.be/BMa3r0Fr7WE",
      vimeoLink: "https://vimeo.com/503236045",
    },
  },
  {
    17.2: {
      youtubeLink: "https://youtu.be/trCqEuVh2k0",
      vimeoLink: "https://vimeo.com/503236098",
    },
  },
  {
    17.3: {
      youtubeLink: "https://youtu.be/b8Rrlis_db4",
      vimeoLink: "https://vimeo.com/503236134",
    },
  },
  {
    17.4: {
      youtubeLink: "https://youtu.be/Es59NkE0Vb4",
      vimeoLink: "https://vimeo.com/503236167",
    },
  },
  {
    17.5: {
      youtubeLink: "https://youtu.be/529_IIsqpuU",
      vimeoLink: "https://vimeo.com/503236206",
    },
  },
  {
    17.6: {
      youtubeLink: "https://youtu.be/7Ld8fs0GM68",
      vimeoLink: "https://vimeo.com/503236268",
    },
  },
  {
    17.7: {
      youtubeLink: "https://youtu.be/WDUWU8Pqjlo",
      vimeoLink: "https://vimeo.com/503236300",
    },
  },
  {
    17.8: {
      youtubeLink: "https://youtu.be/ggwfFTaEsNQ",
      vimeoLink: "https://vimeo.com/503236331",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 18 Combined": {
      youtubeLink: "https://youtu.be/b2JmULtPfRY",
      vimeoLink: "https://vimeo.com/503262083",
    },
  },
  {
    18.1: {
      youtubeLink: "https://youtu.be/CzeFLIN8K8A",
      vimeoLink: "https://vimeo.com/503261538",
    },
  },
  {
    18.2: {
      youtubeLink: "https://youtu.be/4hOXfZoxCiA",
      vimeoLink: "https://vimeo.com/503261624",
    },
  },
  {
    18.3: {
      youtubeLink: "https://youtu.be/ebr37xBsVD0",
      vimeoLink: "https://vimeo.com/503261706",
    },
  },
  {
    18.4: {
      youtubeLink: "https://youtu.be/3f3fNlisRzw",
      vimeoLink: "https://vimeo.com/503261781",
    },
  },
  {
    18.5: {
      youtubeLink: "https://youtu.be/l0LXrsuk_D4",
      vimeoLink: "https://vimeo.com/503261831",
    },
  },
  {
    18.6: {
      youtubeLink: "https://youtu.be/EzwcFekO7Fo",
      vimeoLink: "https://vimeo.com/503261874",
    },
  },
  {
    18.7: {
      youtubeLink: "https://youtu.be/IO23bYePkTo",
      vimeoLink: "https://vimeo.com/503261937",
    },
  },
  {
    18.8: {
      youtubeLink: "https://youtu.be/XmaBjDfwSIM",
      vimeoLink: "https://vimeo.com/503262008",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 19 Combined": {
      youtubeLink: "https://youtu.be/9qt4YqZm9Eo",
      vimeoLink: "https://vimeo.com/503262864",
    },
  },
  {
    19.1: {
      youtubeLink: "https://youtu.be/9of3bYVgaYI",
      vimeoLink: "https://vimeo.com/503262376",
    },
  },
  {
    19.2: {
      youtubeLink: "https://youtu.be/wwAT5imzZ54",
      vimeoLink: "https://vimeo.com/503262426",
    },
  },
  {
    19.3: {
      youtubeLink: "https://youtu.be/8ByyBtowr48",
      vimeoLink: "https://vimeo.com/503262517",
    },
  },
  {
    19.4: {
      youtubeLink: "https://youtu.be/VQrx-IcRuN0",
      vimeoLink: "https://vimeo.com/503262587",
    },
  },
  {
    19.5: {
      youtubeLink: "https://youtu.be/6OAXT7rkkE8",
      vimeoLink: "https://vimeo.com/503262651",
    },
  },
  {
    19.6: {
      youtubeLink: "https://youtu.be/K4gq9s_MM1U",
      vimeoLink: "https://vimeo.com/503262712",
    },
  },
  {
    19.7: {
      youtubeLink: "https://youtu.be/ZEJ5xDnzzFw",
      vimeoLink: "https://vimeo.com/503262775",
    },
  },
  {
    19.8: {
      youtubeLink: "https://youtu.be/n0yLr2AhwDw",
      vimeoLink: "https://vimeo.com/503262825",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 20 Combined": {
      youtubeLink: "https://youtu.be/lSVueeTtuqc",
      vimeoLink: "https://vimeo.com/503272952",
    },
  },
  {
    20.1: {
      youtubeLink: "https://youtu.be/f8BCnT-9ijA",
      vimeoLink: "https://vimeo.com/503270761",
    },
  },
  {
    20.2: {
      youtubeLink: "https://youtu.be/FL4o7wxkvxQ",
      vimeoLink: "https://vimeo.com/503271107",
    },
  },
  {
    20.3: {
      youtubeLink: "https://youtu.be/mIiPQ835YsY",
      vimeoLink: "https://vimeo.com/503271350",
    },
  },
  {
    20.4: {
      youtubeLink: "https://youtu.be/o8mi128-onc",
      vimeoLink: "https://vimeo.com/503271668",
    },
  },
  {
    20.5: {
      youtubeLink: "https://youtu.be/MU02QWE7MQk",
      vimeoLink: "https://vimeo.com/503271912",
    },
  },
  {
    20.6: {
      youtubeLink: "https://youtu.be/XuJs08JNMl8",
      vimeoLink: "https://vimeo.com/503272348",
    },
  },
  {
    20.7: {
      youtubeLink: "https://youtu.be/8qk08OyqpXo",
      vimeoLink: "https://vimeo.com/503272687",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 21 Combined": {
      youtubeLink: "https://youtu.be/GDz5SFACglA",
      vimeoLink: "https://vimeo.com/503276054",
    },
  },
  {
    21.1: {
      youtubeLink: "https://youtu.be/KbhYxH0zO8A",
      vimeoLink: "https://vimeo.com/503274476",
    },
  },
  {
    21.2: {
      youtubeLink: "https://youtu.be/g1fKqfg3kjw",
      vimeoLink: "https://vimeo.com/503274870",
    },
  },
  {
    21.3: {
      youtubeLink: "https://youtu.be/w0lbq-wMJyY",
      vimeoLink: "https://vimeo.com/503275268",
    },
  },
  {
    21.4: {
      youtubeLink: "https://youtu.be/17zPZebl3yI",
      vimeoLink: "https://vimeo.com/503275621",
    },
  },
  {
    21.5: {
      youtubeLink: "https://youtu.be/LQjPDjlfY5o",
      vimeoLink: "https://vimeo.com/503275872",
    },
  },
  {
    21.6: {
      youtubeLink: "https://youtu.be/_Hu0il_Epcg",
      vimeoLink: "https://vimeo.com/503275929",
    },
  },
  {
    21.7: {
      youtubeLink: "https://youtu.be/Fg0iU6Od73k",
      vimeoLink: "https://vimeo.com/503275958",
    },
  },
  {
    21.8: {
      youtubeLink: "https://youtu.be/KcwuFrd2Jss",
      vimeoLink: "https://vimeo.com/503276006",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 22 Combined": {
      youtubeLink: "https://youtu.be/JL1eKZdgzD0",
      vimeoLink: "https://vimeo.com/503276582",
    },
  },
  {
    22.1: {
      youtubeLink: "https://youtu.be/p2oqiMaKQCg",
      vimeoLink: "https://vimeo.com/503276226",
    },
  },
  {
    22.2: {
      youtubeLink: "https://youtu.be/kfQCTYz2dHw",
      vimeoLink: "https://vimeo.com/503276265",
    },
  },
  {
    22.3: {
      youtubeLink: "https://youtu.be/2ASMbOc2ovI",
      vimeoLink: "https://vimeo.com/503276309",
    },
  },
  {
    22.4: {
      youtubeLink: "https://youtu.be/wWK170_hkYU",
      vimeoLink: "https://vimeo.com/503276341",
    },
  },
  {
    22.5: {
      youtubeLink: "https://youtu.be/OPvQG4Dt-qk",
      vimeoLink: "https://vimeo.com/503276382",
    },
  },
  {
    22.6: {
      youtubeLink: "https://youtu.be/aoA145Vaxvg",
      vimeoLink: "https://vimeo.com/503276447",
    },
  },
  {
    22.7: {
      youtubeLink: "https://youtu.be/1fHxbfsjUvU",
      vimeoLink: "https://vimeo.com/503276498",
    },
  },
  {
    22.8: {
      youtubeLink: "https://youtu.be/iouNWh72u2k",
      vimeoLink: "https://vimeo.com/503276541",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 23 Combined": {
      youtubeLink: "https://youtu.be/g2pvjMVApYE",
      vimeoLink: "https://vimeo.com/503277051",
    },
  },
  {
    23.1: {
      youtubeLink: "https://youtu.be/GsbQSHBXThA",
      vimeoLink: "https://vimeo.com/503276804",
    },
  },
  {
    23.2: {
      youtubeLink: "https://youtu.be/zYnu1v-5j1Y",
      vimeoLink: "https://vimeo.com/503276838",
    },
  },
  {
    23.3: {
      youtubeLink: "https://youtu.be/HlnzLsd_Hng",
      vimeoLink: "https://vimeo.com/503276887",
    },
  },
  {
    23.4: {
      youtubeLink: "https://youtu.be/_tdvUQ5MCEM",
      vimeoLink: "https://vimeo.com/503276926",
    },
  },
  {
    23.5: {
      youtubeLink: "https://youtu.be/3XLDlZr8qxs",
      vimeoLink: "https://vimeo.com/503276962",
    },
  },
  {
    23.6: {
      youtubeLink: "https://youtu.be/xAciuAg4hzk",
      vimeoLink: "https://vimeo.com/503276988",
    },
  },
  {
    23.7: {
      youtubeLink: "https://youtu.be/Ni8AiRmti-0",
      vimeoLink: "https://vimeo.com/503277024",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 24 Combined": {
      youtubeLink: "https://youtu.be/E0pGEJaXhQg",
      vimeoLink: "https://vimeo.com/503468345",
    },
  },
  {
    24.1: {
      youtubeLink: "https://youtu.be/ZfmPjKTttps",
      vimeoLink: "https://vimeo.com/503277216",
    },
  },
  {
    24.2: {
      youtubeLink: "https://youtu.be/upBOdkxVaBM",
      vimeoLink: "https://vimeo.com/503277261",
    },
  },
  {
    24.3: {
      youtubeLink: "https://youtu.be/E8r9aXYrAwc",
      vimeoLink: "https://vimeo.com/503277322",
    },
  },
  {
    24.4: {
      youtubeLink: "https://youtu.be/SErvz8qoUFY",
      vimeoLink: "https://vimeo.com/503277410",
    },
  },
  {
    24.5: {
      youtubeLink: "https://youtu.be/SsdkNDGLD3c",
      vimeoLink: "https://vimeo.com/503277475",
    },
  },
  {
    24.6: {
      youtubeLink: "https://youtu.be/Xgo-Vur6Byo",
      vimeoLink: "https://vimeo.com/503277549",
    },
  },
  {
    24.7: {
      youtubeLink: "https://youtu.be/5blnrw4ZU1I",
      vimeoLink: "https://vimeo.com/503277583",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 25 Combined": {
      youtubeLink: "https://youtu.be/M1TncR0vBpM",
      vimeoLink: "https://vimeo.com/503469126",
    },
  },
  {
    25.1: {
      youtubeLink: "https://youtu.be/gxgV8n7KFcs",
      vimeoLink: "https://vimeo.com/503468677",
    },
  },
  {
    25.2: {
      youtubeLink: "https://youtu.be/pOWC7qjgmRE",
      vimeoLink: "https://vimeo.com/503468712",
    },
  },
  {
    25.3: {
      youtubeLink: "https://youtu.be/tSrhq69QScI",
      vimeoLink: "https://vimeo.com/503468792",
    },
  },
  {
    25.4: {
      youtubeLink: "https://youtu.be/kxEvqgQQqgo",
      vimeoLink: "https://vimeo.com/503468876",
    },
  },
  {
    25.5: {
      youtubeLink: "https://youtu.be/b3GIUar0tco",
      vimeoLink: "https://vimeo.com/503468937",
    },
  },
  {
    25.6: {
      youtubeLink: "https://youtu.be/oeMPy-Z2Xb8",
      vimeoLink: "https://vimeo.com/503468994",
    },
  },
  {
    25.7: {
      youtubeLink: "https://youtu.be/rfmeTeF9ffo",
      vimeoLink: "https://vimeo.com/503469074",
    },
  },
  {
    "Breathing Exercise": {
      youtubeLink: "https://youtu.be/_xlP0k5DuuA",
      vimeoLink: "https://vimeo.com/503658502",
    },
  },
  {
    "FN 26 Combined": {
      youtubeLink: "https://youtu.be/Csp7jzLrY3w",
      vimeoLink: "https://vimeo.com/503469930",
    },
  },
  {
    26.1: {
      youtubeLink: "https://youtu.be/QQ8vEzzcEAc",
      vimeoLink: "https://vimeo.com/503469401",
    },
  },
  {
    26.2: {
      youtubeLink: "https://youtu.be/j9obdg2FOuU",
      vimeoLink: "https://vimeo.com/503469457",
    },
  },
  {
    26.3: {
      youtubeLink: "https://youtu.be/K4ql689HWyA",
      vimeoLink: "https://vimeo.com/503469524",
    },
  },
  {
    26.4: {
      youtubeLink: "https://youtu.be/n9RQRy50IM8",
      vimeoLink: "https://vimeo.com/503469599",
    },
  },
  {
    26.5: {
      youtubeLink: "https://youtu.be/ta_dAJ9UyKc",
      vimeoLink: "https://vimeo.com/503469624",
    },
  },
  {
    26.6: {
      youtubeLink: "https://youtu.be/VPJlzZn68RQ",
      vimeoLink: "https://vimeo.com/503469690",
    },
  },
  {
    26.7: {
      youtubeLink: "https://youtu.be/kB67991OkuU",
      vimeoLink: "https://vimeo.com/503469777",
    },
  },
  {
    26.8: {
      youtubeLink: "https://youtu.be/QV-k4EjGuBg",
      vimeoLink: "https://vimeo.com/503469864",
    },
  },
];

let ptr = 1;
const course3 = {
  course: courseId[2].courseName,
  courseId: courseId[2].courseId,
  videoLinks: videoLinks3
    .map((video, index) => {
      const key = Object.keys(video)[0];
      const WeekCourse = {
        week: ptr,
      };
      const links = [];
      if (key === "Breathing Exercise") {
        links.push({
          youtubeLink: video[key].youtubeLink,
          vimeoLink: video[key].vimeoLink,
        });
        ptr++;
        // get all the other links until the next breathing exercise
        while (
          videoLinks3[index + 1] &&
          videoLinks3[index + 1][key] === undefined
        ) {
          const newKey = Object.keys(videoLinks3[index + 1])[0];
          links.push({
            youtubeLink: videoLinks3[index + 1][newKey].youtubeLink,
            vimeoLink: videoLinks3[index + 1][newKey].vimeoLink,
          });
          index++;
        }
        return { ...WeekCourse, videos: links };
      }
      return null;
    })
    .filter((x) => x !== null),
};
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const dataPut=async()=>{
const data=await fetch(`http://localhost:5000/api/v1/course/create-course`,{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({data:{...course1}}),
})
const res=await data.json();
console.log(res)
}
dataPut()

 


