// import React from 'react'

import ElectionCard from "../../../components/static/ElectionCard";
import lucky from "../../../assets/images/lucky2.jpg";
import ajayi from "../../../assets/images/ajayi.jpg";
import ayo from "../../../assets/images/ayodele.jpg";
import edema from "../../../assets/images/edema.jpg";

const AboutCand = () => {
  return (
    <div className="w-full min-h-[40vh] flex items-cente justify-center py-[40px] overflow-hidden bg-white">
      <div className="w-[90%] flex flex-col justify-cente items-center">
        <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold text-center ">ABOUT CANDIDATES</h1>

        <div className="w-full flex flex-col md:flex-row flex-wrap items-center md:items-start md:justify-between mt-[20px]">
          <ElectionCard 
              image={lucky}
              name="LUCKY AIYEDATIWA (APC)"
              brief="Aiyedatiwa was born on 12 January 1965, he hails from Obe-Nla, an oil-bearing community in Ilaje Local Government Area of Ondo State. He had his secondary education at Ikosi High School, Ketu, Lagos, in 1982. In 1986, he obtained Nigeria Certificate in Education (NCE) in Economics and Government from Lagos State College of Education (now Adeniran Ogunsanya College of Education), Ijanikin, Lagos, he later attended University of Ibadan for Advanced Diploma in Business Administration in the year 2001. He became an alumnus of Lagos Business School – Pan Atlantic University, Lekki, Lagos where he obtained Post Graduate Certification in Chief Executive Education (CEP) in Business Management in 2009. In 2013, he obtained a Master's Degree in Business Administration (MBA) from University of Liverpool, United Kingdom."
          />

          <hr className="border-gray-400 border-[1px] w-[100%] mt-[10px] mb-[10px] md:hidden" />

          <ElectionCard 
              image={ajayi}
              name="AGBOOLA AJAYI (PDP)"
              brief="Ajayi was born on 24 September 1968 to Chief Newton Ajayi and Mrs Rebecca Ogunjinte (née Olubusade). He hails from Kiribo Town of Western Apoi tribe in the Ese Odo 'Local Government Area' (LGA) of Ondo State. He attended Community High School in Kiribo Town and later moved to Methodist High School in Okitipupa LGA. He then went on to study Law degree at Igbinedion University, Okada in Edo State and graduated with Bachelor of Law (LL.B) at 2nd Class Upper division; and subsequently received his Call to the bar in 2010 after graduating from the Nigerian Law School in Abuja."
          />

          <hr className="border-gray-400 border-[1px] w-[100%] mt-[10px] mb-[10px] md:hidden" />

          <ElectionCard  
              image={ayo}
              name="AYODELE FESTUS OLORUNFEMI (LP)"
              brief="A unionist, Dr Ayodele Festus Olorunfemi emerged emerged the governorship candidate of the Labour Party (LP) in Ondo State on April 26, 2024. He was formerly General Secretary of the Senior Staff Association of Statutory Corporations and Government Owned Companies (SSASCGOC), an affiliate of the Trade Union Congress of Nigeria (TUC). He hails from Uro Ajowa and studied at Prowess University, USA."
          />

          <hr className="border-gray-400 border-[1px] w-[100%] mt-[10px] mb-[10px] md:hidden" />

          <ElectionCard 
              image={edema}
              name="OLUGBENGA OMOGBEMI EDEMA (NNPP)"
              brief="He is an astute politician, lawyer, mentor, philanthropist and leader, was born in Ogogoro, Ilaje Local Government Area of Ondo State, on November 15, 1966. He began his elementary education at L.A. Primary School, Ogogoro, Ilaje Local Government Area, from 1972-1976 and completed it at Urban Community School, Abakaliki, Ebonyi State, in 1977. He started his secondary education at Erinje Grammar School, Ode-Erinje, between 1977 and 1978 and later proceeded to Doherty Memorial Grammar School, Ijero-Ekiti, from 1978-1982. After a successful completion of his secondary education, he attended the University of Ibadan Extra-Mural classes, Ibadan, Oyo State, between 1983 and 1984 where he obtained his A/Level Certificate. The thirst for more education took him to the prestigious Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria, from 1985-1990 where he obtained a Bachelor of Science Degree in Geography."
          />

          <hr className="border-gray-400 border-[1px] w-[100%] mt-[10px] mb-[10px] md:hidden" />
        </div>
      </div>
    </div>
  )
}

export default AboutCand