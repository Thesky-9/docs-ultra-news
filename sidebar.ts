import { type DefaultTheme } from "vitepress";

export function sidebarUltranews(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Introduction", link: "/index.md" },
    {
      text: "Prologue",
      items: [
        { text: "Releases", link: "/releases.md" },
        { text: "Upgrade", link: "/upgrade.md" },
        { text: "License", link: "/license.md" },
      ],
    },
    {
      text: "Getting started",
      items: [
        { text: "Requirement", link: "/requirement.md" },
        { text: "Install on hosting", link: "/install-on-hosting.md" },
        { text: "Install locally or in VPS", link: "/install-on-vps.md" },
        { text: "SSL", link: "/ssl.md" },
      ],
    },
    {
      text: "User guide",
      items: [
        { text: "Custom Site Identity", link: "/general.md" },
        { text: "Header", link: "/header.md" },
        { text: "Menu", link: "/menu.md" },
        { text: "Footer", link: "/footer.md" },
        { text: "Media", link: "/media.md" },
        { text: "Insert YouTube, Vimeo video into post", link: "/insert_video.md" },
        { text: "Favorite/Bookmark Post", link: "/bookmark-post.md" },
        { text: "Custom CSS & JS", link: "/cssjs.md" },
        { text: "Translate", link: "/translate.md" },
        { text: "Short code", link: "/shortcode.md" },
        { text: "Config", link: "/config.md" },
        { text: "AI Writer", link: "/ai-writer.md" },
        { text: "Ads", link: "/adv.md" },
        { text: "Analytics", link: "/analytics.md" },
      ],
    },
    {
      text: "Theme development",
      items: [
        { text: "Guide", link: "/theme-development.md" },
      ],
    },
  ];
}
