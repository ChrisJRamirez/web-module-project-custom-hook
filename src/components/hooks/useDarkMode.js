import useLocalStorage from "./useLocalStorage"

const useDarkMode = (initialValues) => {
  const [darkMode, setDarkMode] = useLocalStorage (initialValues);
  // forward value and setter that were returned in useLocalStorage call, return those 2 values in array
  return [darkMode, setDarkMode]
}

export default useDarkMode