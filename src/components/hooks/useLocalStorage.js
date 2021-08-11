import useState from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    // ternary - parse and return stored json, else - return initial value
    return item ? JSON.parse(item) : initialValue
  });
  return [storedValue];
}