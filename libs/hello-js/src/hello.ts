/**
 * Returns a hello string.
 *
 * @param name - The name to include. Optional.
 * @returns hello string.
 */
export function hello(name?: string | undefined): string {
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- Handle empty string
  const nameToReturn = name || `world`;
  return `Hello, ${nameToReturn}!`;
}
