/*
  subjects-data.js
  ─────────────────────────────────────────────────────────────────────────────
  HOW TO USE:
  1. Find the subject you want to update (search by name or code).
  2. In its "units" array, replace the empty link: "" with your Google Drive
     "Anyone with the link" share URL.
  3. Same for pyqs — replace link: "" with the solved PYQ PDF link.
  4. Save → refresh → done. No other file needs to change.

  SUBJECT ICON CODES (emoji used as icons — change freely):
  📐 Maths  ⚛️ Physics  🧪 Chemistry  💻 CS/Code  ⚡ Electronics
  ⚙️ Mechanical  🌿 Environment  🌳 DS/Algorithms  🔒 Security
  🖥️ Systems/OS  🤖 AI/ML  🗄️ DB  🌐 Networks  ☁️ Cloud
  📱 Mobile  🗣️ NLP  ⚖️ Ethics  📜 Law  🛠️ SE  🔧 Compiler
  📊 Big Data  🕸️ Web  📋 Project
  ─────────────────────────────────────────────────────────────────────────────
*/

const AKTU_SUBJECTS = {
  "SEM-1": {
    label: "Semester 1",
    subjects: [
      {
        code: "BAS-103",
        name: "Engineering Mathematics - I",
        short: "Maths I",
        icon: "📐",
        units: [
          { no: 1, title: "Matrices", link: "https://drive.google.com/file/d/1hycP-C6htbwsA9y_ZrwIADC8FppXtA9_/view?usp=drivesdk" },
          { no: 2, title: "Differential Calculus-I", link: "https://drive.google.com/file/d/1WWJ-YpRooFvouwfQ7ucvC1X5HhKjf7uY/view?usp=drivesdk" },
          { no: 3, title: "Differential Calculus-II", link: "https://drive.google.com/file/d/1k62sxjF1jcuRLQUUmOFZwsZGvtxdLvwP/view?usp=drivesdk" },
          { no: 4, title: "Multiple Integration", link: "https://drive.google.com/file/d/1eSKs1wLNDPCkEctpq7nFFHDrkGtmKatj/view?usp=drivesdk" },
          { no: 5, title: "Vector Calculus", link: "https://drive.google.com/file/d/14HNE9y4pBQnvMeiKTVB0BKqXWCgMvyFG/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BAS-101",
        name: "Engineering Physics",
        short: "Engg. Physics",
        icon: "⚛️",
        units: [
          { no: 1, title: "Quantum Mechanics", link: "https://drive.google.com/file/d/1K4vW9K3Rp4FDJ7a9uK_pWMpfr0odnFmY/view?usp=drivesdk" },
          { no: 2, title: "Electromagnetic Field Theory", link: "https://drive.google.com/file/d/1Q5Gkd9X6KGmrcUOT-Q_3Ky6Xgr8nrY5_/view?usp=drivesdk" },
          { no: 3, title: "Wave Optics", link: "https://drive.google.com/file/d/1Dlbf9OqmrAz0sx_9dXOyQH6KWpYk-XUp/view?usp=drivesdk" },
          { no: 4, title: "Fibre Optics & Laser", link: "https://drive.google.com/file/d/1VG5sbzzJBt3CuhPO7kFG1FcMvtO337vJ/view?usp=drivesdk" },
          { no: 5, title: "Superconductors & Nano-Materials", link: "https://drive.google.com/file/d/1KkThkpYmr1LYp7bBydJl6sAxoXFQZOBO/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-101",
        name: "Programming for Problem Solving",
        short: "PPS (C)",
        icon: "💻",
        units: [
          { no: 1, title: "Introduction to Components of a Computer System,Idea of Algorithm, Programming Basics", link: "https://drive.google.com/file/d/1IGYt7PvKDbAv2-R7szwJSSQslMu6D_-l/view?usp=drivesdk" },
          { no: 2, title: "Arithmetic Expressions and Precedence, Conditional Branching", link: "https://drive.google.com/file/d/1b9NL7SHmPGAIdFRxS7lzTHEOviJ4OZUZ/view?usp=drivesdk" },
          { no: 3, title: "Iterations & Loops, Arrays", link: "https://drive.google.com/file/d/1_9tCfdjrWXm6KU4yN21Yjo7sGxLLTSHG/view?usp=drivesdk" },
          { no: 4, title: "Functions, Basics of searching & sorting Algorithms", link: "https://drive.google.com/file/d/1EvGGUzz_e7VgIiv851QqzxPJz-hO8-BK/view?usp=drivesdk" },
          { no: 5, title: "Pointers & File Handling", link: "https://drive.google.com/file/d/1NlsO8RHcjMXRi_-_In-nz8rjOJNCokl2/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BEE-101",
        name: "Basic Electrical Engineering",
        short: "BEE",
        icon: "⚡",
        units: [
          { no: 1, title: "DC Circuits", link: "https://drive.google.com/file/d/1CPiPLw3r9ZvpRIdA5efrf0STBoQ0JvRU/view?usp=drivesdk" },
          { no: 2, title: "Steady State Analysis of Single-Phase AC Circuits", link: "https://drive.google.com/file/d/11_Vg7Gn8oGb10dfrX8emw2RPkuqSXRsz/view?usp=drivesdk" },
          { no: 3, title: "Transformers", link: "https://drive.google.com/file/d/1_UIjZPvDhubKWR9KqsHfaYcIJHxRwXLF/view?usp=drivesdk" },
          { no: 4, title: "Electrical Machines", link: "https://drive.google.com/file/d/1w4CaM4IhNY6PYmnjw-Q-u-SWwNwLTu4c/view?usp=drivesdk" },
          { no: 5, title: "Electrical Installations", link: "https://drive.google.com/file/d/1i3CS-02SfFNNQ_Bu4bfNS8P_T3BjIzRf/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "Numerical Practice (Solved)", link: "https://drive.google.com/file/d/1OTgHnqkXuQGim1s9ytjw8Pykd_Z4-GOA/view?usp=drivesdk" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BAS-104",
        name: "Environment and Ecology",
        short: "EVS",
        icon: "🌿",
        units: [
          { no: 1, title: "Environment & Ecosystem", link: "https://drive.google.com/file/d/1tlCmfg7ScD5jQY7JAClfIjQ-XuMBEI0l/view?usp=drivesdk" },
          { no: 2, title: "Natural Resources; Water, Mineral, Energy, Forest Resources", link: "https://drive.google.com/file/d/1zpQY5M--mlghfr7ucdEufCUSal5wKUCR/view?usp=drivesdk" },
          { no: 3, title: "Pollution and their Effects; Public Health Aspects of Environmental", link: "https://drive.google.com/file/d/1DrL45Gmggz0U_1hK1iOc2Z5eKSAqcijW/view?usp=drivesdk" },
          { no: 4, title: "Current Environmental Issues of Importance", link: "https://drive.google.com/file/d/1pLFxL9wSAUoWq_3aav-K9oXW_LhwuJoF/view?usp=drivesdk" },
          { no: 5, title: "Environmental Protection", link: "https://drive.google.com/file/d/1HvWlwRvdp1nDo-xkyihkXhQd5ZrIJgII/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
    ],
  },

  "SEM-2": {
    label: "Semester 2",
    subjects: [
      {
        code: "BAS-203",
        name: "Engineering Mathematics - II",
        short: "Maths II",
        icon: "📐",
        units: [
          { no: 1, title: "Ordinary Differential Equation of Higher Order", link: "https://drive.google.com/file/d/1SRf08CkdlcFMLboA7vfcs1YM5V6HPvVf/view?usp=drivesdk" },
          { no: 2, title: "Laplace Transform", link: "https://drive.google.com/file/d/19RqblWHNjyoQX13MSQD2r0oejAoKc0r0/view?usp=drivesdk" },
          { no: 3, title: "Sequence and Series", link: "https://drive.google.com/file/d/1yZpfou8V2m0JQYYJRV-m9kryde8R9zpm/view?usp=drivesdk" },
          { no: 4, title: "Complex Variable-Differentiation", link: "https://drive.google.com/file/d/1yh4WFibbAiGq3aywKJMTus8DyEnZjmIA/view?usp=drivesdk" },
          { no: 5, title: "Complex Variable-Integration", link: "https://drive.google.com/file/d/1ViYSXYZf0vUasXnLwz3UGoBqtdxvgMIR/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BAS-202",
        name: "Engineering Chemistry",
        short: "Engg. Chemistry",
        icon: "🧪",
        units: [
          { no: 1, title: "Atomic & Molecular Structure, Chemistry of Advance Materials", link: "https://drive.google.com/file/d/1s9O5eBhQwUdmYSlyL6KWRGcoNaadTAG7/view?usp=drivesdk" },
          { no: 2, title: "Spectroscopic Techniques & Stereochemistry", link: "https://drive.google.com/file/d/1Nx1XB0Z_Izka0fcddEhgmATw0jf65OJh/view?usp=drivesdk" },
          { no: 3, title: "Electrochemistry & Batteries, Corrosion, Cement", link: "https://drive.google.com/file/d/1K1DHFUwh3Y_hyz09fU1Opvk7qp6XSbtK/view?usp=drivesdk" },
          { no: 4, title: "Water Technology, Fuels & combustion", link: "https://drive.google.com/file/d/1RxFssDaSGo9nQZhaUm5ygob3j3tFvhpH/view?usp=drivesdk" },
          { no: 5, title: "Fuel Cells, Corrosion & Nanomaterials", link: "https://drive.google.com/file/d/1bd8V2w92nPnCVXIoYMacYORHifVwp7w9/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BEC-201",
        name: "Fundamentals of Electronics Engineering",
        short: "FEE",
        icon: "📡",
        units: [
          { no: 1, title: "Semiconductor Diodes & Applications,Special Purpose two terminal Devices", link: "https://drive.google.com/file/d/1OBIMEnjGcvp8gtWeXuCTZeRO_KkopHQt/view?usp=drivesdk" },
          { no: 2, title: "Bipolar Junction Transistors, Field Effect Transistor", link: "https://drive.google.com/file/d/1JW_U0tpZWJhbdGq8-9KckhE9wDqAflc3/view?usp=drivesdk" },
          { no: 3, title: "Operational Amplifiers", link: "https://drive.google.com/file/d/1HlBy8-CQNePRyZ-Zrtmk2_v_Lwr93Je4/view?usp=drivesdk" },
          { no: 4, title: "Digital Electronics", link: "https://drive.google.com/file/d/1P4y_pI5upnJG40A5w2ypTwZVeDvq6vkN/view?usp=drivesdk" },
          { no: 5, title: "Fundamental of Communication Engg., Introduction to Wireless Communication", link: "https://drive.google.com/file/d/1aG2_XcMhuJ0VTAaK-seenMZu5xeTbu5K/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BME-201",
        name: "Fundamentals of Mechanical Engineering",
        short: "FME",
        icon: "⚙️",
        units: [
          { no: 1, title: "Introduction to Mechanics", link: "https://drive.google.com/file/d/19BTuYIlsGp6DVJs40BVpFwQUHyKWYwts/view?usp=drivesdk" },
          { no: 2, title: "Introductions to IC Engines & Electric Vehicles", link: "https://drive.google.com/file/d/11iiiPqTxJa_TjuVqVV9GhbtITkRyPnW4/view?usp=drivesdk" },
          { no: 3, title: "Introduction to Refrigeration & Air-Conditioning", link: "https://drive.google.com/file/d/1FOrxlwpJd_nkh3LwM-TTetmTe39QQkQu/view?usp=drivesdk" },
          { no: 4, title: "Introduction to Fluid Mechanics & Applications", link: "https://drive.google.com/file/d/1DBPCuLVYizWXp3Pdv61AJzPhhae3qk9w/view?usp=drivesdk" },
          { no: 5, title: "Introduction to Measurement & Mechatronics", link: "https://drive.google.com/file/d/1UMFSN9CdKQzw5eDppP3Qmsc82ax9tDZU/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BAS-205",
        name: "Soft Skills",
        short: "Soft Skills",
        icon: "🗣️",
        units: [
          { no: 1, title: "Applied Grammar and Usage", link: "" },
          { no: 2, title: "Listening and Speaking Skills", link: "" },
          { no: 3, title: "Reading and Writing Skills", link: "" },
          { no: 4, title: "Presentation and Interaction Skills", link: "" },
          { no: 5, title: "Work-Place Skills", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
    ],
  },

  "SEM-3": {
    label: "Semester 3",
    subjects: [
      {
        code: "BCS-303",
        name: "Discrete Structure & Theory of Logic",
        short: "DSTL",
        icon: "🔣",
        units: [
          { no: 1, title: "Set Theory, Relations; POSET & Lattices", link: "https://drive.google.com/file/d/1pyF5-Ji7UmmHd2rGWvn7xLdRy8qJGmxA/view?usp=drivesdk" },
          { no: 2, title: "Functions ; Boolean Algebra", link: "https://drive.google.com/file/d/1ljHC9YPNC_UiuWmzrkrYz2a18fKoaL7h/view?usp=drivesdk" },
          { no: 3, title: "Theory of Logics", link: "https://drive.google.com/file/d/1iJq_HvTe9i3ocswOv1GnGzu8hNbyYVAa/view?usp=drivesdk" },
          { no: 4, title: "Algebraic Structures", link: "https://drive.google.com/file/d/1kfDiNXlSvXtnPKVrq10393cMYk7KLxUR/view?usp=drivesdk" },
          { no: 5, title: "Graphs", link: "https://drive.google.com/file/d/1dfdBYTv1PzYLhn55Yg8OWlPp36eoJE-t/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-301",
        name: "Data Structures",
        short: "DS",
        icon: "🌳",
        units: [
          { no: 1, title: "Introduction, Arrays & Linked Lists", link: "https://drive.google.com/file/d/1Ai2z40lEynkqyh7Cn_Ya_KIYTjkOrGcG/view?usp=drivesdk" },
          { no: 2, title: "Stacks & Queues", link: "https://drive.google.com/file/d/16lkdPGIX7HdKMteYpFdvo4z5bQRQMxkz/view?usp=drivesdk" },
          { no: 3, title: "Searching", link: "https://drive.google.com/file/d/11cLCqrQmEsrB6qCLCcgo-f5ILYrd8WQq/view?usp=drivesdk" },
          { no: 4, title: "Trees", link: "https://drive.google.com/file/d/1tGbqL7ClTsb2t3xxff2qhiOnkWltO5yk/view?usp=drivesdk" },
          { no: 5, title: "Graphs", link: "https://drive.google.com/file/d/189txX8sYZvDW0eJ7hJ-Eu0AWzslG6ITp/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-302",
        name: "Computer Organization & Architecture",
        short: "COA",
        icon: "🖥️",
        units: [
          { no: 1, title: "Introduction", link: "https://drive.google.com/file/d/1sRuKF7HLAqshqO7o_uJNO3WMGOaXcp8d/view?usp=drivesdk" },
          { no: 2, title: "Arithmetic and logic unit", link: "https://drive.google.com/file/d/1RL1uxMxtLM8TvNq4qzgvBIq6grsy5Vwj/view?usp=drivesdk" },
          { no: 3, title: "Control Unit", link: "https://drive.google.com/file/d/1rp3Y-WEd3FdSf_pBASBslkUDwXTIBJ3v/view?usp=drivesdk" },
          { no: 4, title: "Memory", link: "https://drive.google.com/file/d/1FbqIB_Tt1RW-vlFH7KUCx4sCDUG5w9Na/view?usp=drivesdk" },
          { no: 5, title: "Input / Output", link: "https://drive.google.com/file/d/1Hrlbktf-PS3UN2I_71s7RJ7YtooR4Cye/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCC-301",
        name: "Cyber Security",
        short: "Cyber Security",
        icon: "🔒",
        units: [
          { no: 1, title: "Introduction to Cyber Crime", link: "" },
          { no: 2, title: "Cyber Crime", link: "" },
          { no: 3, title: "Tools and Methods used in Cyber Crime", link: "" },
          { no: 4, title: "Understanding of computer Forensics", link: "" },
          { no: 5, title: "Introduction to Security Policies and Cyber Laws", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BAS-301",
        name: "Technical Communication",
        short: "Tech. Comm.",
        icon: "✍️",
        units: [
          { no: 1, title: "Fundamentals of Communication and voice dynamics", link: "https://drive.google.com/file/d/1PLdr00HBK4drqt1YYQpMwdq_NF320SKZ/view?usp=drivesdk" },
          { no: 2, title: "Communication skills for career building", link: "https://drive.google.com/file/d/1Y9Tcf3nIHaWwMRgTCsJEYHGtaboXIbDe/view?usp=drivesdk" },
          { no: 3, title: "Communication skills for Presentations:writing,designing & speaking", link: "https://drive.google.com/file/d/1TzBPb6v44G0xYweLK-1h-GtHqenqotgM/view?usp=drivesdk" },
          { no: 4, title: "Communication & leadership development", link: "https://drive.google.com/file/d/1JNxaWlCu-3CkreNNFHjOObSsO2321dZr/view?usp=drivesdk" },
          { no: 5, title: "Digital communication & Personality making", link: "https://drive.google.com/file/d/1QJkRP_66yu8Fegcf4_z1sPuqK5dUdlLE/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BOE-303",
        name: "Material Science",
        short: "Material Sci.",
        icon: "🔬",
        units: [
          { no: 1, title: "Phase Diagrams", link: "https://drive.google.com/file/d/1gWufxCb7EKLW4M_z2oS8Qd7wlu7jiSOD/view?usp=drivesdk" },
          { no: 2, title: "Ferrous Alloys", link: "https://drive.google.com/file/d/1oRIxkO6XXrfRYzhRuOffkQwpk74ywKRy/view?usp=drivesdk" },
          { no: 3, title: "Mechanical Properties", link: "https://drive.google.com/file/d/1NXmrd7Pi9XroL-gfgsobqY0PTGafbIqx/view?usp=drivesdk" },
          { no: 4, title: "Magnetic, Dielectric & SuperconductingvMaterials", link: "https://drive.google.com/file/d/1obqA5qQJa5kVyQSJcuAJvyuPv0tceTJF/view?usp=drivesdk" },
          { no: 5, title: "New Materials", link: "https://drive.google.com/file/d/1chXpAyVqTOziz2y2vokfkSdaXxvq2I04/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
    ],
  },

  "SEM-4": {
    label: "Semester 4",
    subjects: [
      {
        code: "BAS-403",
        name: "Engineering Mathematics - IV",
        short: "Maths IV",
        icon: "📐",
        units: [
          { no: 1, title: "Partial Differential Equations", link: "https://drive.google.com/file/d/1_gvQhewwlXJsm2yfddiozFFv_Pqcf6Xr/view?usp=drivesdk" },
          { no: 2, title: "Applications of Partial Differential Equations and Forier Transform", link: "https://drive.google.com/file/d/1Dz8UXSz1hY5Ktf4kvyl1JYfL8-ZUtvE1/view?usp=drivesdk" },
          { no: 3, title: "Statistical Techniques-I", link: "https://drive.google.com/file/d/1_o_zFdQODpj35k2WcoKMPhFR0saIX86s/view?usp=drivesdk" },
          { no: 4, title: "Statistical Techniques-II", link: "https://drive.google.com/file/d/1aTi9YekkkloeHknGpsfMG7azNeyV7BdW/view?usp=drivesdk" },
          { no: 5, title: "Statistical Techniques-III", link: "https://drive.google.com/file/d/1IjGOOrjdfJIb2eBe62f2Q_d58HA7_op3/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-401",
        name: "Operating Systems",
        short: "OS",
        icon: "🖥️",
        units: [
          { no: 1, title: "Introduction", link: "https://drive.google.com/file/d/1CGX1yFG4QDLrO8ZSGgtxIv0gcY5WFKl_/view?usp=drivesdk" },
          { no: 2, title: "Concurrent Processes", link: "https://drive.google.com/file/d/13xSM6SaBRI6sRs_qQ4A7QW28pqTQtI2Q/view?usp=drivesdk" },
          { no: 3, title: "CPU Scheduling", link: "https://drive.google.com/file/d/1LbwpSPFeFHcvg2HHHoFm-zdN2tEoAw12/view?usp=drivesdk" },
          { no: 4, title: "Memory Management", link: "https://drive.google.com/file/d/1WrSip1oKJsT3FiJ8PXZa_Ur54lg1zDiZ/view?usp=drivesdk" },
          { no: 5, title: "I/O Management and Disk Sheduling", link: "https://drive.google.com/file/d/1wOAqfFtxRHrlY4xI0BNmWF1V_mwDKRe5/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-402",
        name: "Theory of Automata & Formal Languages",
        short: "TAFL",
        icon: "🤖",
        units: [
          { no: 1, title: "Basic Concepts and Automata Theory", link: "https://drive.google.com/file/d/1EUSUlyiHaEa8VX5TFQs50nghD4euKm96/view?usp=drivesdk" },
          { no: 2, title: "Regular Expressions & Languages", link: "https://drive.google.com/file/d/1OPaE1epuUXIM8kKE6Ve9PcQejz4w0OJK/view?usp=drivesdk" },
          { no: 3, title: "Regular and Non-Regular Grammars", link: "https://drive.google.com/file/d/1Csn6cdLWNo7LMgjl05ciibFp048z6CLh/view?usp=drivesdk" },
          { no: 4, title: "Push down Automata and Properties of Context Free Languages", link: "https://drive.google.com/file/d/1ws6yNxMC6QHfvDNX8J6PgCadbj-RBnh9/view?usp=drivesdk" },
          { no: 5, title: "Turing Machines and Recursive Function Theory", link: "https://drive.google.com/file/d/1d7LKGkQwdKqTO-ocCx87yOXjT7scYfMo/view?usp=drivesdk" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-452",
        name: "Object Oriented Programming with Java",
        short: "Java / OOP",
        icon: "☕",
        units: [
          { no: 1, title: "Introduction, Programming Structure in Java; OOPS & Packages", link: "https://drive.google.com/file/d/1tl2wsXu4LxVtJSoy_x-OcA027QQ0LZNq/view?usp=drivesdk" },
          { no: 2, title: "Exception Handling , Multithreading & I/O Basics", link: "https://drive.google.com/file/d/1q37KUtKKWoDj0dyZ3MQTYaqaLs2FovoW/view?usp=drivesdk" },
          { no: 3, title: "Java New Features", link: "https://drive.google.com/file/d/1bdabAiePOt-bSQOnyog4U7hvnPkIKa0C/view?usp=drivesdk" },
          { no: 4, title: "Java Collections Framework", link: "https://drive.google.com/file/d/1bzFJskGtpmpYiXxMbtyqrOVVXQinjB8T/view?usp=drivesdk" },
          { no: 5, title: "Spring Framework & Spring Boot", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCC-402",
        name: "Python Programming",
        short: "Python",
        icon: "🐍",
        units: [
          { no: 1, title: "Introduction & Basics", link: "" },
          { no: 2, title: "Conditionals & Loops", link: "" },
          { no: 3, title: "Function, Strings, Python Data Structure & Higher Order Functions", link: "" },
          { no: 4, title: "File I/O, Modules, Abstract Data Type & Classes", link: "" },
          { no: 5, title: "Python Libraries (Matplotlib,Tkinter,Pandas,etc)", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BVE-401",
        name: "Human Values & Professional Ethics",
        short: "HVPE",
        icon: "⚖️",
        units: [
          { no: 1, title: "Introduction to Value Education", link: "" },
          { no: 2, title: "Understanding Harmony in the Human Being", link: "" },
          { no: 3, title: "Understanding Harmony in the Family and Society", link: "" },
          { no: 4, title: "Understanding Harmony in Nature and Existence", link: "" },
          { no: 5, title: "Holistic Understanding of Harmony on Professional Ethics", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2021-22 Solved", link: "" },
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
    ],
  },

  "SEM-5": {
    label: "Semester 5",
    subjects: [
      {
        code: "BCS-501",
        name: "Database Management Systems",
        short: "DBMS",
        icon: "🗄️",
        units: [
          { no: 1, title: "Introduction to DBMS & ER Model", link: "" },
          { no: 2, title: "Relational Model & SQL", link: "" },
          { no: 3, title: "Normalization & Functional Dependencies", link: "" },
          { no: 4, title: "Transaction Management & Concurrency", link: "" },
          { no: 5, title: "Indexing, B+ Trees & Query Optimization", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-503",
        name: "Design & Analysis of Algorithms",
        short: "DAA",
        icon: "🧮",
        units: [
          { no: 1, title: "Algorithm Analysis & Asymptotic Notations", link: "" },
          { no: 2, title: "Divide & Conquer, Greedy Algorithms", link: "" },
          { no: 3, title: "Dynamic Programming", link: "" },
          { no: 4, title: "Backtracking & Branch & Bound", link: "" },
          { no: 5, title: "NP-Completeness & Approximation Algorithms", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-502",
        name: "Web Technology",
        short: "Web Tech",
        icon: "🕸️",
        units: [
          { no: 1, title: "HTML5, CSS3 & Responsive Design", link: "" },
          { no: 2, title: "JavaScript & DOM Manipulation", link: "" },
          { no: 3, title: "PHP & Server-Side Scripting", link: "" },
          { no: 4, title: "XML, JSON & Web Services", link: "" },
          { no: 5, title: "Node.js & React Basics", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-504",
        name: "Object Oriented System Design with C++",
        short: "OOSD",
        icon: "💻",
        units: [
          { no: 1, title: "Introduction to Object Orientation & UML", link: "" },
          { no: 2, title: "Structural, Behavioural & Architectural Modeling", link: "" },
          { no: 3, title: "Object Oriented Analysis & Design(OOAD)", link: "" },
          { no: 4, title: "C++ Basics, Function & Control Structures", link: "" },
          { no: 5, title: "Objects, Classes, Inheritance & Polymorphism", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-505",
        name: "Machine Learning Techniques",
        short: "ML",
        icon: "🤖",
        units: [
          { no: 1, title: "Introduction to ML & Data Preprocessing", link: "" },
          { no: 2, title: "Supervised Learning — Regression & Classification", link: "" },
          { no: 3, title: "Unsupervised Learning — Clustering & PCA", link: "" },
          { no: 4, title: "Neural Networks & Deep Learning Basics", link: "" },
          { no: 5, title: "Model Evaluation & Scikit-Learn", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BNC-501",
        name: "Constitution of India",
        short: "Constitution",
        icon: "📜",
        units: [
          { no: 1, title: "Historical Background & Making of Constitution", link: "" },
          { no: 2, title: "Fundamental Rights & Duties", link: "" },
          { no: 3, title: "Directive Principles & Parliament", link: "" },
          { no: 4, title: "Judiciary & Federal Structure", link: "" },
          { no: 5, title: "Amendments, Emergency & Local Governance", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
    ],
  },

  "SEM-6": {
    label: "Semester 6",
    subjects: [
      {
        code: "BCS-601",
        name: "Software Engineering",
        short: "SE",
        icon: "🛠️",
        units: [
          { no: 1, title: "SDLC Models & Software Process", link: "" },
          { no: 2, title: "Requirements Engineering & SRS", link: "" },
          { no: 3, title: "Software Design — UML & Design Patterns", link: "" },
          { no: 4, title: "Testing Strategies & Quality Assurance", link: "" },
          { no: 5, title: "Project Management & Software Metrics", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-602",
        name: "Compiler Design",
        short: "Compiler Design",
        icon: "🔧",
        units: [
          { no: 1, title: "Introduction & Lexical Analysis", link: "" },
          { no: 2, title: "Syntax Analysis & Parsing", link: "" },
          { no: 3, title: "Semantic Analysis & Intermediate Code", link: "" },
          { no: 4, title: "Code Optimization Techniques", link: "" },
          { no: 5, title: "Code Generation & Run-Time Environments", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-603",
        name: "Computer Networks",
        short: "CN",
        icon: "🌐",
        units: [
          { no: 1, title: "Network Models, Physical & Data Link Layer", link: "" },
          { no: 2, title: "Medium Access, LAN & Error Control", link: "" },
          { no: 3, title: "Network Layer — IP, Routing Algorithms", link: "" },
          { no: 4, title: "Transport Layer — TCP/UDP", link: "" },
          { no: 5, title: "Application Layer — DNS, HTTP, SMTP", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-604",
        name: "Big Data Analytics",
        short: "Big Data",
        icon: "📊",
        units: [
          { no: 1, title: "Introduction to Big Data & Hadoop Ecosystem", link: "" },
          { no: 2, title: "HDFS, MapReduce & YARN", link: "" },
          { no: 3, title: "Apache Spark & Real-Time Processing", link: "" },
          { no: 4, title: "NoSQL Databases — MongoDB & Cassandra", link: "" },
          { no: 5, title: "Data Warehousing & Visualization", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BNC-602",
        name: "Essence of Indian Traditional Knowledge",
        short: "EITK",
        icon: "💡",
        units: [
          { no: 1, title: "Entrepreneurship & Innovation Concepts", link: "" },
          { no: 2, title: "Business Plan & Startup Ecosystem", link: "" },
          { no: 3, title: "Intellectual Property Rights", link: "" },
          { no: 4, title: "Technology Management & Commercialization", link: "" },
          { no: 5, title: "Funding, Incubation & Case Studies", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "KOE-065",
        name: "Open Elective - I",
        short: "Open Elective I",
        icon: "📚",
        units: [
          { no: 1, title: "Unit 1 — As per selected elective", link: "" },
          { no: 2, title: "Unit 2 — As per selected elective", link: "" },
          { no: 3, title: "Unit 3 — As per selected elective", link: "" },
          { no: 4, title: "Unit 4 — As per selected elective", link: "" },
          { no: 5, title: "Unit 5 — As per selected elective", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
    ],
  },

  "SEM-7": {
    label: "Semester 7",
    subjects: [
      {
        code: "BCS-701",
        name: "Cloud Computing",
        short: "Cloud Computing",
        icon: "☁️",
        units: [
          { no: 1, title: "Introduction to Cloud Computing & Models", link: "" },
          { no: 2, title: "Virtualization — KVM, Xen, VMware", link: "" },
          { no: 3, title: "AWS, Azure & GCP Core Services", link: "" },
          { no: 4, title: "Cloud Security & SLA", link: "" },
          { no: 5, title: "Docker, Kubernetes & Microservices", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-702",
        name: "Deep Learning",
        short: "Deep Learning",
        icon: "🧠",
        units: [
          { no: 1, title: "Neural Network Foundations", link: "" },
          { no: 2, title: "Convolutional Neural Networks (CNN)", link: "" },
          { no: 3, title: "Recurrent Neural Networks & LSTM", link: "" },
          { no: 4, title: "Generative Adversarial Networks (GAN)", link: "" },
          { no: 5, title: "Transfer Learning & Deployment (TensorFlow/PyTorch)", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-751",
        name: "Elective I (Sem 7)",
        short: "Elective I",
        icon: "📖",
        units: [
          { no: 1, title: "Unit 1 — As per selected elective", link: "" },
          { no: 2, title: "Unit 2 — As per selected elective", link: "" },
          { no: 3, title: "Unit 3 — As per selected elective", link: "" },
          { no: 4, title: "Unit 4 — As per selected elective", link: "" },
          { no: 5, title: "Unit 5 — As per selected elective", link: "" },
        ],
        pyqs: [],
      },
      {
        code: "BCS-752",
        name: "Elective II (Sem 7)",
        short: "Elective II",
        icon: "📖",
        units: [
          { no: 1, title: "Unit 1 — As per selected elective", link: "" },
          { no: 2, title: "Unit 2 — As per selected elective", link: "" },
          { no: 3, title: "Unit 3 — As per selected elective", link: "" },
          { no: 4, title: "Unit 4 — As per selected elective", link: "" },
          { no: 5, title: "Unit 5 — As per selected elective", link: "" },
        ],
        pyqs: [],
      },
    ],
  },

  "SEM-8": {
    label: "Semester 8",
    subjects: [
      {
        code: "BCS-801",
        name: "Mobile Computing",
        short: "Mobile Computing",
        icon: "📱",
        units: [
          { no: 1, title: "Mobile Communication & GSM/CDMA", link: "" },
          { no: 2, title: "Android Architecture & App Development", link: "" },
          { no: 3, title: "Mobile Internet & WAP", link: "" },
          { no: 4, title: "Location Based Services & GPS", link: "" },
          { no: 5, title: "Mobile Security & Payments", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-802",
        name: "Natural Language Processing",
        short: "NLP",
        icon: "🗣️",
        units: [
          { no: 1, title: "Introduction to NLP & Text Preprocessing", link: "" },
          { no: 2, title: "Language Modelling & POS Tagging", link: "" },
          { no: 3, title: "Parsing Techniques & Sentiment Analysis", link: "" },
          { no: 4, title: "Named Entity Recognition & Information Extraction", link: "" },
          { no: 5, title: "Transformers, BERT & GPT Basics", link: "" },
        ],
        pyqs: [
          { label: "PYQ 2023-24 Solved", link: "" },
          { label: "PYQ 2024-25 Solved", link: "" },
        ],
      },
      {
        code: "BCS-899",
        name: "Major Project",
        short: "Major Project",
        icon: "📋",
        units: [
          { no: 1, title: "Project Proposal & Literature Survey", link: "" },
          { no: 2, title: "System Design & Architecture", link: "" },
          { no: 3, title: "Implementation Phase 1", link: "" },
          { no: 4, title: "Implementation Phase 2 & Testing", link: "" },
          { no: 5, title: "Documentation & Viva Preparation", link: "" },
        ],
        pyqs: [],
      },
      {
        code: "BCS-851",
        name: "Elective I (Sem 8)",
        short: "Elective I",
        icon: "📖",
        units: [
          { no: 1, title: "Unit 1 — As per selected elective", link: "" },
          { no: 2, title: "Unit 2 — As per selected elective", link: "" },
          { no: 3, title: "Unit 3 — As per selected elective", link: "" },
          { no: 4, title: "Unit 4 — As per selected elective", link: "" },
          { no: 5, title: "Unit 5 — As per selected elective", link: "" },
        ],
        pyqs: [],
      },
    ],
  },
};
