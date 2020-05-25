export const fontFamilies = {
  mono: "'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",
  sans: "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
  serif: "'Bungee', serif",
}

export const fontFamily = name => {
  if (!fontFamilies[name])
    throw new Error(
      `Unable to find font family: \`${name}\`. Expected one of: ` +
      `[${Object.keys(fontFamilies).join(', ')}]`
    )
  return { fontFamily: fontFamilies[name] }
}