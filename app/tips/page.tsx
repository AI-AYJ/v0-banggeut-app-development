import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ThumbsUp, MessageCircle, TrendingUp, Clock, Plus, Search, Filter } from "lucide-react"
import { getSampleTips } from "@/lib/sample-data"

export default function TipsPage() {
  const tips = getSampleTips()

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">실전 꿀팁 커뮤니티</h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  실제 성공 사례만 모았습니다. 클릭해서 자세한 내용을 확인하세요!
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/tips/new">
                  <Plus className="mr-2" size={20} />내 꿀팁 공유하기
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="꿀팁 검색..."
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Filter size={20} className="mr-2" />
                필터
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-shadow">
              <TrendingUp className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-3xl font-bold mb-1">{tips.length}개</h3>
              <p className="text-sm text-muted-foreground">공유된 실전 꿀팁</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20 hover:shadow-lg transition-shadow">
              <ThumbsUp className="w-8 h-8 text-chart-2 mb-3" />
              <h3 className="text-3xl font-bold mb-1">
                {tips.reduce((sum, tip) => sum + tip.likes, 0).toLocaleString()}개
              </h3>
              <p className="text-sm text-muted-foreground">도움이 됐어요</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/30 to-accent/10 border-border hover:shadow-lg transition-shadow">
              <MessageCircle className="w-8 h-8 text-foreground mb-3" />
              <h3 className="text-3xl font-bold mb-1">
                {tips.reduce((sum, tip) => sum + tip.views, 0).toLocaleString()}회
              </h3>
              <p className="text-sm text-muted-foreground">조회수</p>
            </Card>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">카테고리별 꿀팁</h2>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(tips.map((tip) => tip.category))).map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {tips.map((tip) => (
              <Link key={tip.id} href={`/tips/${tip.id}`}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant="secondary"
                            className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          >
                            {tip.category}
                          </Badge>
                          {tip.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                          {tip.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{tip.content}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{tip.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {new Date(tip.date).toLocaleDateString("ko-KR")}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <ThumbsUp size={16} className="text-chart-2" />
                          <span>{tip.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MessageCircle size={16} />
                          <span>{tip.views.toLocaleString()}회</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
