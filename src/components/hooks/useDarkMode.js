import useLocalStorage from "./useLocalStorage"

const useDarkMode = (initialValues) => {
  const [darkMode, setDarkMode] = useLocalStorage (initialValues);
  
}