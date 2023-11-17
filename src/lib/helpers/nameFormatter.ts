export function nameFormatter(name: string) {
    const splitName = name ? name.split(/[\s-]/) : ["No", "name"];

    const firstWord = splitName[0];
    const secondWord = splitName.length > 1 ? splitName[1].slice(0, 1) + "." : "";

    return `${firstWord} ${secondWord}`;
}