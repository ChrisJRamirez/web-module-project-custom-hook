import {useState} from "react";

const useLocalStorage = (key, initialValue) => {
  // when initializing, check local storage for the value, if its there , 
  //use it to intilaiize, otherwise use intitialvalue
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
      //parse on the way out, so you have a text value regardless of input, or if undefined reutrn initialValue
      return item ? JSON.parse(item) : initialValue;
    });

  //when updating state, also update local storage
  // do this by "composing" setValue into a new function that sets the value and local storage
  const setValue = (value) => {
    // save state
    setStoredValue(value);
    //save to local storage
    window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue];
  };

  export default useLocalStorage;
  


