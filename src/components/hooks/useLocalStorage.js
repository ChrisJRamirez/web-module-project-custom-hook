import useState from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState (() => {

    // const item = window.localStorage.getItem(key);
    // ternary - parse and return stored json, else - return initial value
    // return item ? JSON.parse(item) : initialValue;
    if (localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
      else {
        return initialValue;
      }
  });
  
  const setValue = value => {
    // save state
    setStoredValue(value);
    // save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];

}

export default useLocalStorage