import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is the Gas Turbine?',
      answer:
        'A gas turbine is a type of internal combustion engine that converts the energy from the combustion of fuel into mechanical energy to produce power. It operates on the principle of the Brayton cycle, which involves compressing air, mixing it with fuel, combusting the mixture, and then expanding the high-temperature and high-pressure gases through a turbine to generate power.',
    },
    {
      question: 'Whats is Gas Generator?',
      answer:
        'The gas generator is the primary component of a gas turbine engine and is responsible for generating the high-temperature, high-pressure gases required to drive the turbine and produce power.',
    },
    {
      question: 'Do you know SCADA system?',
      answer:
        'SCADA, which stands for Supervisory Control and Data Acquisition, is a system used for monitoring and controlling industrial processes and infrastructure. It consists of hardware and software components that work together to collect real-time data, provide visualization of the process, and allow operators to remotely control and manage the system.',
    },
  ],
  [
    {
      question: 'How many gas tubine compressors operate in WKC1 station',
      answer:
        'Overall WKC1 station has 5 compressors, three of them from GE and two of them from Solar Turbines company.',
    },
    {
      question: 'Describe about Gas generator in UCS1 Station',
      answer:
        'UCS1 uses Caterpillar Gas generators and Caterpillar is a well-known manufacturer of gas generators, among other industrial equipment. Caterpillar gas generators are designed to provide reliable and efficient power generation in a wide range of applications, including industrial, commercial, and residential settings.',
    },
    {
      question: 'Main responsibility of UKMS station?',
      answer:
        'The responsibilities of a UKMS metering station is responsible for the accurate measurement and monitoring of natural gas flow through a pipeline or distribution system.',
    },
  ],
  [
    {
      question: 'Describe about EAM System?',
      answer:
        'EAM stands for Enterprise Asset Management, which refers to the practices, processes, and software tools used to manage an organizations physical assets throughout their lifecycle. An EAM system provides a comprehensive solution for asset tracking, maintenance, scheduling, and optimization.',
    },
    {
      question: 'What is Portal ATG?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
