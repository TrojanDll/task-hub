export function formatMinutes(totalMunites: number): string {
  const hours = Math.floor(totalMunites / 60);
  const minutes = totalMunites % 60;
  return `${hours}ч ${minutes}м`;
}
