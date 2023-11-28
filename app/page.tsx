"use client"

import TrackingForm from "@/components/TrackingForm"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Logo from "../assets/logo.gif"
import TrackingAnimation from "../assets/tracking.json"
import Lottie from "lottie-react"

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <nav className="w-full h-14 border-b bg-white">
        <div className="mx-auto max-w-2xl flex items-center h-full px-4 justify-between">
          <Image src={Logo} alt="Logo" width={100} height={20} />
          <Link href="https://intoglo.com">
            <Button variant="link" className="gap-1">
              Know more
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </nav>
      <section className="flex max-w-xl mx-auto w-full min-h-[calc(100vh-7rem)]">
        <div className="w-full flex flex-col items-center gap-10 px-6">
          <div className="flex flex-col items-center ">
            <Lottie
              animationData={TrackingAnimation}
              loop={true}
              className="w-60"
            />
            <h1 className="text-xl font-semibold text-center leading-snug">
              Cargo tracking on Whatsapp
            </h1>
            <p className="mt-2 text-center text-neutral-500">
              Start by sending a message.
            </p>
          </div>
          <TrackingForm />
        </div>
      </section>
      <footer className="w-full h-14 border-t flex items-center justify-center">
        <p className="text-center text-sm">
          Made with ❤️ from <Link href="https://intoglo.com">Intoglo</Link>
        </p>
      </footer>
    </main>
  )
}
