import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  PlayCircle,
} from "lucide-react"
import styles from "./page.module.css"

const repositoryUrl = "https://github.com/Asyassin10/CallDine"
const demoUrl = "https://www.youtube.com/watch?v=02UnSYEdlA8"

export const metadata: Metadata = {
  title: "CallDine Case Study | Yassine Ait Sidi Brahim",
  description:
    "How CallDine combines AWS Bedrock, RAG, Qdrant and AWS voice services to answer restaurant calls, take orders and manage reservations.",
  openGraph: {
    title: "CallDine — AI Voice Restaurant Assistant",
    description:
      "A full-stack GenAI case study using Next.js, FastAPI, AWS Bedrock, RAG, Qdrant, Chime, Transcribe, Polly and Textract.",
    images: ["https://www.yassine-aitsidibrahim.com/images/calldine/featured-cover.png"],
    url: "https://www.yassine-aitsidibrahim.com/projects/calldine",
    type: "article",
  },
}

const customerScreens = [
  {
    src: "/images/calldine/mobile-menu.png",
    title: "Browse the menu",
    caption: "Explore dishes, prices and categories before placing an order.",
  },
  {
    src: "/images/calldine/mobile-voice-processing.png",
    title: "Talk naturally",
    caption: "Ask about the restaurant or place a request through a browser call.",
  },
  {
    src: "/images/calldine/mobile-voice-confirmed.png",
    title: "Reserve a table",
    caption: "Choose a time and party size, check availability and confirm the booking.",
  },
  {
    src: "/images/calldine/mobile-order-confirmed.png",
    title: "Confirm an order",
    caption: "Customers review a structured order and its delivery details after the conversation.",
  },
]

const adminScreens = [
  {
    src: "/images/calldine/admin-dashboard.png",
    title: "Operations dashboard",
    caption: "Revenue, orders and reservations at a glance, using seeded demo metrics.",
  },
  {
    src: "/images/calldine/admin-orders.png",
    title: "Order management",
    caption: "Staff can inspect and manage orders created through customer and AI-assisted flows.",
  },
  {
    src: "/images/calldine/reservation-calendar.png",
    title: "Reservations & table calendar",
    caption: "See which tables are booked and open a reservation for its details.",
  },
  {
    src: "/images/calldine/order-conversation.png",
    title: "AI call history",
    caption: "The conversation behind an order remains visible, giving staff context and traceability.",
  },
  {
    src: "/images/calldine/assistant-settings.png",
    title: "Assistant voice settings",
    caption: "Choose the assistant's Amazon Polly voice from the admin settings.",
  },
  {
    src: "/images/calldine/admin-menu.png",
    title: "Menu management",
    caption: "Menu items and stock stay under staff control, so AI tools operate on current restaurant data.",
  },
]

const architecture = [
  {
    src: "/images/calldine/knowledge-pipeline.png",
    step: "01",
    title: "Restaurant knowledge pipeline",
    caption:
      "An admin uploads a PDF to S3, Textract extracts its text, FastAPI creates chunks, Titan generates embeddings, and Qdrant stores them for semantic retrieval.",
  },
  {
    src: "/images/calldine/voice-conversation.png",
    step: "02",
    title: "Voice conversation loop",
    caption:
      "Chime establishes the browser call session while Transcribe turns each speech turn into text and Polly returns the assistant's answer as audio.",
  },
  {
    src: "/images/calldine/ai-tools-rag.png",
    step: "03",
    title: "AI tools and RAG",
    caption:
      "Bedrock selects purpose-built tools for menu search, orders and reservations. Knowledge questions use Titan embeddings and Qdrant retrieval before the model responds.",
  },
  {
    src: "/images/calldine/forecasting.png",
    step: "04",
    title: "Demand forecasting roadmap",
    caption:
      "A planned SageMaker DeepAR workflow turns daily order history into demand predictions and admin recommendations; the current recommendation data is demonstrative.",
  },
  {
    src: "/images/calldine/guardrails.png",
    step: "05",
    title: "Configurable guardrails",
    caption:
      "Optional Bedrock Guardrails evaluate both chat requests and voice transcripts, returning a safe blocked response whenever the configured policy intervenes.",
  },
]

const stack = [
  ["Web application", "Next.js, React, TypeScript"],
  ["API layer", "FastAPI, SQLModel, SQLite"],
  ["AI / knowledge search", "Amazon Bedrock (OpenAI GPT-OSS 20B), Amazon Titan Text Embeddings V2, Qdrant"],
  ["Voice", "Amazon Chime SDK, Amazon Transcribe, Amazon Polly"],
  ["Documents / storage", "Amazon S3, Amazon Textract"],
  ["Content filtering", "Amazon Bedrock Guardrails (optional)"],
  ["Local infrastructure", "Docker Compose for Qdrant"],
]

