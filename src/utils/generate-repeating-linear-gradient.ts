export function generateRepeatingLinearGradient(bgColor: string): string {
  return `repeating-linear-gradient(-45deg,${bgColor},${bgColor} 8px,rgba(255, 255, 255, 0.12) 6px,rgba(255, 255, 255, 0.12) 14px)`;
}
