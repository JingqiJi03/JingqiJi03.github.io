import type {
    SiteConfig,
    ProfileConfig,
} from "./types/config"

export const siteConfig: SiteConfig = {
    title: "Jingqi Ji",
    subTitle: "纪璟琦",

    backgroundImage: {
        enabled: false,
        url: "assets/background.png",
    },

    mirrorSite: {
        enabled: false,
        url: "",
        region: "CN"
    },

    favicon: "/favicon/favicon.ico"
}

export const profileConfig: ProfileConfig = {
    avatar: "assets/chingkei.jpg",
    name: "Chingkei",
    description: "EIE Master Student @ ZJU",
    introPage: "/about",
    links: [
        {
            name: "About",
            url: "/about",
            icon: "fa6-solid:user",
            color: "#4a90d9",
        },
        {
            name: "Blog",
            url: "/blog",
            icon: "fa6-solid:pen-nib",
            color: "#e8913a",
        },
        {
            name: "Photo",
            url: "/photo",
            icon: "fa6-solid:camera",
            color: "#d94f7a",
        },
        {
            name: "GitHub",
            url: "https://github.com/JingqiJi03",
            icon: "fa6-brands:github",
            color: "#888",
        },
        {
            name: "Email",
            url: "mailto:jijingqi@zju.edu.cn",
            icon: "fa6-solid:envelope",
            color: "#43a4d1",
        },
    ]
}
