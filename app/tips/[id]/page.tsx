import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ThumbsUp, MessageCircle, Clock, ArrowLeft, Share2 } from "lucide-react"
import { getTipById, getSampleTips } from "@/lib/sample-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const tips = getSampleTips()
  return tips.map((tip) => ({
    id: tip.id,
  }))
}

export default function TipDetailPage({ params }: { params: { id: string } }) {
  const tip = getTipById(params.id)

  if (!tip) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/tips">
              <ArrowLeft size={16} className="mr-2" />
              목록으로 돌아가기
            </Link>
          </Button>

          <Card className="p-8 md:p-12">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {tip.category}
                </Badge>
                {tip.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance leading-tight">{tip.title}</h1>

              <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground text-base">{tip.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {new Date(tip.date).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
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

            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap leading-relaxed text-foreground">
                {tip.fullContent || tip.content}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-4">
              <Button variant="outline" size="lg" className="flex-1 rounded-full bg-transparent">
                <ThumbsUp size={18} className="mr-2" />
                도움이 됐어요 ({tip.likes.toLocaleString()})
              </Button>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Share2 size={18} className="mr-2" />
                공유하기
              </Button>
            </div>
          </Card>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">비슷한 꿀팁</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {getSampleTips()
                .filter((t) => t.id !== tip.id && t.category === tip.category)
                .slice(0, 2)
                .map((relatedTip) => (
                  <Link key={relatedTip.id} href={`/tips/${relatedTip.id}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <Badge variant="secondary" className="mb-3">
                        {relatedTip.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2 leading-tight">{relatedTip.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedTip.content}</p>
                      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <ThumbsUp size={12} />
                          {relatedTip.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle size={12} />
                          {relatedTip.views}회
                        </span>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
