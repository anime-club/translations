type Replacement = readonly [from: string, to: string]

const replaceTerms = (value: string, replacements: readonly Replacement[]) => {
  let result = value
  for (const replacement of replacements) result = result.replaceAll(replacement[0], replacement[1])
  return result
}

/** Apply reviewed regional terminology to both static phrases and interpolation results. */
export const regionalize = (source: text, replacements: readonly Replacement[]): text =>
  Object.fromEntries(
    Object.entries(source).map(([key, value]) => [
      key,
      typeof value === `function`
        ? (...args: unknown[]) =>
            replaceTerms((value as (...values: unknown[]) => string)(...args), replacements)
        : replaceTerms(value, replacements),
    ]),
  ) as text
