import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const clientConfig = {
    projectId:"hzf9h1in",
    dataset:"production",
}

export const client = createClient({
    projectId:clientConfig.projectId,
    dataset:clientConfig.dataset,
    useCdn:true,
    apiVersion:"2021-10-21",
    token:process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
