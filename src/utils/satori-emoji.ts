const vs16RegExp = /\uFE0F/g;
const zeroWidthJoiner = String.fromCharCode(0x200d);

export async function emoji(rawEmoji: string): Promise<string> {
  const unicodeSurrogates =
    rawEmoji.indexOf(zeroWidthJoiner) < 0
      ? rawEmoji.replace(vs16RegExp, "")
      : rawEmoji;
  const codePoints = [];
  let char = 0;
  let previous = 0;
  let i = 0;
  while (i < unicodeSurrogates.length) {
    char = unicodeSurrogates.charCodeAt(i++);
    if (previous) {
      codePoints.push(
        (0x10000 + ((previous - 0xd800) << 10) + (char - 0xdc00)).toString(16),
      );
      previous = 0;
    } else if (char > 0xd800 && char <= 0xdbff) {
      previous = char;
    } else {
      codePoints.push(char.toString(16));
    }
  }
  return `data:image/svg+xml;base64,${Buffer.from<ArrayBuffer>(
    await fetch(
      `https://twemoji.maxcdn.com/v/latest/svg/${codePoints.join("-")}.svg`,
    ).then((r) => r.arrayBuffer()),
  ).toString("base64")}`;
}
