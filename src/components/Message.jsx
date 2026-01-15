export default function Message() {
  return (
    <section id="notice" className="w-full bg-[#E0F7FA] py-10">
      <div className="w-full px-4">
        {/* Outer frame (dark border look from screenshot) */}
        <div className="w-full overflow-hidden rounded-6px border border-slate-300 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
          {/* Top bar */}
          <div className="flex items-center justify-between bg-[#19366b] px-6 py-3">
            <div className="w-180px text-left text-sm font-semibold uppercase tracking-wide text-white leading-tight">
              RECENT
              <br />
              NOTICES
            </div>

            <div className="flex-1 text-center text-sm font-semibold uppercase tracking-wide text-white">
              NSS EXECUTIVE FORM K25 FORM
            </div>

            <div className="w-180px text-right">
              <a
                href="#"
                className="inline-block rounded-full bg-[#F6170F] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white"
              >
                VIEW ALL
                <br />
                NOTICES
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="bg-[#E0F7FA] px-6 py-6">
            {/* Big notice card */}
            <div className="rounded-[14px] bg-[#E8E8E8] p-6 shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
              <div className="max-w-none text-[15px] leading-relaxed text-slate-800">
                <p className="mb-4">Dear NSS Family and Friends,</p>

                <p className="mb-4">
                  The National Service Scheme (NSS) at Birla Institute of
                  Technology, Mesra is a student-driven initiative committed to
                  community service and social development. Guided by the motto
                  “Not Me, But You,” NSS BIT Mesra encourages students to look
                  beyond academics and actively contribute to society. Through
                  awareness campaigns, social outreach, environmental
                  initiatives, health drives, and educational programs, our
                  volunteers work towards creating meaningful and lasting
                  impact. NSS serves as a platform for personal growth,
                  leadership development, and social responsibility, shaping
                  students into empathetic and proactive citizens dedicated to
                  nation-building.
                </p>

                <p className="mt-8">Warm Regards</p>
              </div>
            </div>

            {/* Two message cards */}
            <div className="mt-6 space-y-6">
              {/* VC message */}
              <div className="flex items-start gap-5 rounded-[14px] border-2 border-black bg-white p-6 shadow-[0_8px_22px_rgba(0,0,0,0.20)]">
                <img
                  src="/Manna.png"
                  alt="Prof. Indranil Manna"
                  className="h-92px w-92px rounded-full object-cover"
                  draggable="false"
                />
                <div className="min-w-0">
                  <h3 className="text-[18px] font-extrabold text-[#F6170F]">
                    Message from the Vice Chancellor (Prof. Indranil Manna)
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-800">
                    I extend my warm greetings to all members and supporters of
                    the National Service Scheme (NSS) at Birla Institute of
                    Technology, Mesra. NSS plays a vital role in fostering
                    social responsibility, compassion, and leadership among
                    students, creating a positive impact on society. I encourage
                    every student to actively participate in NSS activities to
                    serve the community while developing valuable life skills
                    and lasting friendships. I appreciate the dedication of all
                    NSS volunteers whose efforts make our institution a true
                    agent of change.
                  </p>
                </div>
              </div>

              {/* Coordinator message */}
              <div className="flex items-start gap-5 rounded-[14px] border-2 border-black bg-white p-6 shadow-[0_8px_22px_rgba(0,0,0,0.20)]">
                <img
                  src="/Pandey.png"
                  alt="Dr. O.P. Pandey"
                  className="h-92px w-92px rounded-full object-cover"
                  draggable="false"
                />
                <div className="min-w-0">
                  <h3 className="text-[18px] font-extrabold text-[#F6170F]">
                    Message from the Program Coordinator (Dr. O.P. Pandey)
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-800">
                    Welcome to the NSS Cell of Birla Institute of Technology,
                    Mesra. NSS provides students a platform to serve society
                    while developing leadership, teamwork, and social
                    responsibility. I encourage you to actively participate and
                    contribute your skills to our initiatives. Thank you for
                    your commitment to NSS, and I look forward to our collective
                    efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end content */}
        </div>
      </div>
    </section>
  );
}
