export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    steamCommunity?: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Tenebris Somnia Wiki",
  shortName: "Tenebris Somnia",
  logoText: "TS",
  tagline: "Walkthroughs, Endings, Secrets & Survival Horror Guides",
  description: "Explore Tenebris Somnia Wiki with walkthroughs, endings, secrets, gameplay guides, and horror adventure tips to help players complete the game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tenebrissomnia.top",
  supportEmail: "support@tenebrissomnia.top",
  gameUrl: "https://store.steampowered.com/app/2121510/Tenebris_Somnia/",
  heroVideoId: "A_fQ_gNddbo", // Tenebris Somnia - Release Date Trailer (New Blood Interactive)
  social: {
    steamCommunity: "https://steamcommunity.com/app/2121510",
    youtube: "https://www.youtube.com/@NewBloodInteractive",
  },
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
