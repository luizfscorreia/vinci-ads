interface serviceSchemaProps{
    [key:string]: {
        name: string,
        description: string
    }[]
}

interface ShemaHead{
    type: "Organization" | "Person" | "Product" | "Event" | "Article" | "Review" | "Recipe" | "FAQPage" | "WebPage" | "VideoObject",
    name:string,
    logo:string,
    url:string,
    description:string
}

interface Schema{
    [key:string]: any
}

export class SchemaGenerator{
    
    schema:Schema = {}

    constructor({type, name, logo, url, description}: ShemaHead){
        this.schema = {
            "@context": "https://schema.org",
            "@type": type,
            "name": name,
            "logo": logo,
            "url": url,
            "description": description,
        }
    }

    setAddress(){
        this.schema.address = {
            "@type": "PostalAddress",
            "streetAddress": "123 Main St",
            "addressLocality": "City",
            "postalCode": "12345",
            "addressRegion": "State",
            "addressCountry": "Country"
        }
    }

    setContact(){
        this.schema.contactPoint = {
            "@type": "ContactPoint",
            "telephone": "+1-123-456-7890",
            "contactType": "customer support"
        }
    }

    setFAQ(){}

    setServices({services}: serviceSchemaProps){
        let servicesList:any = []
        services.map((service) => (
            servicesList.push({
                "@type": "Service",
                "name": service.name,
                "description": service.description
            })
        ))

        this.schema.hasOfferCatalog = {
            "@type": "OfferCatalog",
            "name": "Services",
            "itemListElement": servicesList
        }
    }
}
