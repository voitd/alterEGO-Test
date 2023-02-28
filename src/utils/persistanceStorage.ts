type StorageItemType = string | null;
export const getItem = (key: string): StorageItemType => {
  try {
    const token = localStorage.getItem(key);
    if (typeof token == "string") {
      return JSON.parse(token);
    }
    return null;
  } catch (e) {
    console.log("[Local Sotrage] Error getting data", e);
    return null;
  }
};

export const setItem = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log("[Local Sotrage] Error saving data", e);
  }
};

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.log("[Local Sotrage] Error remove data", e);
  }
};

export const clearItem = () => {
  try {
    localStorage.clear();
  } catch (e) {
    console.log("[Local Sotrage] Error clearing data", e);
  }
};
