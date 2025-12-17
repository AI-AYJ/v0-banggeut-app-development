"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { User, Camera, Clock, TrendingUp, Package, CheckCircle2 } from "lucide-react"
import { sampleListings } from "@/lib/sample-data"
import Image from "next/image"

export default function MyPage() {
  const stats = {
    totalListings: sampleListings.length,
    activeListing: sampleListings.filter((i) => i.status === "판매중").length,
    totalSales: sampleListings.filter((i) => i.status === "판매완료").length,
    totalRevenue: sampleListings.filter((i) => i.status === "판매완료").reduce((sum, i) => sum + (i.price || 0), 0),
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Profile Section */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-background border-2">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                <User className="w-12 h-12 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">김방끗</h1>
                <p className="text-muted-foreground text-lg">방끗과 함께한 지 32일</p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge className="bg-primary/20 text-primary border-primary/30">정리 고수</Badge>
                  <Badge variant="outline">누적 판매 5건</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-primary/5">
              <Package className="w-8 h-8 mx-auto mb-3 text-primary" />
              <p className="text-sm text-muted-foreground mb-1">총 등록</p>
              <p className="text-3xl font-bold">{stats.totalListings}</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-chart-1/5">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-chart-1" />
              <p className="text-sm text-muted-foreground mb-1">판매중</p>
              <p className="text-3xl font-bold text-chart-1">{stats.activeListing}</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-chart-2/5">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-chart-2" />
              <p className="text-sm text-muted-foreground mb-1">판매완료</p>
              <p className="text-3xl font-bold text-chart-2">{stats.totalSales}</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-accent">
              <div className="text-2xl mb-3">💰</div>
              <p className="text-sm text-muted-foreground mb-1">총 수익</p>
              <p className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()}원</p>
            </Card>
          </div>

          {/* Achievement Section */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🏆</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">이번 달 성과</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  3건의 판매를 완료하고 총 60,000원의 수익을 올렸습니다!
                </p>
                <div className="flex gap-2">
                  <Badge className="bg-amber-600 text-white">이달의 셀러</Badge>
                  <Badge variant="outline" className="border-amber-600 text-amber-700">
                    빠른 거래왕
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Tabs Section */}
          <Tabs defaultValue="listings" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
              <TabsTrigger value="listings" className="text-base">
                내 판매글
              </TabsTrigger>
              <TabsTrigger value="activity" className="text-base">
                활동 통계
              </TabsTrigger>
            </TabsList>

            {/* Listings Tab */}
            <TabsContent value="listings" className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">내 판매글</h2>
                <Button asChild className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="/upload">
                    <Camera className="mr-2" size={18} />새 글 작성
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4">
                {sampleListings.map((item) => (
                  <Link key={item.id} href={`/my-page/${item.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group cursor-pointer">
                      <div className="flex flex-col sm:flex-row gap-6 p-6">
                        <div className="relative w-full sm:w-48 h-48 sm:h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold mb-2 leading-tight group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-2xl font-bold text-primary">{item.price.toLocaleString()}원</p>
                            </div>
                            <Badge
                              className={
                                item.status === "판매완료"
                                  ? "bg-chart-2 text-white"
                                  : "bg-primary text-primary-foreground"
                              }
                            >
                              {item.status}
                            </Badge>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {new Date(item.date).toLocaleDateString("ko-KR")}
                            </span>
                            <Badge variant="outline">{item.category}</Badge>
                            <span className="flex items-center gap-1">👁️ {item.views}회</span>
                          </div>

                          {item.status === "판매중" && (
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full bg-transparent"
                                onClick={(e) => {
                                  e.preventDefault()
                                }}
                              >
                                수정
                              </Button>
                              <Button
                                size="sm"
                                className="rounded-full"
                                onClick={(e) => {
                                  e.preventDefault()
                                }}
                              >
                                판매완료 처리
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">활동 통계</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">카테고리별 판매</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">판매</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
                        </div>
                        <span className="font-semibold">5건</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">월별 수익</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">1월</span>
                      <span className="font-bold text-primary">60,000원</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">평균 판매 기간</h3>
                  <p className="text-4xl font-bold text-primary mb-2">2.3일</p>
                  <p className="text-sm text-muted-foreground">일반 평균보다 1.5일 빠름</p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">누적 조회수</h3>
                  <p className="text-4xl font-bold text-chart-2 mb-2">
                    {sampleListings.reduce((sum, item) => sum + item.views, 0)}회
                  </p>
                  <p className="text-sm text-muted-foreground">내 글에 대한 관심도</p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
