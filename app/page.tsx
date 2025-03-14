import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BarChart, Clock, ChevronRight, Download, Github, Instagram } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-red-50">
      <header className="sticky top-0 z-50 border-b bg-red-50/80 backdrop-blur-md">
        <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-black">
            <Image src="/logo.svg" alt="QuitGambling Logo" width={24} height={24} className="h-6 w-6" />
            <span>QuitGambling</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-black hover:text-red-600 hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-black hover:text-red-600 hover:underline underline-offset-4"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-black hover:text-red-600 hover:underline underline-offset-4"
            >
              FAQ
            </Link>
          </nav>
          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl lg:text-6xl">
                  Break free from gambling addiction
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  QuitGambling helps you overcome gambling addiction with powerful tools and support.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 bg-white/50">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-black md:text-4xl">Key Features</h2>
                <p className="mx-auto max-w-[700px] text-gray-700">
                  Simple tools to help you break free from gambling addiction.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <Clock className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold text-black">Sobriety Tracker</h3>
                <p className="text-sm text-gray-700 text-center">
                  Track your gambling-free days and celebrate milestones.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <BarChart className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold text-black">Trigger Analysis</h3>
                <p className="text-sm text-gray-700 text-center">Identify and understand your gambling triggers.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <Image src="/logo.svg" alt="QuitGambling Logo" width={48} height={48} className="h-12 w-12" />
                <h3 className="text-xl font-bold text-black">Blocking Tools</h3>
                <p className="text-sm text-gray-700 text-center">Block gambling sites and apps to prevent relapse.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-black md:text-4xl">Simple Pricing</h2>
                <p className="mx-auto max-w-[700px] text-gray-700">Choose the plan that works for you.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:max-w-none sm:grid-cols-2 md:gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-black">Monthly</h3>
                  <div className="mt-4 text-3xl font-bold text-black">$9.99</div>
                  <p className="mt-1 text-sm text-gray-700">Billed monthly</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      Full access to all features
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      24/7 support
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      Community access
                    </li>
                  </ul>
                </div>
                <Button
                  className="mt-6 bg-white border-red-600 text-red-600 hover:bg-red-50"
                  variant="outline"
                >
                  Subscribe Monthly
                </Button>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-md">
                <div>
                  <h3 className="text-xl font-bold text-black">Annual</h3>
                  <div className="mt-4 text-3xl font-bold text-black">$89.99</div>
                  <p className="mt-1 text-sm text-gray-700">$7.50/month, billed annually</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      Full access to all features
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      24/7 priority support
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      Community access
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      Save 25% compared to monthly
                    </li>
                  </ul>
                </div>
                <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white">Subscribe Annually</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 bg-white/50">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-black md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700">
                  Find answers to common questions about quitgambling.app.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium text-black hover:text-red-600">
                    How does QuitGambling help with gambling addiction?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    QuitGambling combines blocking technology, behavioral tracking, and community support to help you
                    overcome gambling addiction and maintain sobriety. Our app provides tools to identify triggers,
                    track your progress, and connect with others on the same journey.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium text-black hover:text-red-600">
                    Is my data private?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes, we take privacy seriously. Your data is encrypted and never shared with third parties without
                    your explicit consent. We understand the sensitive nature of recovery and ensure your information
                    remains confidential.
                  </AccordionContent>
                </AccordionItem>                
                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium text-black hover:text-red-600">
                    How do I cancel my subscription?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    You can cancel your subscription at any time through the app settings or by contacting our support
                    team. There are no cancellation fees, and you&apos;ll continue to have access until the end of your
                    billing period.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-red-600 text-white">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Ready to Take Control?</h2>
              <p className="mx-auto max-w-[600px] text-xl text-white/90">
                Start your journey to a gambling-free life today.
              </p>
              <Button size="lg" className="mt-6 bg-white text-red-600 hover:bg-white/90 text-lg px-8 py-6 h-auto font-bold shadow-lg transform transition-transform hover:scale-105">
                <Download className="mr-3 h-6 w-6" />
                Download Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="QuitGambling Logo" width={20} height={20} className="h-5 w-5" />
            <span className="text-sm font-medium text-black">QuitGambling</span>
          </div>
          <p className="text-center text-sm text-gray-700 md:text-left">
            © {new Date().getFullYear()} Latino Excellence LLC. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <Link href="/blog" className="text-sm text-gray-700 hover:text-red-600 hover:underline">
              Blog
            </Link>
            <Link href="/support" className="text-sm text-gray-700 hover:text-red-600 hover:underline">
              Support
            </Link>
            <Link href="/privacy" className="text-sm text-gray-700 hover:text-red-600 hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-700 hover:text-red-600 hover:underline">
              Terms
            </Link>
            <Link href="https://github.com/quitgambling" className="text-gray-700 hover:text-red-600">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com/quitgambling.app" className="text-gray-700 hover:text-red-600">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://tiktok.com/@quitgambling.app" className="text-gray-700 hover:text-red-600">
              
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

