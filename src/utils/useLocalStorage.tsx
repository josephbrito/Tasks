import { useState, useEffect } from "react";
import { ITasks } from "../context/logic";

function getStorageValue(key: string, defaultValue: ITasks[]) {
  const saved = localStorage.getItem(key);
  if (saved) {
    const initial = JSON.parse(saved);
    return initial;
  } else {
    return defaultValue;
  }
}

export const useLocalStorage = (key: string, defaultValue: ITasks[]) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
