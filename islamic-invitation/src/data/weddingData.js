export const weddingData = {
  bride: {
    name: "Bushra shaikh",
  },
  groom: {
    name: "Muazzam Usmani",
  },
  events: {
    haldi: {
      title: "Haldi Ceremony",
      subtitle: "A Day Filled With Turmeric & Happiness",
      date: "2026-11-14",
      time: "6:00 PM",
      venue: "Uttrai Maryadpur Mau",

      address: "",
    },
    nikah: {
      title: "Nikah Ceremony",
      subtitle: "A Sacred Beginning, By the Grace of Allah",
      // The numeric date came from the Save the Date text. Add the real time and venue below.
      date: "2026-11-15",
      time: "1:30 PM",
      venue: "Sarkanda Devlas Mau",
      address: "",
    },
     dawate_walima: {
      title: "Dawate Walima",
      subtitle: "A Sacred Beginning, By the Grace of Allah",
      // The numeric date came from the Save the Date text. Add the real time and venue below.
      date: "2026-11-16",
      time: "12:05 PM",
      venue: "Uttrai Maryadpur Mau",
      address: "",
    },
  },
  contacts: {
    bride: { name: "Md. Yahiya Usmani", phone: "9792383762" },
    groom: { name: "Irfan Usmani", phone: "9619384836" },
  },
  venue: {
    name: "Venue",
    address: "Uttrai maryadpur mau",
    mapsUrl: "https://maps.app.goo.gl/hJfsi6RrLV2ajBwBA",
  },
};

export function formatWeddingDate(date, fallback = "17 November 2026") {
  if (!date) return fallback;
  const parsed = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return fallback;
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}
