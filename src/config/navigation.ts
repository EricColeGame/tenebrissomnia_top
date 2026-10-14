import { BookOpen, CircleHelp, Compass, Globe, ScrollText, Users, Zap, type LucideIcon } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Zap, isContentType: true },
  { key: "story", path: "/story", icon: Compass, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "release", path: "/release", icon: ScrollText, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Globe, isContentType: true },
  { key: "community", path: "/community", icon: CircleHelp, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
