import AsyncStorage from '@react-native-async-storage/async-storage';
export const storageService = {
    storeData: async (key, value, isObject = true) => {
        try {
            let jsonValue = JSON.stringify(value);
            if (!isObject) {
                jsonValue = value;
            }
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            console.log('storage service storeData error', e);
        }
    },
    getData: async (key, isObject = true) => {
        try {
            let value = await AsyncStorage.getItem(key);
            if (isObject) {
                value = JSON.parse(value);
            }
            return value != null ? value : null;
        } catch(e) {
            console.log('storage service getData error', e);
        }
    },
    removeData: async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch(e) {
            console.log('storage service removeData error', e);
        }
    },
    clearAll: async () => {
        try {
            await AsyncStorage.clear()
        } catch(e) {
            console.log('storage service clearAll error', e);
        }
    }
}