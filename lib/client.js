import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId:"hzf9h1in",
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-10-21",
    token:process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
