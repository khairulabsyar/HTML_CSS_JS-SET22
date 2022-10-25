const data = {
  eng: {
    language: "english",
    personalInfo: [
      { id: "fullName", label: "Full Name" },
      { id: "currentPosition", label: "Current Position" },
      { id: "selfDescription", label: "About yourself", textarea: true },
    ],
    experienceArray: [
      { id: "year", label: "Year", placeholder: "Year start - year end" },
      { id: "position", label: "Position", placeholder: "Your role" },
      {
        id: "placeOfWork",
        label: "Place of Work",
        placeholder: "Company name",
      },
      {
        id: "description",
        label: "Description",
        placeholder: "Tell more about your experience",
        textarea: true,
      },
    ],
  },
  bm: {
    language: "bahasa malaysia",
    personalInfo: [
      { id: "fullName", label: "Nama penuh" },
      { id: "currentPosition", label: "Pekerjaan sekarang" },
      { id: "selfDescription", label: "Tentang diri anda", textarea: true },
    ],
    experienceArray: [
      {
        id: "year",
        label: "Tahun",
        placeholder: "Tahun mula - tahun akhir",
      },
      { id: "position", label: "Jawatan", placeholder: "Peranan anda" },
      {
        id: "placeOfWork",
        label: "Tempat bekerja",
        placeholder: "Nama syarikat",
      },
      {
        id: "description",
        label: "Butiran pekerjaan",
        placeholder: "Cerita lebih lanjut berkenaan peranan anda",
        textarea: true,
      },
    ],
  },
};

module.exports = data;
