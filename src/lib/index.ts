/**
 * Formats a number into a human-readable string with suffixes (e.g., 1K, 1.5M).
 * @param {number} num - The number to format.
 * @returns {string} - The formatted number as a string.
 */

const formatNumber = (num: number) => {
    if (num >= 1e9) {
      return (num / 1e7).toFixed(1).replace(/\.0$/, "") + "Cr";
    }
    if (num >= 1e6) {
      return (num / 1e5).toFixed(1).replace(/\.0$/, "") + "L";
    }
    if (num >= 1e3) {
      return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  };
  
  export default formatNumber;