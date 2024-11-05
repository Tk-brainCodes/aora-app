export const appWriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.beginner.aora",
  projectId: "672a4cc8003aae89c2dd",
  databaseId: "672a628a001df6df1a30",
  userCollectionId: "672a62ca001ab5d9656b",
  videoCollectionId: "672a62e80014144a35b3",
  storageBucketId: "672a69cc00299c813276",
};

import { Client, Account, ID, Models } from "react-native-appwrite";

let client: Client;
let account: Account;

client = new Client();
client
  .setEndpoint(appWriteConfig.endpoint)
  .setProject(appWriteConfig.projectId)
  .setPlatform(appWriteConfig.platform);
