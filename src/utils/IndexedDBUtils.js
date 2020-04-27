import localForage from 'localforage';


const utils = {
  fetchStoredQuotes: async () => {
    const data = await localForage.getItem("savedQuotes");

    if (!data) {
      const setData = await localForage.setItem("savedQuotes", []);
      return setData;
    }
    return data;

    /*localForage.getItem('savedQuotes').then((data) => {
      if (!data) {
        localForage.setItem('savedQuotes', []).then((data) => {
          return data
        });
      } else {
        return data;
      }
    });*/
  },

  fetchStoredIDs: async () => {
    const data = await localForage.getItem("savedIDs");

    if (!data) {
      const setData = await localForage.setItem("savedIDs", {});
      return setData;
    }
    return data;

    /*localForage.getItem('savedIDs').then((data) => {
      if (!data) {
        localForage.setItem('savedIDs', {}).then((data) => {
          return data
        });
      } else {
        return data;
      }
    });*/
  },

  storeQuotes: async (quotes) => {
    localForage.setItem('savedQuotes', quotes).then((data) => {
      return data;
    }).catch((err) => {
      return err;
    });
  },

  storeIDs: (ids) => {
    localForage.setItem('savedIDs', ids).then((data) => {
      return data;
    }).catch((err) => {
      return err;
    });
  },

  serializeData: (data) => {
    return JSON.stringify(data);
  }
}

export default utils;