export default function CallDineCaseStudy() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <Link href="/#projects" className={styles.back}><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Full-stack project / Restaurant AI demo</p>
              <h1 className={styles.wordmark}>
                <Image src="/images/calldine/logo.svg" alt="" width={72} height={72} priority />
                CallDine<span className={styles.period}>.</span>
              </h1>
              <p className={styles.headline}>A restaurant assistant,<br />built around <em>conversation.</em></p>
              <p className={styles.intro}>I built CallDine to explore a simple idea: let customers ask about the menu, order dinner and book a table by speaking to an assistant. Give restaurant staff a clear record of what happened.</p>
              <div className={styles.links}>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryLink}><PlayCircle size={18} aria-hidden="true" /> Watch the demo</a>
                <a href={repositoryUrl} target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden="true" /> Source code <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
            <figure className={styles.demo}>
              <a className={styles.video} href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch the CallDine demo on YouTube (opens in a new tab)">
                <Image src="/images/calldine/featured-cover.png" alt="CallDine restaurant AI demo" fill priority sizes="(max-width: 1000px) 92vw, 544px" className={styles.videoPoster} />
                <span className={styles.playLabel}><PlayCircle size={20} aria-hidden="true" /> Play walkthrough <ArrowUpRight size={15} aria-hidden="true" /></span>
              </a>
            </figure>
          </div>
        </header>
        <section className={styles.section} aria-labelledby="customer-heading">
          <div className={styles.sectionHeading}>
            <span className={styles.number}>01 / Experience</span>
            <div><h2 id="customer-heading">A conversation that goes somewhere.</h2><p>Browse the menu, ask a question or start a call. The assistant gathers the details and asks for approval before confirming an order or booking.</p></div>
          </div>
          <div className={styles.phoneGrid}>
            {customerScreens.map((screen) => (
              <figure key={screen.src}>
                <div className={styles.phoneImage}><Image src={screen.src} alt={screen.title} fill sizes="(max-width: 600px) 44vw, (max-width: 1000px) 40vw, 250px" className={styles.contain} /></div>
                <figcaption className={styles.caption}><h3>{screen.title}</h3><p>{screen.caption}</p></figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className={styles.section} aria-labelledby="admin-heading">
          <div className={styles.sectionHeading}>
            <span className={styles.number}>02 / Operations</span>
            <div><h2 id="admin-heading">The staff side of the story.</h2><p>Orders, bookings and conversations stay visible in the admin area. Staff can also edit the menu, update stock and add restaurant knowledge.</p></div>
          </div>
          <div className={styles.adminGrid}>
            {adminScreens.map((screen, index) => (
              <figure key={screen.src} className={index === 0 ? styles.featuredScreen : undefined}>
                <a className={styles.imageLink} href={screen.src} target="_blank" rel="noopener noreferrer" aria-label={"Open " + screen.title + " screenshot at full size"}>
                  <Image src={screen.src} alt={screen.title} width={1920} height={1080} sizes={index === 0 ? "(max-width: 1200px) 92vw, 1120px" : "(max-width: 700px) 92vw, 540px"} className={styles.screenshot} />
                </a>
                <figcaption className={styles.caption}><h3>{screen.title}</h3><p>{screen.caption}</p></figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className={styles.section} aria-labelledby="architecture-heading">
          <div className={styles.sectionHeading}>
            <span className={styles.number}>03 / Architecture</span>
            <div><h2 id="architecture-heading">How the pieces fit.</h2><p>FastAPI coordinates model requests, restaurant tools and stored knowledge. Each diagram follows one part of that process.</p></div>
          </div>
          <div className={styles.workflows}>
            {architecture.map((item) => (
              <figure key={item.src} className={styles.workflow}>
                <figcaption><span className={styles.workflowNumber}>{item.step}</span><div><h3>{item.title}</h3><p>{item.caption}</p></div></figcaption>
                <a className={styles.imageLink} href={item.src} target="_blank" rel="noopener noreferrer" aria-label={"Open " + item.title + " diagram at full size"}>
                  <Image src={item.src} alt={item.title} width={1920} height={1080} sizes="(max-width: 1200px) 92vw, 1120px" className={styles.screenshot} />
                </a>
              </figure>
            ))}
          </div>
        </section>
        <section className={styles.section} aria-labelledby="stack-heading">
          <div className={styles.sectionHeading}><span className={styles.number}>04 / Technology</span><div><h2 id="stack-heading">The stack.</h2><p>The services and libraries behind the demo.</p></div></div>
          <dl className={styles.stack}>{stack.map(([layer, technologies]) => (<div key={layer}><dt>{layer}</dt><dd>{technologies}</dd></div>))}</dl>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerBrand}><Image src="/images/calldine/logo.svg" alt="" width={36} height={36} /><span>CallDine</span></div>
          <div className={styles.links}>
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">Explore the code <ArrowUpRight size={16} aria-hidden="true" /></a>
            <Link href="/#projects">Back to projects <ArrowLeft size={16} aria-hidden="true" /></Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
