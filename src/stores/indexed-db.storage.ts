import type { StateStorage } from 'zustand/middleware';

const STORE_NAME = 'fh-cards-store';

const db = new Promise<IDBDatabase>((resolve) => {
  const request = indexedDB.open(STORE_NAME, 1);
  request.onsuccess = () => {
    resolve(request.result);
  };
  request.onupgradeneeded = (event) => {
    const db = (event.target as any).result;
    db.createObjectStore(STORE_NAME);
    resolve(db);
  };
});

async function startTransaction() {
  return (await db).transaction(STORE_NAME, 'readwrite');
}

const get = async (name: string): Promise<string | null> => {
  const transaction = await startTransaction();
  const request = transaction.objectStore(STORE_NAME).get(name);
  return new Promise((resolve) => {
    transaction.oncomplete = () => {
      resolve(request.result);
    };
  });
};

export const indexedDBStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    const selectedClassString = await get('selectedClass');
    if (!selectedClassString) {
      return null;
    }
    const selectedClass = JSON.parse(selectedClassString);
    const stateString = await get(JSON.parse(selectedClass).name);
    if (!stateString) {
      return null;
    }
    const state = JSON.parse(stateString);
    return JSON.stringify({ state: { ...state, selectedClass } });
  },
  setItem: async (name: string, value: string): Promise<void> => {
    const transaction = await startTransaction();
    const { state: { selectedClass, ...state } } = JSON.parse(value);
    transaction.objectStore(STORE_NAME).put(JSON.stringify({ state }), selectedClass.name);
    transaction.objectStore(STORE_NAME).put(JSON.stringify(selectedClass), 'selectedClass');
    return new Promise((resolve) => {
      transaction.oncomplete = () => {
        resolve();
      };
    });
  },
  removeItem: async (name: string): Promise<void> => {
    const selectedClass = await get('selectedClass');
    if (!selectedClass) {
      return;
    }
    const transaction = await startTransaction();
    transaction.objectStore(STORE_NAME).delete(JSON.parse(selectedClass).name);
    return new Promise((resolve) => {
      transaction.oncomplete = () => {
        resolve();
      };
    });
  },
};
