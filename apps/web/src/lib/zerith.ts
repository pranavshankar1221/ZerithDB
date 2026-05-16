/**
 * ZerithDB SDK Integration
 * 
 * This file demonstrates how to initialize the ZerithDB client 
 * for a local-first, peer-to-peer web application.
 */

// import { createClient } from "zerithdb-sdk";

// Mock implementation since the package is not installed in the workspace
export const createClient = (config: any) => {
  console.log("ZerithDB Initialized with config:", config);
  return {
    collection: (name: string) => ({
      insert: async (data: any) => console.log(`Inserted into ${name}:`, data),
      subscribe: (cb: any) => cb([]),
      find: async (query: any) => [],
    }),
    sync: {
      enable: () => console.log("P2P Sync Enabled"),
    },
    network: {
      on: (event: string, cb: any) => console.log(`Listening for ${event}`),
    }
  };
};

/**
 * Global ZerithDB Instance
 */
export const db = createClient({
  appId: "zerith-web-demo",
  storage: "indexeddb",
  sync: {
    p2p: true,
    signalingUrl: "wss://signal.zerith.dev"
  }
});

// Auto-enable sync in browser
if (typeof window !== "undefined") {
  db.sync.enable();
}
