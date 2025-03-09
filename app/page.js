// icon: https://www.flaticon.com/search
// gradients: https://cssgradient.io/
// prayer time: https://aladhan.com/prayer-times-api
export default function Page() {
  const services = [
    { icon: "./shalat.png", title: "5x Daily Prayer" },
    { icon: "./friday.png", title: "Friday Khutbah + Prayer" },
    { icon: "./shalat.png", title: "Taraweeh Prayer" },
    { icon: "./fundraiser.png", title: "Fundraising Iftaar" },
    { icon: "./shalat.png", title: "Eid Salaah" },
    { icon: "./quran.png", title: "Daily Kids Quran class" },
    { icon: "./quran.png", title: "Morning Hifz Class" },
    { icon: "./imam.png", title: "Imam Khatib Course" },
  ];

  return (
    <div className="pt-[5%] flex flex-col pb-16">
      <section className="grid grid-cols-1 md:grid-cols-12 grow py-16 px-4 my-9">
        <div className="md:col-span-6 flex flex-col space-y-9 justify-center pl-0 md:px-6">
          <p className="text-3xl md:text-5xl md:text-left text-center font-extrabold underline underline-offset-8">
            MASJID FAATIMAH
          </p>
          <p className="md:text-md lg:text-xl text-[#737373] font-light">
            An islamic organization that serves Muslims of the South Bay and
            greater Los Angeles metropolitan area, providing spiritual,
            educational and social Islamic services.
          </p>
          <div className="flex gap-4 justify-center md:justify-normal">
            <a href="#about-us">
              <button className="bg-[#253C78] hover:cursor-pointer hover:bg-[#1f3265] text-white py-3 px-8 md:px-12 rounded-lg">
                Learn more
              </button>
            </a>
            <button className="bg-[#FFFF00] hover:cursor-pointer hover:bg-[#e6e600] py-3 px-8 rounded-lg border">
              Donate
            </button>
          </div>
        </div>
        <div className="order-first md:order-none md:col-span-6 flex flex-col justify-center">
          <img
            src="./masjidfront (2).jpg"
            className="rounded-2xl mb-9 md:mb-0 w-full aspect-3/2 object-cover"
          />
        </div>
      </section>

      <section className="bg-white px-4 lg:px-32 space-y-5 py-16">
        <p className="text-2xl md:text-3xl font-semibold">Prayer Timing</p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 md:col-start-1">
            <img
              src="./frontofmasjid.jpg"
              className="aspect-16/9 rounded-2xl h-full w-full"
            />
          </div>
          <div
            className="px-8 py-5 rounded shadow-md md:col-span-7 md:col-start-6 h-96"
            style={{
              background: "rgb(252,237,223)",
              background:
                "linear-gradient(172deg, rgba(252,237,223,1) 76%, rgba(255,255,255,1) 100%)",
            }}
          >
            <table className="w-full h-full">
              <tbody>
                <tr className="border-b-2 border-[#f8d8b0]">
                  <td className="md:text-lg font-black">Name of Salat</td>
                  <td className="text-right md:text-lg font-black">
                    Prayer Time
                  </td>
                </tr>
                <tr className="border-b-2 border-[#f8d8b0] border-dotted">
                  <td className="md:text-lg font-extralight">Fajir</td>
                  <td className="text-right">6:03 am</td>
                </tr>
                <tr className="border-b-2 border-[#f8d8b0] border-dotted">
                  <td className="md:text-lg font-extralight">Dhuhr</td>
                  <td className="text-right">1:04 pm</td>
                </tr>
                <tr className="border-b-2 border-[#f8d8b0] border-dotted">
                  <td className="md:text-lg font-extralight">Asr</td>
                  <td className="text-right">4:25 pm</td>
                </tr>
                <tr className="border-b-2 border-[#f8d8b0] border-dotted">
                  <td className="md:text-lg font-extralight">Maghrib</td>
                  <td className="text-right">6:56 pm</td>
                </tr>
                <tr className="border-b-2 border-[#f8d8b0] border-dotted">
                  <td className="md:text-lg font-extralight">Isha'a</td>
                  <td className="text-right">8:05 pm </td>
                </tr>
                <tr className="border-b-2 border-[#f8d8b0] border-dotted">
                  <td className="md:text-lg font-extralight">Jummah</td>
                  <td className="text-right">12:40 pm </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-32 space-y-5 py-16" id="about-us">
        <p className="text-2xl md:text-3xl font-semibold">Get To Know Us</p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-6 flex items-center">
            <p className="md:text-md lg:text-xl text-[#737373] font-light">
              We are an IRS tax exempt nonprofit Islamic organization that
              serves Muslims of the South Bay and greater Los Angeles
              metropolitan area, providing spiritual, educational and social
              Islamic services. Our goal is to instill the values of being an
              American-Muslim into our patrons and students. We offer several
              Islamic services including daily classes for children with a focus
              on learning how to read and memorize Quran. Students also learn
              the etiquettes of prayer, basic Islamic history, and Islamic
              values. Currently, 130 students attend classes on a regular basis.
              Our recently launched Hifz memorization class, allowed students to
              assist in leading Taraweeh prayers.
              <br />
              <br />
              Donations are Tax Deductible
              <br />
              Tax ID: 45-4208087
            </p>
          </div>
          <div className="col-span-6 flex items-center">
            <img src="./sheikhwithstudents.jpg" className="rounded-xl" />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 lg:px-32 space-y-5 py-16" id="services">
        <p className="text-2xl md:text-3xl font-semibold">Services We Offer</p>
        <div className="grid sm:grid-cols-4 md:grid-cols-8 gap-4">
          {services.map(({ icon, title }) => (
            <div
              key={title}
              className="bg-[whitesmoke] h-40 col-span-2 shadow-sm border border-slate-200 rounded-lg p-6 flex flex-col items-center"
            >
              <div className="w-10">
                <img src={icon} alt="shmai" />
              </div>
              <p className="grow flex flex-col justify-center text-xl font-semibold">
                {title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="shadow-md flex flex-col md:flex-row justify-center items-center gap-4 px-4
        md:px-14 lg:px-36 py-20"
        style={{
          background: "rgb(252,237,223)",
          background:
            "linear-gradient(0deg, rgba(252,237,223,1) 76%, rgba(255,255,255,1) 100%)",
        }}
      >
        <p className="flex-1 text-lg text-[#545454]">
          Alhamdulillah, with the grace of Allah and your support, Masjid
          Faatimah is in continued service to the Muslim ummah. We truly
          appreciate your financial assistance, duas, and goodwill.
        </p>
        <div className="flex-1">
          <p className="text-lg text-[#545454] italic">
            Abu Huraira reported: The Messenger of Allah, said, “Charity does
            not decrease wealth”
          </p>
        </div>
        <button className="bg-blue-400 hover:cursor-pointer hover:bg-blue-500 py-2 px-12 rounded-lg text-white">
          Donate
        </button>
      </section>

      <section className="px-4 lg:px-32 space-y-5 py-16 h-96">
        <p className="text-2xl md:text-3xl font-semibold">Our Location</p>
        <iframe
          className="shadown-md rounded-xl"
          style={{
            border: "0",
            height: "100%",
            width: "100%",
          }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAP_API_KEY}&zoom=15&q=15012 Prairie Ave Suite A, Hawthorne, CA 90250`}
          allowFullScreen
        />
      </section>
    </div>
  );
}
