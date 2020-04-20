const utils = {
  fetchStoredQuotes: () => {
    if (!localStorage.savedQuotes) {
      localStorage.setItem('savedQuotes', "[]");
      return [];
    }
    
    return JSON.parse(localStorage.getItem('savedQuotes'));
  },

  fetchStoredIDs: () => {
    if (!localStorage.savedIDs) {
      localStorage.setItem('savedIDs', "{}");
      return [];
    }
    
    return JSON.parse(localStorage.getItem('savedIDs'));
  },

  storeQuotes: (quotes) => {
    localStorage.setItem('savedQuotes', quotes);
  },

  storeIDs: async function storeIDs(ids) {
    localStorage.setItem('savedIDs', ids);
  },

  serializeData: (data) => {
    return JSON.stringify(data);
  }
}

export default utils;