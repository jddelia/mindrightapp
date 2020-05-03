import localForage from 'localforage';


const utils = {
  fetchStoredQuotes: async () => {
    try {
      const data = await localForage.getItem("savedQuotes");

      if (!data) {
        const setData = await localForage.setItem("savedQuotes", []);
        return setData;
      }
      return data;
    } catch (err) {
      return err
    }
  },

  fetchStoredIDs: async () => {
    try {
      const data = await localForage.getItem("savedIDs");

      if (!data) {
        const setData = await localForage.setItem("savedIDs", {});
        return setData;
      }
      return data;
    } catch (err) {
      return err
    }
  },

  storeQuotes: (quotes) => {
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

  storeUserToken: async (token) => {
    try {
      const data = await localForage.getItem("userToken");

      if (!data) {
        const setData = await localForage.setItem("userToken", token);
        return setData;
      }
      return;
    } catch (err) {
      return err
    }
  },

  fetchUserToken: async () => {
    try {
      const data = await localForage.getItem("userToken");
      return data;
    } catch (err) {
      return err;
    }
  }
}

export default utils;