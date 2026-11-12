// Every line of the companion piece, with its page.
// Rules: only Daly (2023) and Somotan (2025); every entry has a cite; words inside “ ” must appear word for word in
// the reading (scripts/check-data.mjs tests this before every build). No totals, no figures that are not in the text.

export const STORYMAP_URL = "https://storymaps.arcgis.com/stories/3a7b4b5a04644e70a13c37735fad6e4f";

export const META = {
  kicker: "HIST 077 | Fall 2026 | Companion piece",
  title: "One Rule, Two Capitals",
  deck:
    "Ghana expelled Nigerians in 1969. Nigeria expelled Ghanaians in 1983 and 1985. Both governments used the same " +
    "colonial rule to decide who could stay.",
  byline: "Risav Ganguly | HIST 077: Mapping Histories of City Cultures in Africa and its Diaspora | Fall 2026",
  note: "Every line gives its page in Daly (2023) or Somotan (2025). Words in quotation marks are the authors’ own or those of the people they quote.",
};

export const RULE = {
  year: "1921",
  kicker: "Accra, 1921",
  title: "A court defines a native",
  entries: [
    {
      text:
        "In Brown v. Miller, a Ga court in Accra had to decide whether a woman from Barbados, resident among the Ga for " +
        "more than sixty years, came under Ga law.",
      cite: "Daly 235–36",
    },
    {
      text: "Its answer: an outsider could become a “naturalized native,” but only after meeting many conditions.",
      cite: "Daly 236",
    },
  ],
  conditions: [
    "“the long-term payment of taxes to a chief”",
    "“a formal statement of allegiance”",
    "“participation in local ceremonies”",
  ],
  conditionsCite: "Daly 236",
  principle: {
    text: "Under colonial law, full membership in a colony’s society required being a “native” of one of its communities.",
    cite: "Daly 236",
  },
};

export const BRANCH = {
  year: "1930 | 1939",
  kicker: "Lagos, 1930 and 1939",
  label: "Another way to belong",
  entries: [
    {
      text:
        "In an August 1930 letter, Charlotte Obasa of the Lagos Women’s League claimed for Lagosians the right of " +
        "“having their dead buried in their own town.”",
      cite: "Somotan 514–15",
    },
    {
      text:
        "In 1939 the Lagos Town Council proposed closing the island’s African cemeteries. Christians, Muslims and " +
        "traditional rulers protested, and the Ikoyi cemetery was expanded instead.",
      cite: "Somotan 494–95",
    },
    {
      text: "The protesters did not claim “first-comer status” or try to “exclude others.”",
      cite: "Somotan 496",
    },
  ],
  close: "The expulsions followed the first rule and set this second idea aside.",
};

export const INDEPENDENCE = {
  year: "1957 | 1960",
  kicker: "Accra, 1957 | Lagos, 1960",
  title: "Independence keeps the rule",
  entries: [
    {
      text:
        "Ghana became independent in 1957 and Nigeria in 1960. In both countries, citizenship came to depend on belonging " +
        "to an “indigenous” community.",
      cite: "Daly 239",
    },
    {
      text:
        "Nigerians in Ghana and Ghanaians in Nigeria had no such community. They were aliens who could be “expelled " +
        "without legal consequence.”",
      cite: "Daly 240",
    },
  ],
};

export const ORDERS = {
  year: "1969 | 1983",
  title: "Two Orders",
  left: "Accra, November 1969",
  right: "Lagos, January 1983",
  rows: [
    {
      label: "Who was there",
      accra: {
        text: "In 1965, 500,000 to one million Nigerians lived in Ghana, a country of seven million.",
        cite: "Daly 242",
      },
      lagos: {
        text: "Migrants came with the oil boom. Tens of thousands of Ghanaians worked as clerks, teachers and professionals.",
        cite: "Daly 246",
      },
    },
    {
      label: "The order",
      accra: {
        text:
          "Prime Minister Kofi Busia’s Aliens Compliance Order declared every foreigner without a residence permit an " +
          "illegal alien.",
        cite: "Daly 244",
      },
      lagos: {
        text:
          "On 17 January, Internal Affairs Minister Alhaji Ali Baba said on television that unskilled migrants and anyone " +
          "without a documented right to reside must “quit” Nigeria by the end of the month.",
        cite: "Daly 251",
      },
    },
    {
      label: "Why papers decided it",
      accra: {
        text:
          "Many Nigerians had no papers because they “had never needed them before.” For them the order “was tantamount " +
          "to expulsion.”",
        cite: "Daly 242, 244",
      },
      lagos: {
        text: "The order “made nearly all West African foreigners in Nigeria into criminals.”",
        cite: "Daly 251",
      },
    },
    {
      label: "The words",
      accra: {
        quote: "“We cannot afford to feed other mouths when ours are not fed.”",
        who: "Ghana’s interior minister",
        cite: "Daly 244",
      },
      lagos: {
        quote: "“These bad eggs are a menace.”",
        who: "The governor of Lagos State",
        cite: "Daly 251",
      },
    },
    {
      label: "The method",
      accra: {
        text: "Police and soldiers took arrested migrants to police stations, then put them on chartered buses to the border.",
        cite: "Daly 244",
      },
      lagos: {
        text:
          "No plan to remove anyone. Ali Baba called it “a patriotic duty to harass and report illegal migrants,” and " +
          "many left “of their own accord.”",
        cite: "Daly 251–52",
      },
    },
    {
      label: "The count",
      accra: {
        text: "More than five hundred thousand Nigerians deported by the end of 1969.",
        cite: "Daly 244",
      },
      lagos: {
        text:
          "No count kept. Ghana’s High Commission said about one million, Nigeria’s foreign minister more than twice that. " +
          "Daly: “probably less than both, but still well into six figures.”",
        cite: "Daly 253",
      },
    },
    {
      label: "Afterward",
      accra: {
        text: "Prices of imported goods rose in some towns, crime did not fall and “the cocoa industry tanked.”",
        cite: "Daly 245",
      },
      lagos: {
        text: "Arguments over who was Nigerian “became sharper once there were no more Ghanaians to deport.”",
        cite: "Daly 258",
      },
    },
  ],
  difference: {
    title: "One difference",
    text:
      "The two orders were not the same. In 1969 Ghana’s police and army carried out the deportations. In 1983 " +
      "Nigeria’s government made no plan and relied on fear.",
    cite: "Daly 244, 251–52",
  },
};

