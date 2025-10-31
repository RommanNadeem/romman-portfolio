'use client';

import ClientLogos from './components/ClientLogos';
import Navbar from './components/Navbar';
import WorkingStyle from './components/WorkingStyle';
import Link from 'next/link';
import { Mail, Linkedin, Phone, FileText, Calendar, Sparkles, Rocket, Target, Code, Lightbulb, TrendingUp, Users, Zap, ArrowRight, Music, BookOpen, Palette } from 'lucide-react';
import AnimatedCounter from './components/AnimatedCounter';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'transparent' }}>
      <Navbar />
      <ClientLogos />
      
      {/* Hero Section */}
      <div id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">
        <header className="mb-16">
          {/* Hero Section */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hi, I'm Romman.
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-700 mb-3 font-medium">
              Builder, Product Generalist, and AI-obsessed problem solver.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2"></div>
          </div>
          
          {/* Contact Links with Icons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a 
              href="mailto:romman818@gmail.com" 
              className="group flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 font-medium">romman818@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammadromman/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 font-medium">LinkedIn</span>
            </a>
            <a 
              href="tel:+923214044498"
              className="group flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">+923214044498</span>
            </a>
            <Link
              href="/resume"
              className="group flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors">Formal Resume</span>
            </Link>
            <button
              data-cal-link="romman/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="group flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors">Schedule a Call</span>
            </button>
          </div>

          {/* Disclaimer */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-8 shadow-sm">
            <div className="flex gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-800 leading-relaxed">
                <span className="font-semibold">Disclaimer:</span> This is not my formal resume, so please don't try feeding it to a Resume Parser. (Unless you want to crash it. In that case… go wild.) This is me, unfiltered, raw, and occasionally funny.
              </p>
            </div>
          </div>
        </header>

        {/* Hero Description */}
        <section className="mb-20">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>
            <div className="pl-8 py-6 border-l-0">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 leading-relaxed">
                I help startups turn 0 → 1 ideas into products, systems, and growth engines — without losing taste, speed, or user empathy.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              I thrive at the intersection of product, engineering, design, and go-to-market. My superpower: taking messy, abstract problems and turning them into functioning, loved products fast.
            </p>
            <p className="text-base font-medium text-gray-800 italic">
              AI-native builder who ships fast, solves real problems, and scales products from early validation to meaningful traction.
            </p>
          </div>
        </section>

        {/* Quick Highlights */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                $<AnimatedCounter value={2} suffix="M" duration={1500} />+
              </div>
              <div className="text-sm text-gray-600">Revenue impact</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={10} duration={1500} />+
              </div>
              <div className="text-sm text-gray-600">Industries</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={50} duration={1500} />+
              </div>
              <div className="text-sm text-gray-600">Features shipped</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={3} duration={1500} />
              </div>
              <div className="text-sm text-gray-600">AI Startups Built and Launched</div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Career Highlights */}
        <section id="career" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-12">
            <Rocket className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Career Highlights
            </h2>
          </div>
          
          <div className="grid gap-6 lg:gap-8">
            {/* Humraaz */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Humraaz</span>
                    <span className="text-gray-600 font-normal text-lg"> — Founder/Builder</span>
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 font-medium">
                  AI emotional companion for Pakistan. Built conversational memory, voice, and trust-based experience loops.
                </p>
                <a 
                  href="http://www.humraaz.live" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium mb-4"
                >
                  www.humraaz.live
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-blue-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Built multi-agent emotional memory system (NLP, Supabase, RAG + real-time voice)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Designed onboarding & trust scoring that drove engaged conversations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Fast iteration cycles, <span className="font-semibold text-gray-900">~100+ early signups</span> organically</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Aura Health */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Aura Health</span>
                    <span className="text-gray-600 font-normal text-lg"> – Product Manager</span>
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 font-medium">
                  AI mental-wellbeing app, #1 Sleep App (App Store)
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-green-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Web conversion <span className="font-semibold text-gray-900">~4.2% → ~10%</span> · <span className="font-semibold text-gray-900">~$800K+ ARR impact</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Launched Communities, AI companion, and Referrals (<span className="font-semibold text-gray-900">weekly refs up ~50%</span>)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Trial to paid up <span className="font-semibold text-gray-900">~5%</span> after onboarding fixes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Insightio */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Insightio</span>
                    <span className="text-gray-600 font-normal text-lg"> – Founder & CPO</span>
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 font-medium">
                  AI-research assistant for user feedback synthesis
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-purple-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Built full product → interview insights engine + dashboards</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1"><span className="font-semibold text-gray-900">100+ signups in first week</span>, mobile & web launch</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Rapid PMF learning from founders, PMs, startup teams</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Studio Stream */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Studio Stream</span>
                    <span className="text-gray-600 font-normal text-lg"> – Product & Tech Consultant</span>
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 font-medium">
                  AI + automation systems for design teams
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-indigo-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Automated merch design workflows → <span className="font-semibold text-gray-900">2 minutes to 30 seconds</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Integrated design agent system, prompt-builder, and templates</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CreditBook */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">CreditBook</span>
                    <span className="text-gray-600 font-normal text-lg"> – User Researcher & Product Owner</span>
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 font-medium">
                  Fintech for MSMEs in Pakistan
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-cyan-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1"><span className="font-semibold text-gray-900">20+ FS experiments</span>; <span className="font-semibold text-gray-900">2,000+ merchants</span> onboarded</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Refined feature loops, onboarding, and retention flows</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RepairDesk */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">RepairDesk</span>
                    <span className="text-gray-600 font-normal text-lg"> – Product Ops Lead</span>
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 font-medium">
                  Retail repair software
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-orange-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Launched automation & alignment systems → <span className="font-semibold text-gray-900">40% workflow improvement</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                    <span className="flex-1">Drove customer research, UX, and product ops</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Strength Zones */}
        <section id="strengths" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-12">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Strength Zones
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Zero-to-One Product Building</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Launching real AI products independently and inside startups</p>
            </div>
            <div className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">AI Systems & Agents</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Designed + deployed autonomous + supervised agent pipelines</p>
            </div>
            <div className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Growth Loops & Experiments</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Proven conversion lifts, retention loops, activation design</p>
            </div>
            <div className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">User Insight & Narrative</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Qualitative + quantitative PM, lived user empathy</p>
            </div>
            <div className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Design Taste & Experience</h4>
              <p className="text-sm text-gray-600 leading-relaxed">UI direction + rapid prototyping + UX judgment</p>
            </div>
            <div className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Systems Thinking</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Connecting product + tech + revenue + retention into flywheels</p>
            </div>
          </div>
        </section>

        {/* Signature Working Style */}
        <WorkingStyle />

        {/* More About Work */}
        <section id="work" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-12">
            <Rocket className="w-8 h-8 text-indigo-600" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              More About My Work
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Link 
              href="/insightio"
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl border border-gray-200 hover:border-indigo-300 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-indigo-600 transition-colors">
                  Insightio →
                </h3>
                <p className="text-sm text-gray-600">
                  AI-powered platform that compresses weeks of manual synthesis into same-day insight cycles
                </p>
              </div>
            </Link>
            <Link 
              href="/studiostream"
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">
                  StudioStream AI →
                </h3>
                <p className="text-sm text-gray-600">
                  Turn sales calls into design briefs and generate hundreds of design references in minutes
                </p>
              </div>
            </Link>
            <Link 
              href="/creditbook"
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl border border-gray-200 hover:border-cyan-300 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-cyan-600 transition-colors">
                  CreditBook →
                </h3>
                <p className="text-sm text-gray-600">
                  Payment acceptance pilot deploying POS machines and QR codes for 3,000+ MSME merchants
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* App Analyses */}
        <section id="analyses" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              App Analyses
            </h2>
          </div>
          <Link 
            href="/app-analyses"
            className="group relative block bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    View App Analyses →
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  I regularly publish teardown studies of top consumer apps — onboarding, retention, habit loops, AI usage, and monetization models.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  (Tolan, Headway, Commenter AI, others)
                </p>
              </div>
              <ArrowRight className="w-8 h-8 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-2 transition-all" />
            </div>
          </Link>
        </section>

        {/* Outside Full-time Commitments */}
        <section id="outside" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-12">
            <Users className="w-8 h-8 text-emerald-600" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Outside Full-time Commitments
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="space-y-4 text-gray-700">
              <div className="flex gap-4">
                <span className="text-emerald-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                <p className="flex-1"><span className="font-semibold text-gray-900">Actively supporting founders and PMs</span> on AI strategy and product loops</p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                <p className="flex-1"><span className="font-semibold text-gray-900">Helping teams launch experiments, build systems, test value fast</span></p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-500 leading-none mt-[0.125rem] flex-shrink-0">▸</span>
                <p className="flex-1"><span className="font-semibold text-gray-900">Community contributor</span> in product & AI builder circles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deeper Dive */}
        <section id="dive" className="mb-12 scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-pink-600" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Deeper Dive
            </h2>
          </div>
          <p className="text-gray-500 mb-8 italic text-lg">
            (If you made it here, you must be very invested)
          </p>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <p>• I enjoy writing and composing songs. (Fun fact: I met <a href="https://share.google/8KDBJ0m1XOEGlbJf6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Atif Aslam</a> 3 times, and I think he thinks I am stalking him)</p>
            </div>
            
            <div>
              <p>• I love buying books.</p>
              <p className="mt-2 italic text-gray-500 text-sm">
                (Hot take: there are two kinds of people in the world—those who read books and those who buy them. I'm proudly the latter.)
              </p>
            </div>
            
            <div>
              <p>• Painting — I am terrible at it</p>
              <a 
                href="https://www.notion.so/View-here-at-your-own-risk-26aee82111b280ea820edfa1bcde0757?pvs=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View here at your own risk
              </a>
            </div>
            
            <div>
              <p>• Fun fact: I once travelled to Hunza and stayed alone in the middle of a jungle. Crazy!</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
