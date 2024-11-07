import { UserProps } from "@/types/user-types";

export const appWriteConfig = {
  endpoint: `${process.env.ENDPOINT}`,
  platform: `${process.env.PLATFORM}`,
  projectId: `${process.env.PROJECT_ID}`,
  databaseId: `${process.env.DATABASE_ID}`,
  userCollectionId: `${process.env.USERCOLLECTION_ID}`,
  videoCollectionId: `${process.env.VIDEOCOLLECTION_ID}`,
  storageBucketId: `${process.env.STORAGEBUCKET_ID}`,
};

import { Client, Account, ID, Models } from "react-native-appwrite";

let client: Client;

client = new Client();
client
  .setEndpoint(appWriteConfig.endpoint)
  .setProject(appWriteConfig.projectId)
  .setPlatform(appWriteConfig.platform);

const account = new Account(client);

export const createNewUser = ({ email, password, username }: UserProps) => {
  account.create(ID.unique(), email, password, username).then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
