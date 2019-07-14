module.exports = function cssModuleLoader(source) {
  const styles = this.exec(source, this.resource);
  const styleMap = `{ ${Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(',')} }`;

  const result = `
const styles = ${styleMap};
export default styles;
`;
  return result;
}
