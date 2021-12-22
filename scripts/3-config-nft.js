import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x99Ca165018EcAa0ff42D289579B179943DCf35A4",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "daoPAPO key",
        description: "This NFT will give you access to daoPAPO!",
        image: readFileSync("scripts/assets/chico.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()