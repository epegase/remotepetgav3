import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>A Propos - Duverger PETGA</title>
        <meta
          name="description"
          content="Je suis Duverger PETGA. Je vis à Douala où j'ose pour un meilleur futur "
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Je suis Duverger PETGA. Je vis à Douala où j'ose pour un meilleur futur
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              Je suis Duverger PETGA, Architecte de Solutions AWS et j’ai entrepris de partager mon parcours 
              pour permettre à d’autres personnes intéressées de sauter le pas et changer de carrière. 
              Je suis aussi le fondateur de FaStyle, une application qui permet de sauvegarder et 
              partager les inspirations de styles, beauté et tout ce qui tourne autour de la mode et le bien-être. 
              Elle est en cours de développement et le MVP sera disponible d’ici quelques mois. 
              Mes domaines d’intérêt portent principalement sur le Cloud, les systèmes distribués, 
              l’intelligence artificielle et l’industrie du capital risque (Venture Capital).
              </p>
              <p>
              A la base, j’ai occupé la fonction de gestionnaire de stocks dans une entreprise industrielle 
              pendant près de neuf (9) ans et j’ai entrepris, depuis Janvier 2020, un processus de changement 
              de carrière qui m’a mené tour à tour à décrocher une certification à React avec Udacity, une sur 
              les bases du machine learning avec AWS et une autre sur GraphQL avec Apollo GraphQL. 
              </p>
              <p>
              J’ai été sélectionné comme AWS Community Builder début 2022 et j’ai entrepris d’aider 
              d’autres personnes soucieuses de changer de carrière à le faire. Je pense être mieux placé, 
              à travers mon parcours et mes résultats, pour comprendre ceux qui hésitent à sauter le pas et 
              qui trouvent que c'est difficile, voire impossible d'y arriver sans diplômes, background ou 
              connaissances en IT. Mon message est simple : “C’est Possible”.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/epegase"  icon={TwitterIcon}>
                Me suivre sur Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/epegase"  icon={InstagramIcon} className="mt-4">
                Me suivre sur Instagram
              </SocialLink>
              <SocialLink href="https://github.com/epegase" icon={GitHubIcon} className="mt-4">
                Me suivre sur GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/duverger-petga-0a273096/" icon={LinkedInIcon} className="mt-4">
                Me suivre sur LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:duvergerpetga@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                duvergerpetga@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
