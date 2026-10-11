import { defineQuery } from "next-sanity";

/*
 * Semua query pakai projeksi eksplisit — hanya field yang dipakai komponen.
 *
 * Gambar diproyeksikan langsung sebagai URL CDN + parameter transformasi,
 * jadi komponen tetap menerima `string` seperti sebelumnya.
 * ponytail: hotspot/crop dari Studio diabaikan. Kalau nanti perlu, pakai
 * @sanity/image-url di server component dan proyeksikan objek image mentah.
 */

const img = (params: string) => `.asset->url + "?${params}&auto=format&q=80"`;

export const PROGRAMS_QUERY = defineQuery(`
  *[_type == "program"] | order(order asc, _createdAt asc) {
    _id, title, subtitle, mode, description, badge, badgeColor, highlight,
    ctaLabel,
    "image": image${img("w=800&h=600&fit=crop")},
    features[] { iconKey, label }
  }
`);

export const HOME_PROGRAMS_QUERY = defineQuery(`
  *[_type == "program" && featuredOnHome == true] | order(order asc, _createdAt asc)[0...4] {
    _id, title, subtitle, mode, description, badge, badgeColor, highlight,
    ctaLabel,
    "image": image${img("w=800&h=600&fit=crop")},
    features[] { iconKey, label }
  }
`);

export const TUTORS_QUERY = defineQuery(`
  *[_type == "tutor"] | order(order asc, _createdAt asc) {
    _id, name, role, expertise, credential,
    "image": image${img("w=400&h=500&fit=crop")}
  }
`);

export const HOME_TUTORS_QUERY = defineQuery(`
  *[_type == "tutor" && featuredOnHome == true] | order(order asc, _createdAt asc)[0...4] {
    _id, name, credential, score, experience,
    "image": image${img("w=400&h=500&fit=crop")}
  }
`);

export const TEAM_QUERY = defineQuery(`
  *[_type == "teamMember"] | order(order asc, _createdAt asc) {
    _id, name, role, description,
    "image": image${img("w=400&h=480&fit=crop")}
  }
`);

export const MILESTONES_QUERY = defineQuery(`
  *[_type == "milestone"] | order(year asc) { _id, year, title, description }
`);

export const PARTNERS_QUERY = defineQuery(`
  *[_type == "partner"] | order(order asc, _createdAt asc) { _id, name, region }
`);

export const WEBINARS_QUERY = defineQuery(`
  *[_type == "webinar"] | order(date desc) {
    _id, title, country, date, registrationUrl,
    "poster": poster${img("w=800&h=1066&fit=crop")}
  }
`);

export const HOME_WEBINARS_QUERY = defineQuery(`
  *[_type == "webinar" && featuredOnHome == true] | order(date desc)[0...5] {
    _id, title, date,
    "poster": poster${img("w=700&h=1000&fit=crop")}
  }
`);

export const PAST_WEBINARS_QUERY = defineQuery(`
  *[_type == "pastWebinar"] | order(order asc, _createdAt desc) {
    _id, title, dateLabel, views, speaker, youtubeUrl
  }
`);

export const VIDEOS_QUERY = defineQuery(`
  *[_type == "video"] | order(date desc) {
    _id, title, category, date, views, duration, youtubeUrl,
    "thumbnail": thumbnail${img("w=600&h=340&fit=crop")}
  }
`);

export const HOME_VIDEOS_QUERY = defineQuery(`
  *[_type == "video" && featuredOnHome == true] | order(date desc)[0...3] {
    _id, title, category, duration, views
  }
`);

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(order asc, _createdAt asc) {
    _id, name, program, programLabel, score, achievement, university, text, status, tutor,
    "avatar": coalesce(avatar${img("w=200&h=200&fit=crop")}, "")
  }
`);

export const HOME_TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial" && featuredOnHome == true] | order(order asc, _createdAt asc)[0...9] {
    _id, name, score, university,
    "role": coalesce(role, score),
    "text": coalesce(shortText, text),
    "avatar": coalesce(avatar${img("w=100&h=100&fit=crop")}, "")
  }
`);

export const FAQS_QUERY = defineQuery(`
  *[_type == "faq"] | order(order asc, _createdAt asc) { _id, question, answer }
`);

export const STORIES_QUERY = defineQuery(`
  *[_type == "banuaStory" && defined(image.asset) && defined(caption)]
    | order(order asc, _createdAt desc) {
      _id, caption, "alt": caption, imagePosition,
      "image": image${img("w=1200&fit=max")}
    }
`);

export const HOME_STORIES_QUERY = defineQuery(`
  *[_type == "banuaStory" && featuredOnHome == true && defined(image.asset) && defined(caption)]
    | order(order asc, _createdAt desc)[0...3] {
      _id, caption, "alt": caption, imagePosition,
      "image": image${img("w=1200&fit=max")}
    }
`);
