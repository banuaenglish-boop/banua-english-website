import { defineLive } from "next-sanity/live";
import { client } from "./client";

const token = process.env.SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  // next-sanity mengirim token ini ke browser HANYA saat draft mode aktif.
  // Wajib token ber-hak Viewer, jangan Editor/Admin.
  browserToken: token,
});
