export const fontFamilies = {
  display: "'Roboto Mono', monospace",
  regular: "'Open Sans', sans-serif",
}

export const fontFamily = name => {
  if (!fontFamilies[name])
    throw new Error(
      `Unable to find font family: \`${name}\`. Expected one of: ` +
      `[${Object.keys(fontFamilies).join(', ')}]`
    )
  return { fontFamily: fontFamilies[name] }
}