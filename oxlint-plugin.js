const prefixForToBeTranslatedKeys = `(en) `

const objectSelector = `ExportNamedDeclaration > VariableDeclaration > VariableDeclarator[id.name="text"] > ObjectExpression`

const getKey = (property) =>
  property.key.type === `Identifier` ? property.key.name : String(property.key.value)

/**
 * A value is either a template literal or an arrow function returning one,
 * and the prefix is placed right after the opening backtick in both cases
 */
const hasPrefix = (property, sourceCode) => {
  const text = sourceCode.getText(property.value)
  const backtick = text.indexOf(`\``)
  return backtick !== -1 && text.startsWith(prefixForToBeTranslatedKeys, backtick + 1)
}

const compare = (a, b) => {
  if (a.hasPrefix !== b.hasPrefix) return a.hasPrefix ? -1 : 1
  return (
    a.key.localeCompare(b.key, `en`, { sensitivity: `base` }) || (a.key < b.key ? -1 : a.key > b.key ? 1 : 0) // case-insensitive, w/ a stable tie-break for keys differing only in case
  )
}

const sortKeys = {
  meta: {
    type: `suggestion`,
    fixable: `code`,
  },
  create(context) {
    const sourceCode = context.sourceCode

    return {
      [objectSelector](node) {
        if (node.properties.some((property) => property.type !== `Property`)) return

        const properties = node.properties.map((property) => ({
          property,
          key: getKey(property),
          hasPrefix: hasPrefix(property, sourceCode),
        }))

        const sorted = [...properties].sort(compare)
        const firstMisplaced = properties.findIndex((item, i) => item !== sorted[i])
        if (firstMisplaced === -1) return

        const expected = sorted[firstMisplaced]
        const first = properties[0].property
        const last = properties[properties.length - 1].property
        const hasComments = (sourceCode.getCommentsInside?.(node) ?? []).length > 0

        context.report({
          node: properties[firstMisplaced].property,
          message: `Expected \`${expected.key}\` here. Values prefixed with "${prefixForToBeTranslatedKeys}" come first, the rest are sorted alphabetically`,
          fix: hasComments
            ? undefined // reordering would drop the comments
            : (fixer) =>
                fixer.replaceTextRange(
                  [first.range[0], last.range[1]],
                  sorted.map((item) => sourceCode.getText(item.property)).join(`,\n  `),
                ),
        })
      },
    }
  },
}

const plugin = {
  meta: { name: `translations` },
  rules: { "sort-keys": sortKeys },
}

export default plugin
