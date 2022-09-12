export function randonMemeName() {
    const firstPart = ["Senhore, ", "Done, ", "Menine, ", "Moçe, ", "Ei, ", '', '', ''];
    const midPart = ["Nel", "Adamas", "Hele", "Petru", "Dindi", "Lu", "Ca", "Fa", "Bi", "Zé", "Nhô", "Nhâ"];
    const lastPart = ["son", "sona", "no", "tora", "tor", "nho", "son", "nha", "na", "tus", "kio", "kia", ""];

    const randomFirst = Math.floor(Math.random() * firstPart.length);
    const randomMid = Math.floor(Math.random() * midPart.length);
    const randomLast = Math.floor(Math.random() * lastPart.length);

    return firstPart[randomFirst] + midPart[randomMid] + lastPart[randomLast]
}