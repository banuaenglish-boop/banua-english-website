export const webinarCountries = [
  { value: "uk", label: "🇬🇧 UK" },
  { value: "usa", label: "🇺🇸 USA" },
  { value: "australia", label: "🇦🇺 Australia" },
  { value: "new-zealand", label: "🇳🇿 New Zealand" },
  { value: "south-korea", label: "🇰🇷 Korea Selatan" },
  { value: "germany", label: "🇩🇪 Jerman" },
  { value: "singapore", label: "🇸🇬 Singapura" },
  { value: "canada", label: "🇨🇦 Kanada" },
  { value: "turkiye", label: "🇹🇷 Turki" },
  { value: "taiwan", label: "🇹🇼 Taiwan" },
  { value: "thailand", label: "🇹🇭 Thailand" },
  { value: "china", label: "🇨🇳 China" },
  { value: "japan", label: "🇯🇵 Jepang" },
  { value: "italy", label: "🇮🇹 Italia" },
  { value: "sweden", label: "🇸🇪 Swedia" },
  { value: "eropa", label: "🇪🇺 Eropa / Erasmus" },
  { value: "indonesia", label: "🇮🇩 Indonesia" },
] as const;

export type WebinarCountry = (typeof webinarCountries)[number]["value"];
