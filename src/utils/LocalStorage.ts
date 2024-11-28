"use client"; // Ensures this code runs only on the client side (Next.js specific directive).

/**
 * Retrieves an item from localStorage and parses it as JSON if possible.
 * @template T - The expected type of the parsed item.
 * @param {string} key - The key under which the data is stored in localStorage.
 * @returns {T | null} - The parsed value, or `null` if the key doesn't exist or isn't accessible.
 */
const getItem = <T>(key: string): T | null => {
  // Check if code is running in a browser environment.
  if (typeof window === "undefined") return null;

  // Retrieve the data associated with the key from localStorage.
  const data = localStorage.getItem(key);

  // Return null if the key doesn't exist in localStorage.
  if (data === null) return null;

  try {
    // Attempt to parse the data as JSON and return it.
    return JSON.parse(data) as T;
  } catch (err) {
    // If parsing fails, return the raw data as a fallback.
    return data as unknown as T;
  }
};

/**
 * Stores an item in localStorage, converting it to a JSON string if necessary.
 * @param {string} key - The key under which the data will be stored.
 * @param {unknown} value - The data to store. Can be a string, object, or any serializable value.
 */
const setItem = (key: string, value: unknown): void => {
  // Convert the value to a JSON string if it isn't already a string.
  const stringify = typeof value === "string" ? value : JSON.stringify(value);

  // Store the stringified value in localStorage under the specified key.
  localStorage.setItem(key, stringify);
};

/**
 * Removes an item from localStorage.
 * @param {string} key - The key of the item to remove.
 */
const removeItem = (key: string): void => {
  // Remove the item associated with the key from localStorage.
  localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
