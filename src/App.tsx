import Marquee from "./components/marquee"
import { AboutWithFAQ } from "./sections/About/aboutWithFaq"
import Brand01 from "./sections/Brand/model01"
import { Content01 } from "./sections/Contents/content01"
import { Hero } from "./sections/Hero"
import { Testimonials01 } from "./sections/Tesminonials/testimonials01"
import { Services } from "./sections/Works/work01"

function App() {
  
    const brands = [
        {
            name: "Google Ads",
            image: "",
            link: "google.com.br",
            linkAlt: ""
        },
        {
          name: "Google Ads",
          image: "",
          link: "google.com.br",
          linkAlt: ""
        },
        {
          name: "Google Ads",
          image: "",
          link: "google.com.br",
          linkAlt: ""
        },
        {
          name: "Google Ads",
          image: "",
          link: "google.com.br",
          linkAlt: ""
      },
      {
        name: "Google Ads",
        image: "",
        link: "google.com.br",
        linkAlt: ""
      }
    ]

    const ServicesCards = [
      {
          icon: '',
          title: 'Item 1',
          content:[
              {
                  text: 'Item',
                  link: 'adsd',
                  descripton: ''
              },
              {
                  text: 'Item',
                  link: 'adsd',
                  descripton: '',
              },
              {
                  text: 'Item',
                  link: 'adsd',
                  descripton: ''
              }
          ]
      },
      {
          icon: '',
          title: 'Item 2',
          content:[
              {
                  text: 'Item',
                  link: 'adsd'
              },
              {
                  text: 'Item',
                  link: 'adsd'
              },
              {
                  text: 'Item',
                  link: ''
              }
          ]
      },
      {
        icon: '',
        title: 'Item 1',
        content:[
            {
                text: 'Item',
                link: 'adsd'
            },
            {
                text: 'Item',
                link: 'adsd'
            },
            {
                text: 'Item',
                link: 'adsd'
            }
        ]
      },
      {
          icon: '',
          title: 'Item 2',
          content:[
              {
                  text: 'Item',
                  link: 'adsd'
              },
              {
                  text: 'Item',
                  link: 'adsd'
              },
              {
                  text: 'Item',
                  link: ''
              }
          ]
      },
  ]

  const Content01Cards = [
    {
        icon: 'a',
        title: 'Comunicação direta com seu gestor',
        text: 'Aqui você conversa diretamente com o gestor responsável pela sua conta. Nada de ficar pulando de uma pessoa para outra. Você lidará diretamente com o tamador de decisões responsável pelo seu negócio!'
    },
    {
        icon: 'b',
        title: 'Escale sua operação imediatamente!',
        text: 'Nada de ficar procurando por profissionais em banco de vagas, precisa expandir seu time de marketing, é só falar com a gente.'
    },
    {
        icon: 'c',
        title: 'Você sabe onde cada centavo é gasto!',
        text: 'Além da reunião de alinhamento, você também receberá relatórios humanizados e detalhados. Nada de jargão técnico e incompreensível, você saberá exatamente onde o dinheiro é investido e o resultado exato de cada ação!'
    },
  ]

  const TestimonialsContent = [
    {
        rating: 5,
        name: "Gabriela",
        company: "Gateau de Mariee",
        website: "gateaudemariee.com.br",
        avatar: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
        testimonial: "Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun. Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren."
    },
    {
        rating: 5,
        name: "Gabriela",
        company: "Gateau de Mariee",
        website: "gateaudemariee.com.br",
        avatar: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
        testimonial: "Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun. Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren."
    },
    {
        rating: 5,
        name: "Gabriela",
        company: "Gateau de Mariee",
        website: "gateaudemariee.com.br",
        avatar: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
        testimonial: "Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun. Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren."
    },
    {
        rating: 5,
        name: "Gabriela",
        company: "Gateau de Mariee",
        website: "gateaudemariee.com.br",
        avatar: "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
        testimonial: "Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun. Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren."
    }
  ]

  return (
    <>
      <Hero/>
      <Marquee/>
      <Brand01 brands={brands}/>
      <AboutWithFAQ/>
      <Services title="SOMOS UMA AGÊNCIA <br/>FULL-STACK" cards={ServicesCards}/>
      <Content01 title="CHEGA DE COMUNICAÇÃO PRÉCARIA E RELATÓRIOS SEM SENTIDO!" cards={Content01Cards} image={{link: '', title: '', alt: '', loading: 'eager'}}/>
      <Testimonials01 title="Nossos resultados falam por nós!" content="Loren ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur." testimonials={TestimonialsContent} />
    </>
  )
}

export default App
