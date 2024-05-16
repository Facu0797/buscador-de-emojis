import listaEmoji from "./listaEmoji.json"

export const buscarEmoji = (value) => {
    const emojiSet = value.toLowerCase()
    const emojis = [];

    listaEmoji.map((item) => {
        if (item.keywords.includes(emojiSet)) {
            emojis.push(item);
        }
    })
    return value === "" ? emojis : emojis.slice(0,24)
}