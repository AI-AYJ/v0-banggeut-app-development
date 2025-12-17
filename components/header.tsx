"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/banggeut-logo.png" alt="방끗 로고" width={120} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            사용방법
          </Link>
          <Link
            href="/marketplace"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            마켓플레이스
          </Link>
          <Link href="/tips" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            꿀팁
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            소개
          </Link>
          <Link
            href="/my-page"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            마이페이지
          </Link>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/upload">사진 한 장으로 시작하기</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="메뉴">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              사용방법
            </Link>
            <Link
              href="/marketplace"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              마켓플레이스
            </Link>
            <Link
              href="/tips"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              꿀팁
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              소개
            </Link>
            <Link
              href="/my-page"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              마이페이지
            </Link>
            <Button asChild size="lg" className="rounded-full w-full">
              <Link href="/upload">사진 한 장으로 시작하기</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
