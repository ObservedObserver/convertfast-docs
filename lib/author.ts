export const allAuthors = [
    {
        name: "Observed Observer",
        nickname: "observedobserver",
        picture: "/avatars/avatar-1.svg"
    },
    {
        name: "Tison Brokenshire",
        nickname: "tison",
        picture: "/avatar-images/tison.svg"
    },
] as const;

export type ValidAuthorName = (typeof allAuthors)[number]["nickname"];

export function getAuthor(nickname: string) {
    return allAuthors.find((author) => author.nickname === nickname);
}
