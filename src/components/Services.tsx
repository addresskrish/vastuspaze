import { SERVICES_CONTENT, type servicesContent } from "../constants"

function Service() {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="services">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tighter text-center uppercase mb-20">
          Our Home Renovation Services
        </h2>
        {SERVICES_CONTENT.map((service:servicesContent, index:number) => (
          <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
            <div className={`lg:w-1/2 mb-4 lg:mb-0 ${
              index%2 === 0 ? "" : "lg:order-2"
            }`}>
              <img src={service.image} alt={service.alt} className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className={`w-1/2 flex flex-col ${
              index%2 === 0 ? "lg:pl-12" :  "lg:pr-12"
            }`}>
              <h3 className="text-xl lg:text-2xl font-medium mb-2">
                {service.title}
              </h3>
              <p className="mb-4 lg:tracking-tighter text-lg lg:text-xl lg:leading-9">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service