// The count graphic. Scale runs to 2.4 million. Nothing is added together.
export const COUNT = {
  title: "Who counted?",
  max: 2400000,
  ticks: [0, 500000, 1000000, 1500000, 2000000],
  rows: [
    {
      year: "1969",
      marks: [{ kind: "bar-open", to: 500000, label: "More than 500,000 deported (Daly’s figure)" }],
      cite: "Daly 244",
    },
    {
      year: "1983",
      marks: [
        { kind: "band", from: 100000, to: 1000000, label: "Daly: less than both estimates, still in six figures" },
        { kind: "tick", at: 1000000, label: "Ghana’s High Commission: about one million" },
        { kind: "arrow", at: 2000000, label: "Nigeria’s foreign minister: more than twice that" },
      ],
      cite: "Daly 253",
    },
  ],
  textEquivalent:
    "1969: more than 500,000 Nigerians deported from Ghana. 1983: no official count. Ghana’s High Commission estimated " +
    "about one million and Nigeria’s foreign minister more than twice that. Daly judges the true number lower than " +
    "both but still in the hundreds of thousands.",
};

export const MAY1985 = {
  year: "1985",
  kicker: "Lagos, May 1985",
  title: "The second expulsion",
  steps: [
    { n: "70,000", text: "foreigners rounded up by soldiers and brought to Lagos", cite: "Daly 254" },
    { n: "24,676", text: "counted crossing into Benin between 3 and 10 May, before Benin closed its border", cite: "Daly 255" },
    { n: "40,000", text: "still camped at the border, taken back to the airport’s Hajj terminal", cite: "Daly 255" },
    { n: "11,000", text: "about that many put on ships at the Apapa wharf", cite: "Daly 255" },
    { n: "30,000", text: "returned to the border at Seme, where the army tear-gassed them", cite: "Daly 255–56" },
  ],
  after: [
    { text: "Each person could take twenty naira out of Nigeria.", cite: "Daly 255" },
    { text: "The army said four people died. Daly thinks the number was higher.", cite: "Daly 256" },
  ],
  note: "Daly’s figures are rounded. They are shown as he gives them and are not added together.",
};

export const AFTER = {
  year: "After 1985",
  kicker: "Nigeria, after 1985",
  title: "The rule turns inward",
  entries: [
    {
      text:
        "Once the Ghanaians had gone, Nigerians argued more sharply over who counted as an “indigene” of a given place. " +
        "Local governments began to issue certificates showing that the bearer was “indigenous” to a place.",
      cite: "Daly 258–59",
    },
    {
      text: "In Lagos, contests over who could live in the city grew fiercer as its population rose.",
      cite: "Daly 259",
    },
  ],
};

export const END = {
  quote: "“Indigeneity is a tool of exclusion.”",
  cite: "Daly 260",
  limits: [
    {
      text:
        "Daly’s main sources are records in the Lagos State archives and the UK National Archives. He says the story " +
        "would look different told from Ghanaian archives.",
      cite: "Daly 230, note 3",
    },
    { text: "Somotan draws on oral interviews, newspapers and petitions.", cite: "Somotan 495" },
  ],
  bibliography: [
    "Daly, Samuel Fury Childs. “Ghana Must Go: Nativism and the Politics of Expulsion in West Africa, 1969–1985.” Past and Present, no. 259 (May 2023): 229–61.",
    "Somotan, Titilola Halimat. “Contested Burial Grounds: African Religious Communities, Urban Displacement, and the Spatial Politics of Difference in Colonial Lagos, Nigeria.” Journal of Social History 58, no. 3 (Spring 2025): 493–525.",
  ],
};
