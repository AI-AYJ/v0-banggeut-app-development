"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { sampleListings } from "@/lib/sample-data"
import { Search, Filter, TrendingUp, Clock } from "lucide-react"
import { useState } from "react"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("전체")

  const activeListings = sampleListings.filter((item) => item.status === "판매중")

  const filteredListings = activeListings.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "전체" || item.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
              마켓플레이스
            </h1>
            <p className="text-lg text-muted-foreground mb-8">다른 사용자들이 판매하는 물건을 구경해보세요</p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="어떤 물건을 찾으시나요?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg rounded-full border-2 focus:border-primary"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                variant={categoryFilter === "전체" ? "default" : "outline"}
                onClick={() => setCategoryFilter("전체")}
                className="rounded-full"
              >
                전체
              </Button>
              <Button
                variant={categoryFilter === "판매" ? "default" : "outline"}
                onClick={() => setCategoryFilter("판매")}
                className="rounded-full"
              >
                판매
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-6 text-center bg-gradient-to-br from-background to-primary/5">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{activeListings.length}</p>
              <p className="text-sm text-muted-foreground">판매중인 물건</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-background to-chart-1/5">
              <Clock className="w-8 h-8 mx-auto mb-2 text-chart-1" />
              <p className="text-2xl font-bold">2.3일</p>
              <p className="text-sm text-muted-foreground">평균 판매 기간</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-background to-chart-2/5">
              <div className="text-3xl mb-2">💰</div>
              <p className="text-2xl font-bold">15,000원</p>
              <p className="text-sm text-muted-foreground">평균 거래 금액</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-background to-accent">
              <div className="text-3xl mb-2">👥</div>
              <p className="text-2xl font-bold">150+</p>
              <p className="text-sm text-muted-foreground">활동중인 사용자</p>
            </Card>
          </div>

          {/* Listings Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {searchQuery
                  ? `'${searchQuery}' 검색 결과 (${filteredListings.length})`
                  : `판매중인 물건 (${filteredListings.length})`}
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter size={16} />
                <span>최신순</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((item) => (
                <Link key={item.id} href={`/marketplace/${item.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group cursor-pointer h-full">
                    <div className="relative w-full h-64 bg-muted overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg">
                        {item.status}
                      </Badge>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-primary">{item.price.toLocaleString()}원</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {new Date(item.date).toLocaleDateString("ko-KR", {
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">👁️ {item.views}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredListings.length === 0 && (
              <Card className="p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">검색 결과가 없습니다</h3>
                <p className="text-muted-foreground">다른 검색어로 시도해보세요</p>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
