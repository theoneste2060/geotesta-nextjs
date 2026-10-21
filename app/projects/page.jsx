import Link from 'next/link';

export const metadata = {
  title: { absolute: "Projects | GeoTesta" },
  description: "GeoTesta projects: featured work, the project register, and a photo gallery.",
  openGraph: { title: "Projects | GeoTesta", description: "GeoTesta projects: featured work, the project register, and a photo gallery.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-photo">
        <img className="ph-photo" src="/assets/field-school-site.jpg" alt="" width="1000" height="750" loading="eager" />
        <div className="wrap page-head">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <span aria-current="page">
                  Projects
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Projects
          </h1>
          <p className="lead">
            Real work on Rwandan sites, one engagement at a time.
          </p>
          <p className="actions hero-acts">
            <Link href="/contact" className="btn">
              Start your project
            </Link>
            <a href="#register" className="quiet">
              Search the project register
            </a>
          </p>
        </div>
      </section>
      <section className="proof-strip" aria-label="Project record">
        <div className="wrap">
          <dl>
            <div>
              <dt>
                Project assignments
              </dt>
              <dd>
                500+
              </dd>
            </div>
            <div>
              <dt>
                References in the register
              </dt>
              <dd>
                67
              </dd>
            </div>
            <div>
              <dt>
                Register period
              </dt>
              <dd>
                2022–2026
              </dd>
            </div>
            <div>
              <dt>
                Coverage
              </dt>
              <dd>
                Country-wide
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="wrap">
        <p className="proto-only">
          Open item: The register comes from the appendix of the company profile, with obvious typos corrected. Confirm that GeoTesta may name each client and project publicly. Gallery captions describe what each photo shows. They do not name projects, so add the project and date for each photo, and confirm the people shown agree to their use. 'Sky Base Tower' in the sitemap is probably the 'Sky Plaza building' in the register (Kacyiru, 2026): confirm the name. The Gahanga structural audit in the sitemap is not in the register. Airtel Headquarters appears under Selected assignments but not in the register: add its client and year.
        </p>
        <section className="block" id="sectors">
          <h2>
            Breadth across Rwanda's built environment
          </h2>
          <div className="chart-panel">
            <ul className="chart" aria-label="Projects by sector">
              <li>
                <span className="c-label">
                  Public and social infrastructure
                </span>
                <span className="c-bar" aria-hidden="true">
                  <i style={{"--w": "1.000"}}></i>
                </span>
                <b className="c-num">
                  14
                </b>
              </li>
              <li>
                <span className="c-label">
                  Industrial and logistics
                </span>
                <span className="c-bar" aria-hidden="true">
                  <i style={{"--w": "0.643"}}></i>
                </span>
                <b className="c-num">
                  9
                </b>
              </li>
              <li>
                <span className="c-label">
                  Buildings and developments
                </span>
                <span className="c-bar" aria-hidden="true">
                  <i style={{"--w": "0.643"}}></i>
                </span>
                <b className="c-num">
                  9
                </b>
              </li>
              <li>
                <span className="c-label">
                  Flood resilience and slopes
                </span>
                <span className="c-bar" aria-hidden="true">
                  <i style={{"--w": "0.643"}}></i>
                </span>
                <b className="c-num">
                  9
                </b>
              </li>
              <li>
                <span className="c-label">
                  Water and irrigation
                </span>
                <span className="c-bar" aria-hidden="true">
                  <i style={{"--w": "0.429"}}></i>
                </span>
                <b className="c-num">
                  6
                </b>
              </li>
              <li>
                <span className="c-label">
                  Environment and energy
                </span>
                <span className="c-bar" aria-hidden="true">
                  <i style={{"--w": "0.571"}}></i>
                </span>
                <b className="c-num">
                  8
                </b>
              </li>
              <li>
                <span className="c-label">
                  Structural assessments
                </span>
                <span className="c-bar" aria-hidden="true">
                  <i style={{"--w": "0.357"}}></i>
                </span>
                <b className="c-num">
                  5
                </b>
              </li>
              <li>
                <span className="c-label">
                  Transport and bridges
                </span>
                <span className="c-bar" aria-hidden="true">
                  <i style={{"--w": "0.286"}}></i>
                </span>
                <b className="c-num">
                  4
                </b>
              </li>
            </ul>
          </div>
        </section>
        <section className="block" id="featured">
          <h2>
            Selected assignments
          </h2>
          <ul className="atiles">
            <li>
              <Link href="/project-vunga-corridor">
                <b>
                  Vunga Corridor flood and sediment control
                </b>
                <span>
                  Geotechnical investigations for flood and sediment-control design.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/project-kanyegenyege-gishanda-dams">
                <b>
                  Kanyegenyege and Gishanda Dams
                </b>
                <span>
                  Ground investigations for irrigation and dam studies.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/project-bwishyura-substation">
                <b>
                  Bwishyura Substation
                </b>
                <span>
                  Slope stability analysis of designated cutting sections.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/project-ev-charging-hub">
                <b>
                  Gikondo–Rugando EV Charging Hub
                </b>
                <span>
                  Geo-environmental assessment for a proposed charging facility.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/project-cyivugiza-bridge">
                <b>
                  Cyivugiza Bridge
                </b>
                <span>
                  Construction supervision in Nyamasheke District.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/project-airtel-headquarters">
                <b>
                  Airtel Headquarters
                </b>
                <span>
                  Structural audit of the headquarters building in Kigali.
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="block" id="themes">
          <div className="duo">
            <div className="panel">
              <h2>
                Dams, irrigation and flood control
              </h2>
              <p>
                The largest group of our work: five valley dams and tanks in Kayonza District, the Kanyegenyege and Gishanda dams and irrigation scheme, the Ndego Hillside Irrigation Project design review, and flood and sediment control in the Vunga Corridor.
              </p>
            </div>
            <div className="panel">
              <h2>
                Buildings, slopes and model villages
              </h2>
              <p>
                Slope stability at Bwishyura Substation in Karongi, green-component studies for the Rwufi and Cyivugiza IDP model villages, and buildings and developments across Kigali and the provinces.
              </p>
            </div>
          </div>
        </section>
        <section className="block" id="register">
          <h2>
            Project register
          </h2>
          <p>
            67 references from 2022 to 2026. Ten projects per page. Filter by type of work or year, or search by district or client.
          </p>
          <p className="proto-only">
            Open item: The register is paged (10 per page) and filterable. Types are worked out from each project's title. Check them.
          </p>
          <div className="filter-row filter-panel">
            <div className="field">
              <label htmlFor="reg-q">
                Search
              </label>
              <input id="reg-q" type="search" placeholder="District, client or project" />
            </div>
            <div className="field">
              <label htmlFor="reg-type">
                Type of work
              </label>
              <select id="reg-type">
                <option value="">
                  All types
                </option>
                <option>
                  Construction and supervision
                </option>
                <option>
                  Environmental
                </option>
                <option>
                  Geotechnical investigation
                </option>
                <option>
                  Slope stability and retaining walls
                </option>
                <option>
                  Structural audit
                </option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="reg-year">
                Year
              </label>
              <select id="reg-year">
                <option value="">
                  All years
                </option>
                <option>
                  2026
                </option>
                <option>
                  2025
                </option>
                <option>
                  2024
                </option>
                <option>
                  2023
                </option>
                <option>
                  2022
                </option>
              </select>
            </div>
          </div>
          <p className="sr-only" id="reg-status" role="status" aria-live="polite"></p>
          <p id="reg-count" className="muted-line"></p>
          <div className="table-scroll">
            <table id="reg-table">
              <thead>
                <tr>
                  <th scope="col">
                    Project
                  </th>
                  <th scope="col">
                    Location
                  </th>
                  <th scope="col">
                    Client
                  </th>
                  <th scope="col">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr data-type="Construction and supervision" data-year="2026">
                  <td>
                    Proposed construction of basic infrastructure in Muhanga and Musanze Industrial Parks
                  </td>
                  <td>
                    Muhanga and Musanze Districts
                  </td>
                  <td>
                    Dr. S.
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Structural audit" data-year="2026">
                  <td>
                    Structural audit of the Soft Packaging factory building
                  </td>
                  <td>
                    Rwamagana District
                  </td>
                  <td>
                    Soft Packaging Ltd
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Construction and supervision" data-year="2026">
                  <td>
                    Design and construction of Mukamira Genocide Memorial Site
                  </td>
                  <td>
                    Nyabihu District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Environmental" data-year="2026">
                  <td>
                    Geotechnical investigation for the Artesian Tower building
                  </td>
                  <td>
                    City of Kigali
                  </td>
                  <td>
                    Silver Ridger Ltd
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2026">
                  <td>
                    Geotechnical investigation for feasibility study, preliminary and detailed design of flood and sediment control measures in the Vunga Corridor
                  </td>
                  <td>
                    Vunga Corridor, Northern and Western Rwanda
                  </td>
                  <td>
                    Sering Ingegneria S.r.l.
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2026">
                  <td>
                    Geotechnical investigation for the proposed modern truck parking yard at Muyumbu
                  </td>
                  <td>
                    Muyumbu, Rwamagana District
                  </td>
                  <td>
                    CCTTFA
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2026">
                  <td>
                    Geotechnical investigation for the feasibility study of a tannery park in Kageyo Sector
                  </td>
                  <td>
                    Kageyo, Gicumbi District
                  </td>
                  <td>
                    EDIFICE Group Ltd
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2026">
                  <td>
                    Geotechnical investigation for the proposed Sky Plaza building
                  </td>
                  <td>
                    Kacyiru, City of Kigali
                  </td>
                  <td>
                    Mr. Mao
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2026">
                  <td>
                    Geotechnical investigation for the proposed Parallel Residents development
                  </td>
                  <td>
                    Gahanga, Kicukiro District
                  </td>
                  <td>
                    Ark Design Ltd
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2026">
                  <td>
                    Geotechnical investigation for the proposed Rock Property building
                  </td>
                  <td>
                    Kimihurura, Gasabo District, Kigali
                  </td>
                  <td>
                    Rock Property Ltd
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Slope stability and retaining walls" data-year="2026">
                  <td>
                    Geotechnical investigation for feasibility study of classrooms, latrines and retaining walls at 13 schools (GS Gihara, GS Rambura, EP Nyagahinika, GS Syiki, GS Rwamiko, GS Bukongora, EP Ruronde, EP Boneza, EP Rutovu, GS Karambira, EP Mpingamabuye, EP Busenda and GS Buhindure)
                  </td>
                  <td>
                    Rutsiro District
                  </td>
                  <td>
                    NSANZIMFURA Emmanuel Gilbert
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2026">
                  <td>
                    Geotechnical investigation for the proposed Akarabo Chicken facility
                  </td>
                  <td>
                    Nyamata, Bugesera District
                  </td>
                  <td>
                    Ark Design Ltd
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Environmental" data-year="2026">
                  <td>
                    Geo-environmental assessment for the proposed Gikondo–Rugando Gate EV Charging Hub
                  </td>
                  <td>
                    Kicukiro District, Kigali
                  </td>
                  <td>
                    Abundio Energy Africa Ltd
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2026">
                  <td>
                    Geotechnical investigation for Mugina Genocide Memorial Site
                  </td>
                  <td>
                    Kamonyi District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2026
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation during the construction of the Gishanda Irrigation Scheme
                  </td>
                  <td>
                    Kayonza District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2025–2026
                  </td>
                </tr>
                <tr data-type="Construction and supervision" data-year="2025">
                  <td>
                    Supervision of construction of Cyivugiza Bridge
                  </td>
                  <td>
                    Nyamasheke District
                  </td>
                  <td>
                    Nyamasheke District
                  </td>
                  <td>
                    {"2025 & 2026"}
                  </td>
                </tr>
                <tr data-type="Construction and supervision" data-year="2025">
                  <td>
                    Preparation of as-built drawings for Bigogwe (Kanzenze) Genocide Memorial Site
                  </td>
                  <td>
                    Bigogwe / Kanzenze
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for review of the Ndego Hillside Irrigation Project design (Kibare, Nasho and Ihema Blocks)
                  </td>
                  <td>
                    Kayonza District, Eastern Province
                  </td>
                  <td>
                    {"JV CATS & SECOSE Ltd"}
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for flood-control measures under the Volcano Region and Vunga Corridor Project (VCRP)
                  </td>
                  <td>
                    Volcano Region and Vunga Corridor
                  </td>
                  <td>
                    {"SGI & ZURI CONSULTING LTD"}
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for proposed water supply and related civil works at HEZA Estate
                  </td>
                  <td>
                    Kagugu Cell, Kinyinya Sector, Gasabo District
                  </td>
                  <td>
                    RHA
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Slope stability and retaining walls" data-year="2025">
                  <td>
                    Slope stability analysis at Bwishyura Substation cutting area (Sections 1, 2, 3 and 4C)
                  </td>
                  <td>
                    Bwishyura, Karongi District
                  </td>
                  <td>
                    EDCL
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for proposed solid waste management facilities
                  </td>
                  <td>
                    Muhanga District
                  </td>
                  <td>
                    BETA Company Ltd
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for the proposed Kabaya Landfill and Dumping Site
                  </td>
                  <td>
                    Kabaya, Ngororero District
                  </td>
                  <td>
                    BETA Company Ltd
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for the proposed Gashyushya Landfill and Dumping Site
                  </td>
                  <td>
                    Gacurabwenge, Kamonyi District
                  </td>
                  <td>
                    BETA Company Ltd
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for the proposed Nyamasheke Medical Clinic
                  </td>
                  <td>
                    Nyamasheke District
                  </td>
                  <td>
                    NYAMASHEKE MEDICAL CLINIC
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for rehabilitation of Rugeramigozi Dam
                  </td>
                  <td>
                    Muhanga District
                  </td>
                  <td>
                    DR. S Ltd
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for construction of Kagogo Bridge
                  </td>
                  <td>
                    Giti, Gicumbi District
                  </td>
                  <td>
                    {"JV OCOS & OBUSCO Ltd"}
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for Bugesera Imbuto Hub Project
                  </td>
                  <td>
                    Bugesera District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for ravines along indicative feeder roads (Lots 2 and 3)
                  </td>
                  <td>
                    Rutsiro District
                  </td>
                  <td>
                    MIGECO Ltd
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for the proposed Gicumbi Meteorological Weather Station
                  </td>
                  <td>
                    Byumba, Gicumbi District
                  </td>
                  <td>
                    RHA
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2025">
                  <td>
                    Geotechnical investigation for the proposed DBE Villas
                  </td>
                  <td>
                    Kimironko Sector, Gasabo District
                  </td>
                  <td>
                    DBUILD EMPIRE
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Environmental" data-year="2025">
                  <td>
                    Comprehensive Environmental and Social Impact Assessment (ESIA) for Pro-Poor Development projects (PPD)
                  </td>
                  <td>
                    Gatsibo District
                  </td>
                  <td>
                    Gatsibo District
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Slope stability and retaining walls" data-year="2025">
                  <td>
                    Slope stability analysis for Rwaza Hydropower Canal slopes
                  </td>
                  <td>
                    Musanze District
                  </td>
                  <td>
                    Rwaza Hydropower Ltd
                  </td>
                  <td>
                    2025
                  </td>
                </tr>
                <tr data-type="Environmental" data-year="2024">
                  <td>
                    Sediment and water analysis for Agatobwe Hydropower
                  </td>
                  <td>
                    Agatobwe Hydropower Project
                  </td>
                  <td>
                    Agatobwe Hydropower
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Structural audit" data-year="2024">
                  <td>
                    Structural audit of a duplex apartment building
                  </td>
                  <td>
                    Rebero, Kicukiro District
                  </td>
                  <td>
                    NIYONSENGA Simon Pierre
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for the proposed LPG upgrade
                  </td>
                  <td>
                    Nyamabuye, Muhanga District
                  </td>
                  <td>
                    C. MONOLITH CONSTRUCTION Ltd
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for the proposed Kopa Telecom office building
                  </td>
                  <td>
                    Kimihurura, Gasabo District, Kigali
                  </td>
                  <td>
                    Kopa Telecom
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for the proposed eco-resort building
                  </td>
                  <td>
                    Gashaki, Musanze District
                  </td>
                  <td>
                    Ark Design Ltd
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for the proposed modern church
                  </td>
                  <td>
                    Kagano, Nyamasheke District
                  </td>
                  <td>
                    NTAHONDEREYE Cyprien
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Structural audit" data-year="2024">
                  <td>
                    Structural audit of Rambo TVET School
                  </td>
                  <td>
                    Nyamyumba, Rubavu District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for the detailed study of Kanyegenyege and Gishanda Dams and Irrigation Scheme
                  </td>
                  <td>
                    Kayonza District
                  </td>
                  <td>
                    ECORDECO Ltd
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for Rwanda Correctional Service (RCS) projects, including Nyamasheke, Nyamagabe, Nyarugenge and Rwamagana Correction Centres and the RCS Training School
                  </td>
                  <td>
                    Nyamasheke, Nyamagabe, Nyarugenge and Rwamagana
                  </td>
                  <td>
                    RCS
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for Gatare and Rwishywa Bridges
                  </td>
                  <td>
                    Rutsiro District
                  </td>
                  <td>
                    URTRASCO Ltd
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for the proposed construction of 45 Early Childhood Development Centres
                  </td>
                  <td>
                    Multiple locations, Rwanda
                  </td>
                  <td>
                    RHA
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Slope stability and retaining walls" data-year="2024">
                  <td>
                    Detailed design review for retaining walls and stormwater drainage in the school compounds of GS Kinigi and GS Burushya
                  </td>
                  <td>
                    Nyamyumba Sector, Rubavu District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for the proposed mosque
                  </td>
                  <td>
                    Muganza Cell, Runda Sector, Kamonyi District
                  </td>
                  <td>
                    Not stated
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for Royal Golf View Apartment
                  </td>
                  <td>
                    Kacyiru, Gasabo District, Kigali
                  </td>
                  <td>
                    DND Developers
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for TVET Phase III, Lot 5: rehabilitation of Karengera TVET School
                  </td>
                  <td>
                    Kirimbi, Nyamasheke District
                  </td>
                  <td>
                    BFCC Ltd
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for the study and design of the National Processing Centre (NPC), Lot
                  </td>
                  <td>
                    Kicukiro District
                  </td>
                  <td>
                    Nestaah + Co Ltd
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for the study and design of Local Post-Harvest Centres (LPCs)
                  </td>
                  <td>
                    Nyagatare, Rubavu, Rulindo and Bugesera Districts
                  </td>
                  <td>
                    Nestaah + Co Ltd
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Structural audit" data-year="2024">
                  <td>
                    Structural audit of NISR Census and Survey buildings
                  </td>
                  <td>
                    Muhima, Nyarugenge District, Kigali
                  </td>
                  <td>
                    Obusco Ltd
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2024">
                  <td>
                    Geotechnical investigation for Rundazi River protection works
                  </td>
                  <td>
                    Huye District
                  </td>
                  <td>
                    Not stated
                  </td>
                  <td>
                    2024
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2023">
                  <td>
                    Geotechnical investigation for the African Deaf Bible College (ADBC)
                  </td>
                  <td>
                    Gashora, Bugesera District
                  </td>
                  <td>
                    Deaf African Ministry Rwanda (DAMR)
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Slope stability and retaining walls" data-year="2023">
                  <td>
                    Geotechnical and hydrological studies and retaining-wall design at Pindura Barracks
                  </td>
                  <td>
                    Nyamasheke District
                  </td>
                  <td>
                    {"N&M Empire Company Ltd"}
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2023">
                  <td>
                    Geotechnical investigation for the construction of HPV Gatagara
                  </td>
                  <td>
                    Nyanza District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2023">
                  <td>
                    Geotechnical investigation for VTC Mutobo
                  </td>
                  <td>
                    Nyabihu District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2023">
                  <td>
                    Geotechnical survey and soil tests: Nyacyonga modern market
                  </td>
                  <td>
                    Gasabo District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2023">
                  <td>
                    Geotechnical investigation: warehouse in Ragwe Village
                  </td>
                  <td>
                    Kayonza District
                  </td>
                  <td>
                    Western Seed Company Ltd
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Slope stability and retaining walls" data-year="2023">
                  <td>
                    Retaining-wall feasibility study for schools in Nyaruguru District
                  </td>
                  <td>
                    Nyaruguru District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2023">
                  <td>
                    Geotechnical investigation: maize store and processing unit
                  </td>
                  <td>
                    Kayonza District
                  </td>
                  <td>
                    Agro-transformer farmer Ltd
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Slope stability and retaining walls" data-year="2023">
                  <td>
                    Retaining-wall feasibility study for schools in Nyamagabe District
                  </td>
                  <td>
                    Nyamagabe District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2023">
                  <td>
                    Geotechnical investigation for green components: Cyivugiza IDP Model Village
                  </td>
                  <td>
                    Nyaruguru District
                  </td>
                  <td>
                    Talent Contractors Ltd
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2023">
                  <td>
                    Geotechnical investigation: Karongi Lake View Hotel
                  </td>
                  <td>
                    Karongi District
                  </td>
                  <td>
                    Karongi Lake View Hotel Ltd
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2023">
                  <td>
                    Geotechnical investigation for green components: Rwufi IDP Model Village
                  </td>
                  <td>
                    Karongi District
                  </td>
                  <td>
                    Talent Contractors Ltd
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2023">
                  <td>
                    Geotechnical testing: rehabilitation and upgrading of indicative roads
                  </td>
                  <td>
                    Nyaruguru District
                  </td>
                  <td>
                    STECOL Corporation
                  </td>
                  <td>
                    2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2022">
                  <td>
                    Geotechnical investigation during construction of five valley dams/tanks: Cyamusenyeri Valley Dam, Kigarama Valley Tank, Cyamburara Valley Dam, Murundi Valley Tank and Rukore Valley Dam
                  </td>
                  <td>
                    Kayonza District
                  </td>
                  <td>
                    Ministry of Defence / Reserve Force
                  </td>
                  <td>
                    2022–2023
                  </td>
                </tr>
                <tr data-type="Geotechnical investigation" data-year="2022">
                  <td>
                    Geotechnical investigation for feasibility study: removal, transport and installation of floodlights from Amahoro Stadium to Gahanga Cricket Stadium
                  </td>
                  <td>
                    Kigali
                  </td>
                  <td>
                    Aimma-Hi-Electritech Ltd
                  </td>
                  <td>
                    2022
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav className="pager" id="reg-pager" aria-label="Project register pages" hidden></nav>
        </section>
        <section className="block" id="gallery">
          <h2>
            Project gallery
          </h2>
          <div className="filters" role="group" aria-label="Filter photos">
            <button className="gchip" type="button" data-gfilter="all" aria-pressed="true">
              All
            </button>
            <button className="gchip" type="button" data-gfilter="field" aria-pressed="false">
              Fieldwork
            </button>
            <button className="gchip" type="button" data-gfilter="lab" aria-pressed="false">
              Laboratory
            </button>
          </div>
          <ul className="gallery">
            <li className="tall" data-gcat="field">
              <button className="g-item" type="button" aria-label="Open photo: Field team working in a trial pit">
                <img src="/assets/field-test-pit.jpg" width="780" height="1040" alt="Field team working in a trial pit" loading="lazy" />
                <span className="g-cap">
                  Field team working in a trial pit
                </span>
              </button>
            </li>
            <li className="wide" data-gcat="field">
              <button className="g-item" type="button" aria-label="Open photo: A drilling rig on a cleared building site">
                <img src="/assets/hero-2-drill-rig.jpg" width="990" height="742" alt="A drilling rig on a cleared building site" loading="lazy" />
                <span className="g-cap">
                  A drilling rig on a cleared building site
                </span>
              </button>
            </li>
            <li className="wide" data-gcat="lab">
              <button className="g-item" type="button" aria-label="Open photo: Testing machines in the Gihara laboratory">
                <img src="/assets/lab-interior.jpg" width="1200" height="900" alt="Testing machines in the Gihara laboratory" loading="lazy" />
                <span className="g-cap">
                  Testing machines in the Gihara laboratory
                </span>
              </button>
            </li>
            <li className="tall" data-gcat="field">
              <button className="g-item" type="button" aria-label="Open photo: A concrete drain along a cut slope">
                <img src="/assets/field-slope-drain.jpg" width="504" height="1120" alt="A concrete drain along a cut slope" loading="lazy" />
                <span className="g-cap">
                  A concrete drain along a cut slope
                </span>
              </button>
            </li>
            <li className="" data-gcat="field">
              <button className="g-item" type="button" aria-label="Open photo: Drilling inside a building shell">
                <img src="/assets/field-drilling-warehouse.jpg" width="1020" height="768" alt="Drilling inside a building shell" loading="lazy" />
                <span className="g-cap">
                  Drilling inside a building shell
                </span>
              </button>
            </li>
            <li className="" data-gcat="lab">
              <button className="g-item" type="button" aria-label="Open photo: Sieves and sample trays on laboratory benches">
                <img src="/assets/lab-2-sieves.jpg" width="800" height="600" alt="Sieves and sample trays on laboratory benches" loading="lazy" />
                <span className="g-cap">
                  Sieves and sample trays on laboratory benches
                </span>
              </button>
            </li>
            <li className="wide" data-gcat="field">
              <button className="g-item" type="button" aria-label="Open photo: Fieldwork beside a school building">
                <img src="/assets/field-school-site.jpg" width="1200" height="540" alt="Fieldwork beside a school building" loading="lazy" />
                <span className="g-cap">
                  Fieldwork beside a school building
                </span>
              </button>
            </li>
            <li className="tall" data-gcat="field">
              <button className="g-item" type="button" aria-label="Open photo: Field testing with a probe rod">
                <img src="/assets/field-dcp-test.jpg" width="486" height="1080" alt="Field testing with a probe rod" loading="lazy" />
                <span className="g-cap">
                  Field testing with a probe rod
                </span>
              </button>
            </li>
            <li className="" data-gcat="field">
              <button className="g-item" type="button" aria-label="Open photo: A test pit dug through a floor inside a building">
                <img src="/assets/hero-1-test-pit.jpg" width="990" height="742" alt="A test pit dug through a floor inside a building" loading="lazy" />
                <span className="g-cap">
                  A test pit dug through a floor inside a building
                </span>
              </button>
            </li>
            <li className="tall" data-gcat="field">
              <button className="g-item" type="button" aria-label="Open photo: Sampling and weighing beside a roadside drain">
                <img src="/assets/field-sample-prep.jpg" width="778" height="1037" alt="Sampling and weighing beside a roadside drain" loading="lazy" />
                <span className="g-cap">
                  Sampling and weighing beside a roadside drain
                </span>
              </button>
            </li>
            <li className="" data-gcat="field">
              <button className="g-item" type="button" aria-label="Open photo: Testing the exterior wall of a building">
                <img src="/assets/hero-3-wall.jpg" width="990" height="794" alt="Testing the exterior wall of a building" loading="lazy" />
                <span className="g-cap">
                  Testing the exterior wall of a building
                </span>
              </button>
            </li>
            <li className="" data-gcat="field">
              <button className="g-item" type="button" aria-label="Open photo: Checking a ceiling beam with a handheld device">
                <img src="/assets/hero-4-ceiling.jpg" width="990" height="742" alt="Checking a ceiling beam with a handheld device" loading="lazy" />
                <span className="g-cap">
                  Checking a ceiling beam with a handheld device
                </span>
              </button>
            </li>
            <li className="" data-gcat="lab">
              <button className="g-item" type="button" aria-label="Open photo: The reporting office">
                <img src="/assets/hero-5-office.jpg" width="990" height="742" alt="The reporting office" loading="lazy" />
                <span className="g-cap">
                  The reporting office
                </span>
              </button>
            </li>
          </ul>
          <dialog className="lightbox" id="lightbox" aria-label="Photo viewer">
            <figure>
              <img id="lb-img" alt="" />
              <figcaption id="lb-cap"></figcaption>
            </figure>
            <div className="lb-bar">
              <button className="slider-btn" id="lb-prev" type="button" aria-label="Previous photo">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
                  <path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span id="lb-count" aria-live="polite"></span>
              <button className="slider-btn" id="lb-next" type="button" aria-label="Next photo">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
                  <path d="m9 4 8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="btn btn-quiet" id="lb-close" type="button">
                Close
              </button>
            </div>
          </dialog>
        </section>
      </div>
      <section className="section cta" id="tell-us">
        <div className="wrap">
          <div className="cta-inner">
            <div className="cta-copy">
              <h2>
                Ready for your geotechnical assessment?
              </h2>
              <p>
                Tell us about your site and the type of work. We reply with questions and what we need to prepare a quote.
              </p>
              <p className="contact">
                <span>
                  +250 788 354 909
                </span>
                <span>
                  +250 785 468 208
                </span>
                <span>
                  info@geotesta.rw
                </span>
              </p>
              <p className="actions">
                <a href="https://wa.me/250788354909" className="btn btn-quiet" target="_blank" rel="noopener">
                  Chat on WhatsApp
                </a>
                <Link href="/contact#how-we-work" className="quiet">
                  See how we work with you
                </Link>
              </p>
            </div>
            <div className="cta-form">
              <form id="quote-form" className="quote-form" noValidate>
                <div className="field">
                  <label htmlFor="q-name">
                    Name
                  </label>
                  <input id="q-name" name="name" autoComplete="name" data-label="Name" data-msg="Enter your name." />
                  <p className="error" id="q-name-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-contact">
                    Phone or email
                  </label>
                  <input id="q-contact" name="contact" autoComplete="email" data-label="Phone or email" data-msg="Enter a phone number or email so we can reply." />
                  <p className="error" id="q-contact-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-location">
                    Project location
                  </label>
                  <input id="q-location" name="location" data-label="Project location" data-msg="Enter the project location." />
                  <p className="error" id="q-location-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-type">
                    Type of work
                  </label>
                  <select id="q-type" name="type" data-label="Type of work" data-msg={"Choose the type of work, or \"Not sure yet\"."}>
                    <option value="">
                      Select the type of work
                    </option>
                    <option>
                      Site investigation
                    </option>
                    <option>
                      Laboratory testing
                    </option>
                    <option>
                      Foundation and concrete testing
                    </option>
                    <option>
                      Slope stability and retaining walls
                    </option>
                    <option>
                      Pavement design
                    </option>
                    <option>
                      Structural audit
                    </option>
                    <option>
                      Mining geotechnics
                    </option>
                    <option>
                      Environmental impact assessment
                    </option>
                    <option>
                      Not sure yet
                    </option>
                  </select>
                  <p className="error" id="q-type-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-notes">
                    {"Anything else we should know "}
                    <span className="opt">
                      (optional)
                    </span>
                  </label>
                  <textarea id="q-notes" name="notes" data-label="Anything else" data-optional=""></textarea>
                </div>
                <div className="actions">
                  <button className="btn" type="submit">
                    Send request
                  </button>
                </div>
              </form>
              <div className="done" role="status" tabIndex="-1" hidden>
                <h3>
                  Thank you, your request has been sent
                </h3>
                <p>
                  We will reply to the phone number or email you gave. You can also message us on WhatsApp, +250 788 354 909.
                </p>
                <pre className="quote-msg"></pre>
                <div className="actions">
                  <a href="https://wa.me/250788354909" className="btn quote-wa" target="_blank" rel="noopener">
                    Message us on WhatsApp too
                  </a>
                  <button className="btn btn-quiet quote-edit" type="button">
                    Send another request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
